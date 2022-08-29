window.onload = function() {
    var selectAssigned = document.getElementById('summaryUsers');
    let users = JSON.parse(window.localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        var opt = document.createElement('option');
        opt.value = users[i]["username"];
        opt.innerHTML = users[i]["username"];
        selectAssigned.appendChild(opt);
    }

    
    let projects = JSON.parse(window.localStorage.getItem("projects"));
    if (projects !== null) {
        var selectAssigned = document.getElementById('summaryProjects');
        for (let i = 0; i < projects.length; i++) {
            var opt = document.createElement('option');
            opt.value = projects[i]["name"];
            opt.innerHTML = projects[i]["name"];
            selectAssigned.appendChild(opt);
        }
    }
    // document.getElementById('welcome').innerHTML = `Welcome ${currentUser.name} to the bug tracking site!`;
    // document.getElementById('profileImage').src = currentUser.profilePicture;
    showAllBugs();
}
function showAllBugs(){
    document.getElementById('summaryProjects').value = "";
    document.getElementById('summaryUsers').value = "";
    document.getElementById('summaryStatuses').value = "";
    document.getElementById('summaryPriority').value = "";
    filter();
}
function filter() { 
    let bugs = JSON.parse(window.localStorage.getItem("bugs"));
    if (bugs !== null) {
        var selectProjects = document.getElementById('summaryProjects').value;
        var selectIdentified = document.getElementById('summaryUsers').value;
        var selectStatuses = document.getElementById('summaryStatuses').value;
        var selectPriority = document.getElementById('summaryPriority').value;

        var noFilterProjects = selectProjects == "";
        var noFilterIdentified = selectIdentified == "";
        var noFilterStatuses = selectStatuses == "";
        var noFilterPriority = selectPriority == "";
        let showAll = noFilterProjects && noFilterIdentified && noFilterStatuses && noFilterPriority;
        let filteredBugs = showAll == true ? bugs.splice(0,20) : [];
        if (!showAll) {         
            for (var i = 0; i < bugs.length; i++) {
                if ((noFilterProjects || selectProjects == bugs[i]["Project"]) && (noFilterIdentified || selectIdentified == bugs[i]["Identified by"]) 
                && (noFilterStatuses || selectStatuses == bugs[i]["Status"]) && (noFilterPriority || bugs[i]["Priority"] == selectPriority)) {
                    filteredBugs.push(bugs[i]);
                }
            }
        }
        
        // Create Table
        const table = document.getElementById("summary");
        for(var i = table.rows.length - 1; i > 0; i--)
        {
            table.deleteRow(i);
        }

        
        if (filteredBugs.length > 0) {
            let tr;// table row
    
            // add json data to the table as rows.
            for (let i = 0; i < filteredBugs.length; i++) {
                let bug = {
                    "project": filteredBugs[i]["Project"],
                    "issue": filteredBugs[i]["Issue"],
                    "identifier": filteredBugs[i]["Identified by"],
                    "status": filteredBugs[i]["Status"],
                    "Actual Complete Date": filteredBugs[i]["Actual Complete Date"],
                    "priority": filteredBugs[i]["Priority"],
                };
                tr = table.insertRow(-1);
                if (i % 2 == 0)
                {
                    tr.setAttribute('class', 'colour1');
                }
                else
                {
                    tr.setAttribute('class', 'colour2');
                }
                for (key in bug)
                {            
                    let tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = bug[key];
    
                    if (bug[key] == 'High')
                        tabCell.setAttribute('style', 'background-color:red');
                    else if (bug[key] == 'Medium')
                            tabCell.setAttribute('style', 'background-color:yellow');
                    else if (bug[key] == 'Low')
                        tabCell.setAttribute('style', 'background-color:green');          
                }              
            }
        }      
    }
}