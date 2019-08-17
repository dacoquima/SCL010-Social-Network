import { observer } from "./auth.js";

const containerFeedPost = document.getElementById("root2");
//import { templateFeed } from "./assets/views/templateFeed.js";

//guardamos firestore en variable
let db = firebase.firestore();

// funcion para crear posts
export const createPost = () => {
  observer();
  console.log("createPost A");
  //guardamos fecha
  let date = new Date();
  console.log("createPost B");
  //user = observer();
  //console.log("USER:", user);
  //guardamos os valores elijidos por el usuario
  let postCategory = document.querySelector("select[name=slctCategory]").value;
  let postMesage = document.querySelector("textarea[name=postTxt]").value;
  console.log("category:", postCategory, "Mesage:", postMesage);
  //usamos esta funcion para obtener uid de usuario corriente
  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    //obtenemos desde collecion users datos de usuario corriente con uid
    //db.collection('users').doc(user.uid).get().then(doc => {
    //agrega un ID automatico
    //console.log(doc._document.proto.fields);
    db.collection("posts")
      .add({
        //db.collection("users").doc(user.uid).set({
        uid: user.uid,
        username: user.email.split("@")[0],
        //authorName: doc.data().user,
        authorName: user.displayName,
        photo: user.photoURL,
        date: date,
        category: postCategory,
        message: postMesage,
        like: []
      })
      .then(function(doc) {
        console.log("Document written with ID: ", doc.id);
        window.location.hash = "#/feed";
        readPost();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  });
  //})
};

export const readPost = () => {
  db.collection("posts").onSnapshot(querySnapshot => {
    containerFeedPost.innerHTML = "";
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data().message}`);
      containerFeedPost.innerHTML += `<main id = "templateWall" class="mainLoginCreate">
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
  });
  return containerFeedPost;
};

//funcion para los eventos dentro de los posts
export const events = doc => {
  if (firebase.auth().currentUser.uid === doc.data().uid) {
    const btnDeletePost = document.getElementById("deletePost" + doc.id);
    btnDeletePost.addEventListener("click", () => {
      deletePost(doc.id);
    });
    const btnEditPost = document.getElementById("editPost" + doc.id);
    btnEditPost.addEventListener("click", () => {
      editPost(doc.id);
    });
  } else {
    document.getElementById(`editPost${doc.id}`).style.display = "none";
    document.getElementById(`deletePost${doc.id}`).style.display = "none";
  }
};
export const likeEvent = doc => {
  if (doc.data().like.includes(firebase.auth().currentUser.uid)) {
    // dislike
    const btnLikePost = document.getElementById("likePost" + doc.id);
    btnLikePost.addEventListener("click", () => {
      unlikePost(doc.id, doc.data().like);
    });
  } else {
    const btnLikePost = document.getElementById("likePost" + doc.id);
    btnLikePost.addEventListener("click", () => {
      likePost(doc.id, doc.data().like);
    });
  }
};

// BORRAR POSTS
export const deletePost = id => {
  if (confirm("¿Seguro que quieres borrar tu publicación?")) {
    db.collection("posts")
      .doc(id)
      .delete()
      .then(function() {
        containerFeedPost.innerHTML = "";
        readPost();
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }
};

// EDITAR POSTS
export const editPost = id => {
  db.collection("posts")
    .doc(id)
    .get()
    .then(doc => {
      //obtener el mensaje del post
      document.getElementById(
        `editTextPost${doc.id}`
      ).innerHTML = doc.data().message;
      //aparece textArea para cambiar texto
      document.getElementById(`editTextPost${doc.id}`).style.display = "flex";
      //desaparece el P del mensaje
      document.getElementById(`messagePost${doc.id}`).style.display = "none";
      //escondemos el botón editar
      document.getElementById(`editPost${doc.id}`).style.display = "none";
      //escondemos boton de borrar
      document.getElementById(`deletePost${doc.id}`).style.display = "none";
      //mostrar botón guardar
      document.getElementById(`savePost${doc.id}`).style.display = "flex";
      //Evento que ocurre cuando se hace click en guardar
      document
        .getElementById("savePost" + doc.id)
        .addEventListener("click", () => {
          let post = document.getElementById(`editTextPost${doc.id}`).value;
          //Se hace update del post en la base de datos
          let docRef = db.collection("posts").doc(id);
          return docRef
            .update({
              message: post
            })
            .then(() => {
              document.getElementById(`messagePost${doc.id}`).style.display =
                "flex";
              document.getElementById(`editTextPost${doc.id}`).style.display =
                "none";
              document.getElementById(`deletePost${doc.id}`).style.display =
                "flex";
              document.getElementById(`editPost${doc.id}`).style.display =
                "flex";
              document.getElementById(`savePost${doc.id}`).style.display =
                "none";
              console.log("Se actualizó el post");
            })
            .catch(error => {
              console.error(error);
            });
        });
    });
};

export const likePost = (id, like) => {
  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    like.push(user.uid);
    console.log(like);
    let docRef = db.collection("posts").doc(id);
    return docRef
      .update({
        like: like
      })
      .then(e => {
        console.log(e);
      });
  });
};

export const unlikePost = (id, like) => {
  firebase.auth().onAuthStateChanged(user => {
    let idPosition = like.indexOf(user.uid);
    like.splice(idPosition, 1);
    let docRef = db.collection("posts").doc(id);
    return docRef
      .update({
        like: like
      })
      .then(e => {
        console.log(e);
      });
  });
};
