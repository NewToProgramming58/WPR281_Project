//import { getAuth, signInWithEmailAndPassword } from "firebase/";
function login(){
    let email = document.forms["myForm"]["email_field"].value;
    let pass = document.forms["myForm"]["pass_field"].value;

    window.alert(email + " " + pass);
    // const auth = getAuth(firebaseApp);
    // signInWithEmailAndPassword(auth, email, pass)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     alert("Logged in");
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     alert(errorMessage);
    // });
}