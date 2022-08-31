window.onload = function() {
    LoadProjects();
    let arrUsers = JSON.parse(window.localStorage.getItem("users"));
    let loggedID = window.localStorage.getItem("loggedInUser");
    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i]["id"] == loggedID) {
            currentUser = {
                "id": arrUsers[i]["id"],
                "name": arrUsers[i]["name"],
                "surname": arrUsers[i]["surname"],
                "profilePicture": arrUsers[i]["profilePicture"],
            }
        }
    }
    document.getElementById('welcome').innerHTML = `Welcome ${currentUser.name} to the bug tracking site!`;
    document.getElementById('profileImage').src = currentUser.profilePicture;
}

let projectTableID = -1; // Don't know what this is for; was in bugManipulation.js

function LoadProjects(){
    let arrProjects = JSON.parse(window.localStorage.getItem("projects"));
    if (arrProjects !== null) {
        const table = document.getElementById("projects");
        for(var i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }
        if (arrProjects.length > 0) {
            let tr;// table row
    
            for (let i = 0; i < arrProjects.length; i++) {
                tr = table.insertRow(-1);
                if (i % 2 == 0)
                {
                    tr.setAttribute('class', 'colour1');
                }
                else
                {
                    tr.setAttribute('class', 'colour2');
                }
                for (key in arrProjects[i])
                {            
                    let tabCell = tr.insertCell(-1);        
                    tabCell.innerHTML = arrProjects[i][key];        
                }              
            }
            if (table) {
                for (var i = 0; i < table.rows.length; i++) {
                  table.rows[i].onclick = function() {
                        projectTableID = this.childNodes[0].innerHTML;
                        document.getElementById('Name').value = this.childNodes[1].innerHTML;;
                        document.getElementById('ShortDescription').value =this.childNodes[2].innerHTML;
                        HighlightRow(table)
                  };
                }
            }
                
        }      
    }
}

function HighlightRow(table) {
    var cells = table.getElementsByTagName('td');
    for(var i = 0; i < cells.length; i++){
        // Get individual cell
        var cellVals = cells[i];
        // onclick event highlights
        cellVals.onclick = function () {
            // Get row id for cell
            var rowsNotSelected = table.getElementsByTagName('tr');
            var rowId = this.parentNode.rowIndex;
            for(let row = 0; row < rowsNotSelected.length; row++){
                rowsNotSelected[row].style.backgroundColor = "";
                rowsNotSelected[row].classList.remove('selected');
            }
            var selectedRow = table.getElementsByTagName('tr')[rowId];
            selectedRow.style.backgroundColor = "aliceblue";
            selectedRow.className += " selected"; // Don't understand this; will keep searching
        }
    }
}

function AddProject(edit){
    //Get values for new project
    var projectName = document.getElementById('Name').value;
    var description = document.getElementById('ShortDescription').value;
    
    if (projectName === '' || description === '') {
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
                while (i < length && !projectExists) {
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