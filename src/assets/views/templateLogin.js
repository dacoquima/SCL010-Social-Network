import { loginGoogle, loginFacebook, loginWithEmail } from "./../js/auth.js";

export const templateLogin = () => {
  const containerLogin = document.createElement("div");
  containerLogin.className = "containerLogin";
  const contentLogin = `<img src="./assets/img/people.png" alt="iconografia razas del mundo" />
        <h4>INICIAR SESIÓN</h4>
        <form id="formLogin">
          <input name = "email" placeholder='Email'>
          <input name = "password" type='password' placeholder='Contraseña'>
          <input type='checkbox'><p>Recordarme</p>
        </form>
          <button id='login' classname='btn'>Iniciar sesión</button>
          <button id='loginGg' classname='btn'>Iniciar con Google</button>
          <button id='loginFb' classname='btn'>Iniciar con Facebook</button>
          <p>¿Aún no estás registrado?</p><a href="#/signUp" id="registerLink">Crea tu cuenta</a>`;

  containerLogin.innerHTML = contentLogin;

  const btnLogin = containerLogin.querySelector("#login");
  btnLogin.addEventListener("click", () => {
    const email = document.querySelector("input[name=email]").value;
    const password = document.querySelector("input[name=password]").value;
    loginWithEmail(email, password);
  });

  const btnGoogle = containerLogin.querySelector("#loginGg");
  btnGoogle.addEventListener("click", () => {
    loginGoogle();
  });

  const btnFacebook = containerLogin.querySelector("#loginFb");
  btnFacebook.addEventListener("click", () => {
    loginFacebook();
  });
  return containerLogin;
};
