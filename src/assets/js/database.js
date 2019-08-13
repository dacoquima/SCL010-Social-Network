var db = firebase.firestore();

export const connect = () => {
  console.log("Connecting database");

  var defaultDatabase = firebase.database();

  let refToData = defaultDatabase.ref();

  refToData.once("value", snapshot => {
    console.log(snapshot.val());
  });
};

export const createAccountInDb = data => {
  var db = firebase.firestore();
  var id = db.collection("users").doc(data.uid);
  id.set(data)
    .then(() => {
      console.log("todo salio bien");
    })
    .catch(err => console.log(err));
};

// //crea nueva colección para posts
// export const creatPostInDb = () => {
// db.collection("posts").add({
//   uid: 7637626823782,
// 	firstName: "Carolina",
// 	lastName: "Guido",
//   date: "11/08/2019",
//   category: "arriendo",
//   message: "Hola Mundo",
//   hashtag: "#providencia",
//   location: "Santiago",
// 	like: 1,
// 	liked: 30
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });
// };