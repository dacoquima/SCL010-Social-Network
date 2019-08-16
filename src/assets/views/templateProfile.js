export const templateProfile = () => {
  const containerProfile = document.createElement("div");
  containerProfile.className = "containerProfile";
  const contentProfile = `
  <header class="secondHeader">
    <img src="./assets/img/back.svg" class="iconInputBack" alt="boton para volver"/>
    <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
  </header>
  <main id = "templateProfile" clasS=mainLoginCreate">
    <div class="profileTop" >
      <img src="" class="profilePicture"/>
      <h2 id="profileName"></h2>
      <p id="profileProfession></p>
      <p id="profileNacionality></p>
      <p id="profileNacionality></p>
      <p id="profileBio></p>
    </div>
    <div class="profileButtons">
      <button id="editProfile" class="actionButtonRegular profileButton">Editar perfil</button>
      <button id="logOut" class="actionButtonRegular profileButton">Cerrar sesión</button>
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
  return containerProfile;
};
