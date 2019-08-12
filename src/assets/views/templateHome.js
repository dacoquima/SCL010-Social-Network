export const templateHome = () => {
  const containerHome = document.createElement("div");
  containerHome.className = "containerHome";
  const contentHome = `<header>
    <img src="./assets/img/first-header.png" class="imgFirstHeader" alt="iconografia razas del mundo / logo"/>
  </header>
  <main class="mainLoginCreate">
    <h1 class="principalHeader">Únete a la comunidad más grande de inmigrantes en Chile!</h1>
    <p class="secondaryText">El sitio más seguro para conectar con miles de personas alrededor de Chile, dispuestos a colaborar con un proceso de migración más tranquilo y asequible a todos.</p>
    <p class="secondaryText">Con nuestro modelo de las 3 C's, tendrás acceso a miles de datos cada día, publicados directamente por la comunidad de inmigrantes en Chile, así como por chilenos dispuestos a ayudarte.</p>

    <button class="actionButtonRegular" id="goToLogin">Iniciar sesión</button>
    <button class="actionButtonRegular" id="goToCreate">Crear cuenta</button>
  </main>
  `;

  containerHome.innerHTML = contentHome;
  const goToLogin = containerHome.querySelector("#goToLogin");
  goToLogin.addEventListener("click", () => {
    location.href = "#/login";
  });
  const goToCreate = containerHome.querySelector("#goToCreate");
  goToCreate.addEventListener("click", () => {
    location.href = "#/signUp";
  });

  return containerHome;
};
