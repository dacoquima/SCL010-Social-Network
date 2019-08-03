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
    <input placeholder='Nombre'>
    <input placeholder='Apellido'>
    <input placeholder='Nombre de usuario'>
    <input type=email placeholder='Correo'>
    <input type='password' placeholder='Contraseña'>
    <input type='password' placeholder='Confirma tu contraseña'>
    <button id='sign'>Regístrate</button>
     <button id='signGg'>Crear con Google</button>
     <button id='signFb'>Crear con Facebook</button>`

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