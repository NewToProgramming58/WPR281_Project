function register() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var password = document.getElementById('password').value;
    var passwordValidate = document.getElementById('passwordValidate').value;
    if (email == '' || username == '' || name == '' || surname == '' || password == '' || passwordValidate == '') {
        alert('Please enter a valid email or username and name and surname and password');
    } else if (email.indexOf('@') == -1) {
        alert('Please enter a valid email');
    } else if (password !== passwordValidate) {
        alert('Passwords do not match');
    } else {
        let arrUsers = JSON.parse(window.localStorage.getItem("users"));
        userExists = false; 
        if (arrUsers !== null) {
            for (let i = 0; i < arrUsers.length; i++) {
                if (arrUsers[i]["email"] == email || arrUsers[i]["username"] == username) {
                    userExists = true;
                    break;
                }
            }
        } else {
            arrUsers = [];
            userExists = true; 
        }
        if (!userExists) {
            let user = {
                id: arrUsers.length > 0 ? parseInt(arrUsers[arrUsers.length - 1]['id']) + 1 : 1,
                username: username,
                name: name,
                surname: surname,
                email: email,
                password: password,
                profilePicture: '../Images/default.jpg',
            }
            arrUsers.push(user);
            window.localStorage.setItem("users", JSON.stringify(arrUsers));
            document.getElementById('email').innerHTML = '';
            document.getElementById('username').innerHTML = '';
            document.getElementById('name').innerHTML = '';
            document.getElementById('surname').innerHTML = '';
            document.getElementById('password').innerHTML = '';
            document.getElementById('passwordValidate').innerHTML = '';
            alert(`${name} ${surname} successfully registered`);
        } else {
            alert("Username or email already exists");
        }
    }
}

function login() {window.location.href = '../Login/login.html'}