import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDILlD6Z4GKEV1j_kN7NDYssWZ1GOaUk8",
    authDomain: "wpr281-project.firebaseapp.com",
    databaseURL: "https://wpr281-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wpr281-project",
    storageBucket: "wpr281-project.appspot.com",
    messagingSenderId: "370488716394",
    appId: "1:370488716394:web:3d9dc3e6d0e24da11c2e13"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// let email = "test@example.com"//document.forms["myForm"]["email_field"].value;
//     let pass ='123456' // document.forms["myForm"]["pass_field"].value;

//     console.log(email + " " + pass);
//     const auth = getAuth(firebaseApp);
//     signInWithEmailAndPassword(auth, email, pass)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         console.log("Logged in");
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//     });
var button = document.getElementById("loginBtn");

button.onclick = function(){
    alert("Haai");
    
}

