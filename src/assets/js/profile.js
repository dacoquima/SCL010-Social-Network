let db = firebase.firestore();

export const profile = username => {
  username = username + "@";
  var docRef = db.collection("users");
  return docRef
    .orderBy("email")
    .startAt(username)
    .get()
    .then(result => {
      let doc = result.docs[0];
      if (doc.exists) {
        console.log("document data:", doc.data());
        return doc.data();
      } else {
        console.log("No such document!");
      }
    })
    .catch(error => {
      console.log("Error getting document:", error);
    });
};
