import { events, likeEvent } from "./post.js";
let db = firebase.firestore();
const containerProfilePost = document.getElementById("root2");

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
        postProfile(doc.data().uid);
        return doc.data();
      } else {
        console.log("No such document!");
      }
    })
    .catch(error => {
      console.log("Error getting document:", error);
    });
};

export const postProfile = uid => {
  var docRef = db.collection("posts");
  return docRef.where("uid", "==", uid).onSnapshot(querySnapshot => {
    containerProfilePost.innerHTML = "";
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      containerProfilePost.innerHTML += `<main id = "templateWall" class="mainLoginCreate">
          <div class = "perfil">
            <img src=${
              doc.data().photo
            } class="imgAvatarPost" alt="avatar user"/>
            <h2><a href="#/profile/${doc.data().username}">${
        doc.data().authorName
      }</a></h2>
          </div>
          <h2 id= "categoryPost${doc.id}">${doc.data().category}</h2>
          <p id = "messagePost${
            doc.id
          }" name="postTxtWallFinal" class="txtAreaStylePost">${
        doc.data().message
      }</p>
          <textarea id = "editTextPost${
            doc.id
          }" name="postTxtWallFinal" class="txtAreaStylePost" cols="40" rows="2" style="display:none"></textarea>
          <div class="buttonsPost">
            <button class="actionButtonRegular littleButton" id='deletePost${
              doc.id
            }'>Borrar</button>
            <button class="actionButtonRegular littleButton" id='editPost${
              doc.id
            }'>Editar</button>
            <button class="actionButtonRegular littleButton" id='savePost${
              doc.id
            }' style="display:none">Guardar</button>
            <button class="actionButtonRegular littleButton" id='likePost${
              doc.id
            }'>Like + </button>
          </div>
          <p>${doc.data().like.length} likes</p>
        </main>`;
    });
    querySnapshot.forEach(doc => {
      events(doc);
      likeEvent(doc);
    });
    return containerProfilePost;
  });
};

export const addToContacts = id => {
  firebase.auth().onAuthStateChanged(user => {
    let docRef = db.collection("users").doc(user.uid);
    docRef.get().then(e => {
      let contacts = e.data().contacts;
      contacts.push(id);
      docRef
        .update({
          contacts: contacts
        })
        .then(e => {
          console.log(e);
        });
    });
  });
};

export const removeFromContacts = id => {
  firebase.auth().onAuthStateChanged(user => {
    let docRef = db.collection("users").doc(user.uid);
    docRef.get().then(res => {
      let contacts = res.data().contacts;
      let idPosition = contacts.indexOf(id);
      contacts.splice(idPosition, 1);
      docRef
        .update({
          contacts: contacts
        })
        .then(e => {
          console.log(e);
        });
    });
  });
};
