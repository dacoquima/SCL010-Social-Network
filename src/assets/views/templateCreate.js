import { createAccount } from "./../js/auth.js";
import { loginGoogle, loginFacebook } from "./../js/auth.js";

export const templateCreate = () => {
  const containerCreate = document.createElement("div");
  containerCreate.className = "containerCreate";
  const contentCreate = `<img src="./assets/img/people.png" alt="iconografia razas del mundo" />
    <h1 class="principalHeader" >Crea tu cuenta</h1>
    <p class="secundaryText">Llena el siguiente formulario y únete a la comunidad de ayuda a inmigrantes más grande de Chile.</p>
    <form>
      <input autocomplete class="formularyText" type="text" name="fullName" placeholder="Nombre y Apellido">
      <input autocomplete class="formularyText" type="email" name="email" placeholder="Correo electrónico">
      <input autocomplete class="formularyText" type="password" name="password1" placeholder="Contraseña">
      <input autocomplete class="formularyText" type="password" name="password2" placeholder="Confirma tu contraseña">
    </form>
     
    <button id="sign">Regístrate</button>
    <button id="signGg">Crear con Google</button>
    <button id="signFb">Crear con Facebook</button>`;

  containerCreate.innerHTML = contentCreate;

  const btnSign = containerCreate.querySelector("#sign");
  btnSign.addEventListener("click", () => {
    createAccount();
  });

  const btnGoogle = containerCreate.querySelector("#signGg");
  btnGoogle.addEventListener("click", () => {
    loginGoogle();
  });

  const btnFacebook = containerCreate.querySelector("#signFb");
  btnFacebook.addEventListener("click", () => {
    loginFacebook();
  });
  return containerCreate;
};
