window.onload = LoadProjects();

let projectTableID = -1; // Don't know what this is for; was in bugManipulation.js

function LoadProjects(){
    let arrProjects = JSON.parse(window.localStorage.getItem("projects"));
    if (arrProjects !== null) {
        // Create Table from JSON object array
        let col = [];
        Object.keys(arrProjects[0]).forEach(function(key) {
            col.push(key);
        });
        // Create Table
        const table = document.createElement("table");

        // Create table header row using the extracted headers above
        let tr = table.insertRow(-1); // table row

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
    
        // add json data to the table as rows.
        for (let i = 0; i < arrProjects.length; i++) {  
            tr = table.insertRow(-1);    
            for (key in arrProjects[i])
            {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = key === "members" ? arrProjects[i][key].join(", ") : arrProjects[i][key];                             
            }                                    
        }
        // Now, add the newly created table with json data, to a container.
        const divShowData = document.getElementById("divShowData");
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
    }
}

function AddProject(edit){
    //Get values for new project
    var issueName = document.getElementById('IssueName').value;
    var projectName = document.getElementById('Name').value;
    var description = document.getElementById('description').value;
    
    if (projectName === '' || issueName === '' || description === '') {
        alert('Please enter all fields');
    } else {
        //get project from storage
        let projects = JSON.parse(window.localStorage.getItem('projects'));
        if (projects == null) {
            projects = [];  
        }
        const newProject = {
            'id': projects.length > 0 ? parseInt(projects[projects.length - 1]['id']) + 1 : 1,
            'issue': projectName,
            'description': description,
        }
        // add project to array
        if (edit == true) {
            if (projectTableID > 0) {
                let length = projects.length;
                let i = -1;
                let projectExists = false;
                while (i < length && !projectExists) {
                    i++;
                    if (projects[i]['id'] == projectTableID) {
                        projectExists = true; 
                        newProject["id"] = projectTableID;
                        projects[i] = newProject;
                    }
                }
                window.localStorage.setItem('projects', JSON.stringify(projects));
                LoadProjects();
            } else {
                alert("Select a project first");
            } 
        } else {    
            projects.push(newProject);
            //store array again
            window.localStorage.setItem('projects', JSON.stringify(projects));
            LoadProjects();
        }
        console.log(projects);
    }
}
function RemoveProject(){   
    if (projectTableID > 0) {
        let projects = JSON.parse(window.localStorage.getItem('projects'));
        if (projects !== null) {
            let length = projects.length;
            if (length > 1) {
            let i = -1;
                let projectExists = false;
                while (i < length && !bugExists) {
                    i++;
                    if (projects[i]['id'] == projectTableID) {
                        projectExists = true;            
                        projects.splice(i, 1);
                    }
                }
                window.localStorage.setItem('projects', JSON.stringify(projects));
            } else {
                window.localStorage.removeItem('projects');
            }
            LoadProjects();
            projectTableID = -1;
        }
    } else {
        alert("Select a project first");
    }
}