import { signOutAccount } from "./../js/auth.js";
import { profile } from "./../js/profile.js";
const containerFeedPost = document.getElementById("root2");

export const templateProfile = () => {
  containerFeedPost.innerHTML = "";
  const containerProfile = document.createElement("div");
  containerProfile.className = "containerProfile";
  let user = window.location.hash;
  user = user.split("/")[2];
  console.log(user);
  let userInfo = profile(user);
  userInfo.then(userData => {
    const contentProfile = `
    <header class="secondHeader">
      <img src="./assets/img/back.svg" class="iconInputBack" alt="boton para volver"/>
      <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
    </header>
    <main id = "templateProfile" clasS=mainLoginCreate">
      <div class="profileTop" >
        <img src="${
          userData.photo
        }" class="profilePicture" alt="foto de perfil usuario"/>
        <h2 id="profileName">${userData.displayName}</h2>
        <p id="profileProfession"></p>
        <p id="profileNacionality"></p>
        <p id="profileBio"></p>
      </div>
      <div class="profileButtons">
        <button id="editProfile" class="actionButtonRegular littleButton">Editar perfil</button>
        <button id="logOut" class="actionButtonRegular littleButton">Cerrar sesión</button>
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
      <hr/>
    </main>
    `;

    containerProfile.innerHTML = contentProfile;

    const goToEditProfile = containerProfile.querySelector("#editProfile");
    goToEditProfile.addEventListener("click", () => {
      location.href = "#/editProfile";
    });
    const goToLogin = containerProfile.querySelector("#logOut");
    goToLogin.addEventListener("click", () => {
      signOutAccount();
    });
  });
  return containerProfile;
};
