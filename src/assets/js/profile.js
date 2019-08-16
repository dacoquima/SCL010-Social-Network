let db = firebase.firestore();

export const profile = () => {
  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
  });
};
