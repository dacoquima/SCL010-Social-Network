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
