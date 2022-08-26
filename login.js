function login(){
    let users = JSON.parse(window.localStorage.getItem('users'));
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    let i = -1;
    let length = users.length;
    console.log(users[0]['username']);
    let userExists = false;
    if (username == "" || pass == "") {
        alert("please enter a username and password");
    } else {
        while (i < length && !userExists) {
            i++;
            if (users[i]['username'] === username || users[i]['email'] === username) {
                userExists = true;            
                if (users[i]['password'] === pass) {
                    var location = window.location.href;
                    var directoryPath = location.substring(0, location.lastIndexOf("/") + 1);
                    window.location = directoryPath + "MainForm.html";
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
    document.getElementById("myForm").onsubmit = login;

    let users = 
    [ 
        {// SETUP ADMIN USER
            id: '1',
            username: 'admin',
            name: 'Tendai',
            surname: 'Mkwaira',
            email: 'mkwaira.t@belgiumcampus.ac.za',
            password: '123'
        },            
        {// SETUP PEOPLE
            id: '2',
            username: 'the douest of Johns 556',
            name: 'John',
            surname: 'Doe',
            email: 'john.doe@gmail.com',
            password: '123'
        },
        {
            id: '3',
            username: 'the douest of Janes 247',
            name: 'Jane',
            surname: 'Doe',
            email: 'jane.doe@gmail.com',
            password: '123'
        }
    ]
    window.localStorage.setItem('users', JSON.stringify(users)); 
    // SETUP PROJECTS
    window.localStorage.setItem('PRJ01', 'Project 1');
    window.localStorage.setItem('PRJ02', 'Project 2');
}