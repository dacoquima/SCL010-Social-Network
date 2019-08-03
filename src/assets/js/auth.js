export const loginGoogle = () =>  {
    console.log('Google Ok');

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(res => {
        console.log('RES:', res);
        const user = res.user;
        console.log("Hola", user.displayName);
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
const saveUserToDatabaseAfterLogin = (uid, firstName, lastName, email) => {
    console.log(uid, firstName, lastName, email);
    
  };
