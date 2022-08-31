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
        }      
    }
}