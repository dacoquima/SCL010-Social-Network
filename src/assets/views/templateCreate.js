const createAccount = () => {
    console.log('Sign up');
}
const createGoogle = () => {
    console.log('Sign up with Google');
}
const createFacebook = () => {
    console.log('Sign up with Facebook');
}
export const templateCreate = () => {
    const containerCreate = document.createElement('div');
    containerCreate.className = 'containerCreate';
    const contentCreate =
    `<p>Crear cuenta</p>
    <form>
    <input autocomplete placeholder='Nombre'>
    <input autocomplete placeholder='Apellido'>
    <input autocomplete placeholder='Nombre de usuario'>
    <input autocomplete type='email' placeholder='Correo'>
    <input autocomplete type='password' placeholder='Contraseña'>
    <input autocomplete type='password' placeholder='Confirma tu contraseña'>
    <button id='sign' class='btn'>Regístrate</button>
     <button id='signGg' class='btn'>Crear con Google</button>
     <button id='signFb' class='btn'>Crear con Facebook</button>
     </form>`

    containerCreate.innerHTML = contentCreate;

    const btnSign = containerCreate.querySelector('#sign');
    btnSign.addEventListener('click', () => {
    createAccount();
    })

    const btnGoogle = containerCreate.querySelector('#signGg');
    btnGoogle.addEventListener('click', () => {
    createGoogle();
    })

    const btnFacebook = containerCreate.querySelector('#signFb');
    btnFacebook.addEventListener('click', () => {
    createFacebook();
    })
    return containerCreate;
}