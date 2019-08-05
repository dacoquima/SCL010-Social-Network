const login = () => {
    console.log('Login');
}

import {
    loginGoogle
} from './../js/auth.js'

import {
    loginFacebook
} from './../js/auth.js'

export const templateLogin = () => {
    const containerLogin = document.createElement('div');
    containerLogin.className = 'containerLogin';
    const contentLogin =
        `<h4>INICIAR SESIÓN</h4>
        <form id="formLogin">
            <input placeholder='Usuario'>
            <input type='password' placeholder='Contraseña'>
            <input type='checkbox'><p>Recordarme</p>
            <button id='login' classname='btn'>Iniciar sesión</button>
            </form>
            <button id='loginGg' classname='btn'>Iniciar con Google</button>
            <button id='loginFb' classname='btn'>Iniciar con Facebook</button>
            <p>¿Aún no estás registrado?</p><a href="#/signUp" id="registerLink">Crea tu cuenta</a>`
    

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