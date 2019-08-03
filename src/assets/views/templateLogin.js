const login = () => {
    console.log('Login');
}

import { loginGoogle } from './../js/auth.js'

const loginFacebook = () => {
    console.log('Login with Facebook');
}

export const templateLogin = () => {
    const containerLogin = document.createElement('div');
    containerLogin.className = 'containerLogin';
    const contentLogin = 
    `<p>Iniciar sesión</p>
    <input placeholder='Usuario'>
    <input type='password' placeholder='Contraseña'>
    <button id='login' classname='btn'>Iniciar sesión</button>
     <button id='loginGg' classname='btn'>Iniciar con Google</button>
     <button id='loginFb' classname='btn'>Iniciar con Facebook</button>`

containerLogin.innerHTML = contentLogin;

const btnLogin = containerLogin.querySelector('#login');
btnLogin.addEventListener('click', () => {
login();
})

const btnGoogle = containerLogin.querySelector('#loginGg');
btnGoogle.addEventListener('click', () => {
loginGoogle();
})

const btnFacebook = containerLogin.querySelector('#loginFb');
btnFacebook.addEventListener('click', () => {
    loginFacebook();
    })
    return containerLogin;
}