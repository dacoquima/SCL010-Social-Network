import { connect } from './database.js';

export const loginGoogle = () => {
    console.log('Google Ok');
    connect();

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log('RES:', res);
            const user = res.user;
            console.log("Hola", user.displayName);
            let userName = splitGoogleDisplayName(user.displayName);
        saveUserToDatabaseAfterLogin(user, userName);
        })
        .catch(err => {
            console.log('El error es', err)
        })
}


const splitGoogleDisplayName = (displayName) => {
    let splitDisplayNameArray = displayName.split(' ');
    let userName = {
        firstName: splitDisplayNameArray[0],
        lastName: splitDisplayNameArray[1]
    }
    return userName;
}

//vay guardar usuario en la base de datos despues de logarse
const saveUserToDatabaseAfterLogin = (user, userName) => {
    console.log("uid:", user.uid, "email:", user.email, "firstName:", userName.firstName, "lastName:", userName.lastName);  
  };


export const loginFacebook = () => {
    console.log('Fb Ok');

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log('RES:', res);
            const user = res.user;
            console.log("Hola", user.displayName);
        })
        .catch(err => {
            console.log('Error es', err)
        })
}