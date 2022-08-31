let currentUser;

function changePFP(){
    let response = window.prompt("Enter url for profile picture","");
    if (response !== null && response !== "") {
        let arrUsers = JSON.parse(window.localStorage.getItem("users"));
        for (let i = 0; i < arrUsers.length; i++) {
            if (arrUsers[i]["id"] == currentUser.id) {
                arrUsers[i]["profilePicture"] = response;
                break;
            }
        }
        window.localStorage.setItem("users", JSON.stringify(arrUsers));
        document.getElementById('profileImage').src = response;
    }
}

window.onload = function(){ // Ensures the page is loaded before functions are executed.
    LoadUsers();
    // LoadProjects();
    // LoadBugs();
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