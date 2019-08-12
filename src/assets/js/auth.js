import { connect } from "./database.js";
import { createAccountInDb } from "./../js/database.js";

export const loginGoogle = () => {
  console.log("Google Ok");
  connect();

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      console.log("RES:", res);
      const user = res.user;
      console.log("Hola", user.displayName);
    })
    .catch(err => {
      console.log("El error es", err);
    });
};

const splitGoogleDisplayName = displayName => {
  let splitDisplayNameArray = displayName.split(" ");
  let userName = {
    firstName: splitDisplayNameArray[0],
    lastName: splitDisplayNameArray[1]
  };
  return userName;
};

const saveUserToDatabaseAfterLogin = (uid, firstName, lastName, email) => {
  console.log(uid, firstName, lastName, email);
};

export const loginFacebook = () => {
  console.log("Fb Ok");

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      console.log("RES:", res);
      const user = res.user;
      console.log("Hola", user.displayName);
    })
    .catch(err => {
      console.log("El error es", err);
    });
};

const createAccountEmail = (userdata, secret) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(userdata.email, secret.password1)
    .then(res => {
      const user = res.user;
      userdata.uid = user.uid;
      createAccountInDb(userdata);
      verifyEmail();
    })
    .catch(err => {
      console.log("El error es", err);
    });
};

export const createAccount = () => {
  let { secret, userdata } = getData();

  if (
    secret.password1 &&
    secret.password2 &&
    userdata.email &&
    userdata.fullName &&
    secret.password1 === secret.password2
  ) {
    createAccountEmail(userdata, secret);
  } else {
    alert("Contraseñas no coinciden");
  }
};

export const loginWithEmail = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => (location.href = "#/feed"))
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

export const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("existe usuario activo");
      show();
      var displayName = user.displayName;
      var email = user.email;
      console.log(email);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.

      console.log("no hay usuario activo");
    }
  });
};

const getData = () => {
  let userdata = {};
  let secret = {};
  userdata.fullName = document.querySelector("input[name=fullName]").value;
  userdata.email = document.querySelector("input[name=email]").value;
  // userdata.creationData = new Date();Se usará para guardar la fecha de las publicaciones
  userdata.friends = [];
  secret.password1 = document.querySelector("input[name=password1]").value;
  secret.password2 = document.querySelector("input[name=password2]").value;
  return { secret, userdata };
};

function show() {
  let container = document.getElementById("showSome");
  container.innerHTML = "solo ve usuario activo";
}

const verifyEmail = () => {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function() {
      // Email sent.
    })
    .catch(function(error) {
      // An error happened.
    });
};

export const rememberPassword = () => {
  var auth = firebase.auth();
  var emailAddress = document.querySelector("input[name=email]").value;

  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function() {
      console.log("Correo de reestablecimiento de contraseña enviado");
      // Email sent.
    })
    .catch(function(error) {
      // An error happened.
    });
};
