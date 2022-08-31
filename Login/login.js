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
                    window.location.href = '../Main/index.html';
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
                profilePicture: 'data:image/jpeg;base64,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',
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
                description: "A app that keeps track of your fitness goals"
            },            
            {
                id: '2',
                name: 'WPR281_Project',
                members: ['admin'],
                description: "Design a bug tracking website"
            },  
            {
                id: '3',
                name: 'Some project that someone started to work on but everybody got bored quickly',
                members: ['the douest of Janes 247', 'the douest of Johns 556', 'admin'],
                description: "If read the name you can understand why I am too lazy to type a proper description"
            },  
        ]
        window.localStorage.setItem('projects', JSON.stringify(projects)); 
    }

    let bugs = JSON.parse(window.localStorage.getItem("bugs"));
    if (bugs == null) {
        // SETUP PROJECTS
        let bugs = 
        [               
            {"id":1,"Issue":"focus group","Description":"Team-oriented encompassing framework","Priority":"Medium","Status":"Open","Identified by":"admin","Target Complete Date":"2022/02/21","Date Identified":"2022/08/07","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2022/04/30"},
            {"id":2,"Issue":"product","Description":"Business-focused foreground matrices","Priority":"Medium","Status":"Open","Identified by":"admin","Target Complete Date":"2021/10/27","Date Identified":"2022/01/06","Assigned To":"admin","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/08/24"},
            {"id":3,"Issue":"systematic","Description":"Object-based mobile array","Priority":"Low","Status":"Overdue","Identified by":"the douest of Johns 556","Target Complete Date":"2021/08/29","Date Identified":"2022/07/31","Assigned To":"admin","Project":"WPR281_Project","Actual Complete Date":"2021/10/03"},
            {"id":4,"Issue":"Virtual","Description":"Mandatory responsive flexibility","Priority":"High","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2021/12/30","Date Identified":"2022/05/09","Assigned To":"admin","Project":"WPR281_Project","Actual Complete Date":"2022/03/26"},
            {"id":5,"Issue":"stable","Description":"Networked bi-directional local area network","Priority":"Medium","Status":"Closed","Identified by":"the douest of Johns 556","Target Complete Date":"2022/04/16","Date Identified":"2021/08/16","Assigned To":"the douest of Janes 247","Project":"Fitness App","Actual Complete Date":"2021/08/20"},
            {"id":6,"Issue":"adapter","Description":"Reactive transitional structure","Priority":"Low","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2022/01/22","Date Identified":"2022/06/10","Assigned To":"admin","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/04/02"},
            {"id":7,"Issue":"instruction set","Description":"Synchronised zero administration product","Priority":"Low","Status":"Overdue","Identified by":"admin","Target Complete Date":"2021/12/07","Date Identified":"2022/01/31","Assigned To":"admin","Project":"Fitness App","Actual Complete Date":"2022/03/15"},
            {"id":8,"Issue":"solution","Description":"Networked secondary adapter","Priority":"Low","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2022/06/25","Date Identified":"2021/08/27","Assigned To":"the douest of Johns 556","Project":"Fitness App","Actual Complete Date":"2022/05/09"},
            {"id":9,"Issue":"bandwidth-monitored","Description":"Intuitive radical algorithm","Priority":"High","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2022/05/09","Date Identified":"2022/03/09","Assigned To":"the douest of Janes 247","Project":"WPR281_Project","Actual Complete Date":"2022/04/20"},
            {"id":10,"Issue":"eco-centric","Description":"Business-focused 5th generation circuit","Priority":"Low","Status":"Overdue","Identified by":"the douest of Janes 247","Target Complete Date":"2021/10/29","Date Identified":"2021/08/15","Assigned To":"the douest of Janes 247","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/02/03"},
            {"id":11,"Issue":"standardization","Description":"Re-engineered zero tolerance budgetary management","Priority":"Medium","Status":"Overdue","Identified by":"admin","Target Complete Date":"2021/12/07","Date Identified":"2022/06/23","Assigned To":"the douest of Janes 247","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2021/10/15"},
            {"id":12,"Issue":"holistic","Description":"Reverse-engineered holistic task-force","Priority":"Low","Status":"Closed","Identified by":"admin","Target Complete Date":"2021/11/30","Date Identified":"2022/08/07","Assigned To":"admin","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/05/10"},
            {"id":13,"Issue":"User-friendly","Description":"Adaptive discrete ability","Priority":"Medium","Status":"Overdue","Identified by":"admin","Target Complete Date":"2021/11/17","Date Identified":"2021/11/26","Assigned To":"admin","Project":"Fitness App","Actual Complete Date":"2022/08/19"},
            {"id":14,"Issue":"secured line","Description":"Persistent fault-tolerant database","Priority":"High","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2021/08/30","Date Identified":"2021/12/08","Assigned To":"the douest of Janes 247","Project":"WPR281_Project","Actual Complete Date":"2021/11/01"},
            {"id":15,"Issue":"holistic","Description":"Diverse motivating model","Priority":"Low","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2021/10/09","Date Identified":"2022/01/30","Assigned To":"admin","Project":"WPR281_Project","Actual Complete Date":"2022/05/06"},
            {"id":16,"Issue":"Universal","Description":"Automated interactive projection","Priority":"Low","Status":"Overdue","Identified by":"admin","Target Complete Date":"2022/03/29","Date Identified":"2022/02/11","Assigned To":"the douest of Janes 247","Project":"WPR281_Project","Actual Complete Date":"2022/04/29"},
            {"id":17,"Issue":"Future-proofed","Description":"Compatible 3rd generation success","Priority":"High","Status":"Closed","Identified by":"the douest of Johns 556","Target Complete Date":"2021/08/31","Date Identified":"2022/07/29","Assigned To":"the douest of Johns 556","Project":"Fitness App","Actual Complete Date":"2022/06/15"},
            {"id":18,"Issue":"Devolved","Description":"Enterprise-wide even-keeled moderator","Priority":"Low","Status":"Closed","Identified by":"admin","Target Complete Date":"2022/06/07","Date Identified":"2021/12/08","Assigned To":"admin","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/05/25"},
            {"id":19,"Issue":"Reverse-engineered","Description":"Organic web-enabled contingency","Priority":"High","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2021/12/28","Date Identified":"2022/06/17","Assigned To":"admin","Project":"Fitness App","Actual Complete Date":"2021/10/30"},
            {"id":20,"Issue":"5th generation","Description":"Ameliorated real-time conglomeration","Priority":"Medium","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2021/12/13","Date Identified":"2021/08/06","Assigned To":"admin","Project":"WPR281_Project","Actual Complete Date":"2021/11/09"},
            {"id":21,"Issue":"Adaptive","Description":"Team-oriented logistical extranet","Priority":"High","Status":"Closed","Identified by":"the douest of Johns 556","Target Complete Date":"2022/01/13","Date Identified":"2022/02/08","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2022/01/12"},
            {"id":22,"Issue":"leverage","Description":"Optional homogeneous emulation","Priority":"Low","Status":"Overdue","Identified by":"the douest of Johns 556","Target Complete Date":"2022/04/19","Date Identified":"2021/08/28","Assigned To":"the douest of Johns 556","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/06/01"},
            {"id":23,"Issue":"Public-key","Description":"Re-engineered system-worthy projection","Priority":"High","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2021/10/07","Date Identified":"2021/08/24","Assigned To":"the douest of Janes 247","Project":"Fitness App","Actual Complete Date":"2022/06/02"},
            {"id":24,"Issue":"matrices","Description":"Innovative web-enabled groupware","Priority":"Medium","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2022/07/05","Date Identified":"2022/05/25","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2022/03/17"},
            {"id":25,"Issue":"collaboration","Description":"User-centric intermediate monitoring","Priority":"High","Status":"Open","Identified by":"admin","Target Complete Date":"2022/01/31","Date Identified":"2021/08/18","Assigned To":"admin","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/01/15"},
            {"id":26,"Issue":"bandwidth-monitored","Description":"Cloned encompassing leverage","Priority":"High","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2022/01/30","Date Identified":"2022/05/14","Assigned To":"admin","Project":"Fitness App","Actual Complete Date":"2022/07/05"},
            {"id":27,"Issue":"bandwidth-monitored","Description":"Profound holistic core","Priority":"Low","Status":"Overdue","Identified by":"the douest of Janes 247","Target Complete Date":"2022/08/08","Date Identified":"2022/06/23","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2021/12/22"},
            {"id":28,"Issue":"Sharable","Description":"Devolved grid-enabled encoding","Priority":"Low","Status":"Closed","Identified by":"the douest of Janes 247","Target Complete Date":"2022/06/25","Date Identified":"2022/05/16","Assigned To":"the douest of Janes 247","Project":"Fitness App","Actual Complete Date":"2021/08/17"},
            {"id":29,"Issue":"Self-enabling","Description":"User-centric static installation","Priority":"High","Status":"Open","Identified by":"admin","Target Complete Date":"2021/10/09","Date Identified":"2022/05/05","Assigned To":"the douest of Janes 247","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/04/02"},
            {"id":30,"Issue":"grid-enabled","Description":"Fully-configurable optimal matrix","Priority":"Low","Status":"Overdue","Identified by":"the douest of Johns 556","Target Complete Date":"2022/03/26","Date Identified":"2021/09/25","Assigned To":"the douest of Janes 247","Project":"WPR281_Project","Actual Complete Date":"2022/01/11"}        
        ]
        window.localStorage.setItem('bugs', JSON.stringify(bugs)); 
    }
}

function register() {
    window.location.href = '../Register/Register.html';
}