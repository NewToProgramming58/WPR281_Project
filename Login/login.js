function login(){
    let users = JSON.parse(window.localStorage.getItem('users'));
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    let i = -1;
    let length = users.length - 1;
    let userExists = false;
    if (username == "" || pass == "") {
        alert("please enter a username and password");
    } else {
        while (i < length && !userExists) {
            i++;
            if (users[i]['username'] === username || users[i]['email'] === username.toLowerCase()) {
                userExists = true;            
                if (users[i]['password'] === pass) {
                    window.location.href = '../Main/MainForm.html';
                    window.localStorage.setItem("loggedInUser",users[i]['id']);
                } else {
                    document.getElementById("password").value = "";
                    alert("Incorrect password!");
                }        
            }
        }
        if (!userExists) {
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            alert("Incorrect username!");
        }
    }
}

window.onload = function(){ //ensures the page is loaded before functions are executed.
    localStorage.clear();
    let arrUsers = JSON.parse(window.localStorage.getItem("users"));
    if (arrUsers == null) {
        let users = 
        [ 
            {// SETUP ADMIN USER
                id: '1',
                username: 'admin',
                name: 'Tendai',
                surname: 'Mkwaira',
                email: 'mkwaira.t@belgiumcampus.ac.za',
                password: '123',
                profilePicture: '../Images/default.jpg',
            },            
            {// SETUP PEOPLE
                id: '2',
                username: 'the douest of Johns 556',
                name: 'John',
                surname: 'Doe',
                email: 'john.doe@gmail.com',
                password: '123',
                profilePicture: '../Images/default.jpg',
            },
            {
                id: '3',
                username: 'the douest of Janes 247',
                name: 'Jane',
                surname: 'Doe',
                email: 'jane.doe@gmail.com',
                password: '123',
                profilePicture: '../Images/default.jpg',
            }
        ]
        window.localStorage.setItem('users', JSON.stringify(users)); 
    }

    let projects = JSON.parse(window.localStorage.getItem("projects"));
    if (projects == null) {
        // SETUP PROJECTS
        let projects = 
        [ 
            {
                id: '1',
                name: 'Fitness App',
                members: ['the douest of Janes 247', 'the douest of Johns 556'],
            },            
            {
                id: '2',
                name: 'Being a dope lecturer',
                members: ['admin'],
            },  
            {
                id: '3',
                name: 'Some project that someone started to work on but everybody got bored quickly',
                members: ['the douest of Janes 247', 'the douest of Johns 556', 'admin'],
            },  
        ]
        window.localStorage.setItem('projects', JSON.stringify(projects)); 
    }
}

function register() {
    window.location.href = '../Register/Register.html';
}