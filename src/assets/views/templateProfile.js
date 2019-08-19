import { signOutAccount } from "./../js/auth.js";
import {
  profile,
  addToContacts,
  removeFromContacts,
  getContacts
} from "./../js/profile.js";
const containerFeedPost = document.getElementById("root2");

export const templateProfile = () => {
  containerFeedPost.innerHTML = "";
  const containerProfile = document.createElement("div");
  containerProfile.className = "containerProfile";
  let user = window.location.hash;
  user = user.split("/")[2];
  let userInfo = profile(user);
  let actualUser = firebase.auth().currentUser;
  getContacts(actualUser.uid).then(actualContacts => {
    userInfo.then(userData => {
      const contentProfile = `
        <header class="secondHeader">
          <img src="./assets/img/back.svg" class="iconInputBack" alt="boton para volver"/>
          <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
        </header>
        <main id = "templateProfile" class="mainLoginCreate">
          <div class="profileTop" >
            <img src="${
              userData.photo
            }" class="profilePicture" alt="foto de perfil usuario"/>
            <h2 id="profileName">${userData.displayName}</h2>
            <p id="profileProfession">${userData.Profession}</p>
            <p id="profileNacionality">${userData.Nacionality}</p>
            <p id="profileBio">${userData.bio}</p>
          </div>
          <div class="profileButtons">
            <button id="editProfile" class="actionButtonRegular littleButton" style="display:none">Editar perfil</button>
            <button id="logOut" class="actionButtonRegular littleButton" style="display:none">Cerrar sesión</button>
            <button id="addToContacts" class="actionButtonRegular" style="display:none">Agregar a contactos</button>
            <button id="removeFromContacts" class="actionButtonRegular" style="display:none">Eliminar de contactos</button>
          </div>
          <div class="profileDetails">
            <div class="profilePostDetails">
              <p id="postCounter"></p>
              <p>Publicaciones</p>
            </div>
            <div class="profileContactDetails">
              <p id="contactCounter"></p>
              <p>Contactos</p>
            </div>
          </div>
          <hr class="separationLine">
    
    
        </main>
        `;
      containerProfile.innerHTML = contentProfile;

      if (actualUser.uid === userData.uid) {
        document.getElementById("editProfile").style.display = "flex";
        document.getElementById("logOut").style.display = "flex";
        const goToLogin = containerProfile.querySelector("#logOut");
        goToLogin.addEventListener("click", () => {
          signOutAccount();
        });
        const goToEditProfile = containerProfile.querySelector("#editProfile");
        goToEditProfile.addEventListener("click", () => {
          location.href = "#/editProfile";
        });
      } else {
        if (actualContacts.includes(userData.uid)) {
          document.getElementById("removeFromContacts").style.display = "flex";
          const unfollow = containerProfile.querySelector(
            "#removeFromContacts"
          );
          unfollow.addEventListener("click", () => {
            removeFromContacts(userData.uid);
          });
        } else {
          document.getElementById("addToContacts").style.display = "flex";
          const follow = containerProfile.querySelector("#addToContacts");
          follow.addEventListener("click", () => {
            addToContacts(userData.uid);
          });
        }
      }
    });
  });

  return containerProfile;
};
