function login(){
    var key = document.getElementById('username').value;
    
    var adminPassword = window.localStorage.getItem(key);

    if (adminPassword == document.getElementById('password').value)
    {
        var location = window.location.href;
        var directoryPath = location.substring(0, location.lastIndexOf("/") + 1);
        
        window.location = directoryPath + "MainForm.html";
        return false;
    }
    else
    {
        alert("Username and Password doesn't match.");
    }
}

window.onload = function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("myForm").onsubmit = login;

    // SETUP ADMIN USER
    window.localStorage.setItem('admin', 'password');

    // SETUP PEOPLE
    const user01 = {
        id: '1',
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@gmail.com',
    }

    const user02 = {
        id: '2',
        name: 'Jane',
        surname: 'Doe',
        email: 'jane.doe@gmail.com',
    }

    window.localStorage.setItem('User01', JSON.stringify(user01)); 
    window.localStorage.setItem('User02', JSON.stringify(user02));  
    
    // SETUP PROJECTS
    window.localStorage.setItem('PRJ01', 'Project 1');
    window.localStorage.setItem('PRJ02', 'Project 2');
}