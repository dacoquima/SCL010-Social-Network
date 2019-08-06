import { createAccountEmail } from "./../js/auth.js";
import { createAccountInDb } from "./../js/database.js";

const createAccount = async () => {
  let userdata = {};
  let secret = {};
  userdata.email = document.querySelector("input[name=email]").value;
  userdata.name = document.querySelector("input[name=name]").value;
  userdata.lastname = document.querySelector("input[name=lastname]").value;
  userdata.creationData = new Date();
  userdata.friends = [];
  secret.password1 = document.querySelector("input[name=password1]").value;
  secret.password2 = document.querySelector("input[name=password2]").value;

  if (
    secret.password1 &&
    secret.password2 &&
    secret.password1 === secret.password2
  ) {
    createAccountEmail(userdata.email, secret.password1)
      .then(res => {
        console.log("RES:", res);
        const user = res.user;
        userdata.uid = user.uid;
        createAccountInDb(userdata);
        console.log(userdata);
        console.log("Hola", user.displayName);
      })
      .catch(err => {
        console.log("El error es", err);
      });
  } else {
    alert("Contraseñas no coinciden");
  }
  console.log(userdata);

  console.log("Sign up");
};
const createGoogle = () => {
  console.log("Sign up with Google");
};
const createFacebook = () => {
  console.log("Sign up with Facebook");
};
export const templateCreate = () => {
  const containerCreate = document.createElement("div");
  containerCreate.className = "containerCreate";
  const contentCreate = `<p>Crear cuenta</p>
    <form>
    <input autocomplete type="text" name="name" placeholder='Nombre'>
    <input autocomplete type="text" name="lastname" placeholder='Apellido'>
    <input autocomplete type='email' name="email" placeholder='Correo'>
    <input autocomplete type='password' name="password1" placeholder='Contraseña'>
    <input autocomplete type='password' name="password2" placeholder='Confirma tu contraseña'>
   
     </form>
      <button id='sign'>Regístrate</button>
     <button id='signGg'>Crear con Google</button>
     <button id='signFb'>Crear con Facebook</button>`;

  containerCreate.innerHTML = contentCreate;

  const btnSign = containerCreate.querySelector("#sign");
  btnSign.addEventListener("click", () => {
    createAccount();
  });

  const btnGoogle = containerCreate.querySelector("#signGg");
  btnGoogle.addEventListener("click", () => {
    createGoogle();
  });

  const btnFacebook = containerCreate.querySelector("#signFb");
  btnFacebook.addEventListener("click", () => {
    createFacebook();
  });
  return containerCreate;
};
