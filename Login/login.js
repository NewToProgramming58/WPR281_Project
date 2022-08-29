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
                name: 'WPR281_Project',
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

    let bugs = JSON.parse(window.localStorage.getItem("bugs"));
    if (bugs == null) {
        // SETUP PROJECTS
        let bugs = 
        [   
            {"id":1,"Issue":"optimal","Description":"Re-engineered heuristic intranet","Priority":"Medium","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2021/12/07","Date Identified":"2021/10/27","Assigned To":"the douest of Johns 556","Project":"Fitness App","Actual Complete Date":"2022/06/28"},
            {"id":2,"Issue":"standardization","Description":"Right-sized motivating archive","Priority":"Low","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2022/01/03","Date Identified":"2021/10/31","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2022/01/24"},
            {"id":3,"Issue":"challenge","Description":"Right-sized explicit structure","Priority":"High","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2021/09/27","Date Identified":"2021/12/25","Assigned To":"admin","Project":"Fitness App","Actual Complete Date":"2021/09/06"},
            {"id":4,"Issue":"zero defect","Description":"Managed foreground model","Priority":"Low","Status":"Close","Identified by":"admin","Target Complete Date":"2022/06/07","Date Identified":"2022/01/20","Assigned To":"the douest of Johns 556","Project":"Fitness App","Actual Complete Date":"2022/03/09"},
            {"id":5,"Issue":"dedicated","Description":"Balanced upward-trending pricing structure","Priority":"Medium","Status":"Close","Identified by":"the douest of Janes 247","Target Complete Date":"2021/09/20","Date Identified":"2022/02/15","Assigned To":"the douest of Johns 556","Project":"Fitness App","Actual Complete Date":"2021/09/27"},
            {"id":6,"Issue":"User-friendly","Description":"Synchronised fault-tolerant time-frame","Priority":"Medium","Status":"Overdue","Identified by":"the douest of Janes 247","Target Complete Date":"2021/12/11","Date Identified":"2022/01/13","Assigned To":"the douest of Janes 247","Project":"Fitness App","Actual Complete Date":"2021/12/07"},
            {"id":7,"Issue":"alliance","Description":"Function-based dedicated orchestration","Priority":"Low","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2022/04/03","Date Identified":"2022/02/14","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2022/03/02"},
            {"id":8,"Issue":"solution-oriented","Description":"Compatible client-server strategy","Priority":"Low","Status":"Close","Identified by":"the douest of Johns 556","Target Complete Date":"2022/03/12","Date Identified":"2022/07/16","Assigned To":"the douest of Janes 247","Project":"WPR281_Project","Actual Complete Date":"2022/03/22"},
            {"id":9,"Issue":"Multi-tiered","Description":"Stand-alone tangible forecast","Priority":"High","Status":"Open","Identified by":"admin","Target Complete Date":"2021/11/28","Date Identified":"2022/06/16","Assigned To":"the douest of Johns 556","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/01/19"},
            {"id":10,"Issue":"4th generation","Description":"Front-line responsive challenge","Priority":"Medium","Status":"Close","Identified by":"the douest of Johns 556","Target Complete Date":"2021/11/26","Date Identified":"2021/10/06","Assigned To":"the douest of Johns 556","Project":"Fitness App","Actual Complete Date":"2021/08/26"},
            {"id":11,"Issue":"Optimized","Description":"Advanced neutral concept","Priority":"Low","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2022/01/02","Date Identified":"2022/06/05","Assigned To":"the douest of Janes 247","Project":"Fitness App","Actual Complete Date":"2021/10/18"},
            {"id":12,"Issue":"actuating","Description":"Digitized leading edge projection","Priority":"Medium","Status":"Close","Identified by":"the douest of Janes 247","Target Complete Date":"2021/10/31","Date Identified":"2022/05/26","Assigned To":"the douest of Janes 247","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/04/02"},
            {"id":13,"Issue":"Switchable","Description":"Innovative global info-mediaries","Priority":"Medium","Status":"Overdue","Identified by":"the douest of Janes 247","Target Complete Date":"2022/03/27","Date Identified":"2021/12/31","Assigned To":"admin","Project":"Fitness App","Actual Complete Date":"2022/05/12"},
            {"id":14,"Issue":"Visionary","Description":"Phased 6th generation flexibility","Priority":"Medium","Status":"Close","Identified by":"the douest of Johns 556","Target Complete Date":"2022/03/23","Date Identified":"2022/07/05","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2022/05/14"},
            {"id":15,"Issue":"Fully-configurable","Description":"Devolved zero administration algorithm","Priority":"Low","Status":"Close","Identified by":"admin","Target Complete Date":"2022/01/29","Date Identified":"2022/01/04","Assigned To":"the douest of Janes 247","Project":"WPR281_Project","Actual Complete Date":"2021/11/20"},
            {"id":16,"Issue":"Graphic Interface","Description":"Stand-alone holistic interface","Priority":"High","Status":"Overdue","Identified by":"admin","Target Complete Date":"2021/09/09","Date Identified":"2022/04/22","Assigned To":"admin","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/02/16"},
            {"id":17,"Issue":"instruction set","Description":"Networked homogeneous Graphic Interface","Priority":"Medium","Status":"Open","Identified by":"the douest of Janes 247","Target Complete Date":"2021/12/07","Date Identified":"2022/04/15","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2021/10/21"},
            {"id":18,"Issue":"Intuitive","Description":"Fully-configurable directional projection","Priority":"Low","Status":"Close","Identified by":"admin","Target Complete Date":"2022/07/28","Date Identified":"2021/10/11","Assigned To":"the douest of Johns 556","Project":"Fitness App","Actual Complete Date":"2022/08/23"},
            {"id":19,"Issue":"dynamic","Description":"Intuitive well-modulated conglomeration","Priority":"High","Status":"Overdue","Identified by":"the douest of Janes 247","Target Complete Date":"2022/05/13","Date Identified":"2022/06/22","Assigned To":"admin","Project":"Fitness App","Actual Complete Date":"2022/01/19"},
            {"id":20,"Issue":"migration","Description":"Managed leading edge open architecture","Priority":"Low","Status":"Overdue","Identified by":"admin","Target Complete Date":"2022/02/05","Date Identified":"2021/11/06","Assigned To":"the douest of Janes 247","Project":"Fitness App","Actual Complete Date":"2022/01/25"},
            {"id":21,"Issue":"full-range","Description":"Intuitive web-enabled ability","Priority":"High","Status":"Overdue","Identified by":"admin","Target Complete Date":"2022/08/16","Date Identified":"2021/08/01","Assigned To":"the douest of Janes 247","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/02/03"},
            {"id":22,"Issue":"Upgradable","Description":"Persevering tangible open system","Priority":"High","Status":"Close","Identified by":"the douest of Johns 556","Target Complete Date":"2021/09/28","Date Identified":"2022/02/10","Assigned To":"the douest of Janes 247","Project":"Fitness App","Actual Complete Date":"2021/08/29"},
            {"id":23,"Issue":"interactive","Description":"Automated real-time internet solution","Priority":"High","Status":"Close","Identified by":"admin","Target Complete Date":"2022/05/14","Date Identified":"2022/05/06","Assigned To":"the douest of Janes 247","Project":"Fitness App","Actual Complete Date":"2021/12/02"},
            {"id":24,"Issue":"transitional","Description":"Innovative holistic website","Priority":"High","Status":"Open","Identified by":"the douest of Johns 556","Target Complete Date":"2021/10/22","Date Identified":"2022/01/19","Assigned To":"the douest of Janes 247","Project":"WPR281_Project","Actual Complete Date":"2021/09/30"},
            {"id":25,"Issue":"capacity","Description":"Devolved modular circuit","Priority":"Medium","Status":"Close","Identified by":"the douest of Janes 247","Target Complete Date":"2022/02/27","Date Identified":"2022/04/02","Assigned To":"admin","Project":"Fitness App","Actual Complete Date":"2022/05/22"},
            {"id":26,"Issue":"Synergized","Description":"Fundamental 24 hour application","Priority":"Medium","Status":"Close","Identified by":"admin","Target Complete Date":"2021/12/05","Date Identified":"2022/05/11","Assigned To":"admin","Project":"WPR281_Project","Actual Complete Date":"2021/09/01"},
            {"id":27,"Issue":"initiative","Description":"Distributed asynchronous standardization","Priority":"Low","Status":"Overdue","Identified by":"the douest of Johns 556","Target Complete Date":"2022/05/20","Date Identified":"2022/05/24","Assigned To":"admin","Project":"WPR281_Project","Actual Complete Date":"2022/06/02"},
            {"id":28,"Issue":"empowering","Description":"Re-engineered bandwidth-monitored task-force","Priority":"High","Status":"Close","Identified by":"admin","Target Complete Date":"2022/03/15","Date Identified":"2022/06/17","Assigned To":"the douest of Johns 556","Project":"WPR281_Project","Actual Complete Date":"2021/09/12"},
            {"id":29,"Issue":"optimal","Description":"Customer-focused maximized artificial intelligence","Priority":"High","Status":"Close","Identified by":"the douest of Janes 247","Target Complete Date":"2021/08/12","Date Identified":"2021/09/03","Assigned To":"the douest of Janes 247","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2021/10/02"},
            {"id":30,"Issue":"Open-source","Description":"Profit-focused actuating initiative","Priority":"High","Status":"Overdue","Identified by":"admin","Target Complete Date":"2022/06/22","Date Identified":"2022/06/02","Assigned To":"admin","Project":"Some project that someone started to work on but everybody got bored quickly","Actual Complete Date":"2022/02/19"}
        ]
        window.localStorage.setItem('bugs', JSON.stringify(bugs)); 
    }
}

function register() {
    window.location.href = '../Register/Register.html';
}