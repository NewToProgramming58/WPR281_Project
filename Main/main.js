let currentUser;
window.onload = function(){ // Ensures the page is loaded before functions are executed.
    LoadUsers();
    LoadProjects();
    LoadBugs();

    var form = document.getElementById("bugForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    var select = document.getElementById('projects');
    let arrProjects = JSON.parse(window.localStorage.getItem("projects"));
    for (let i = 0; i < arrProjects.length; i++) {
        var opt = document.createElement('option');
        opt.value = arrProjects[i]["name"];
        opt.innerHTML = arrProjects[i]["name"];
        select.appendChild(opt);
    }

    var select = document.getElementById('Identifier');
    let arrUsers = JSON.parse(window.localStorage.getItem("users"));
    let loggedID = window.localStorage.getItem("loggedInUser");
    console.log(arrUsers);
    for (let i = 0; i < arrUsers.length; i++) {
        if (arrUsers[i]["id"] == loggedID) {
            currentUser = {
                "id": arrUsers[i]["id"],
                "name": arrUsers[i]["name"],
                "surname": arrUsers[i]["surname"],
                "profilePicture": arrUsers[i]["profilePicture"],
            }
        }
        var opt = document.createElement('option');
        opt.value = arrUsers[i]["username"];
        opt.innerHTML = arrUsers[i]["username"];
        select.appendChild(opt);
    }
    
    //document.getElementById('welcome').innerHTML = `Welcome ${currentUser.name} to the bug tracking site!`;
    
    // MARKDOWN CODE - NOT WORKING YET, JS GIVING ISSUES!
    // md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
    // html_content = markdown.toHTML( md_content );

    // const divShowData = document.getElementById('TestMD');
    // divShowData.innerHTML = "";
    // divShowData.appendChild(html_content);
}