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
        `<form id="formLogin">
        <h4>INICIAR SESIÓN</h4>
            <input placeholder='Usuario'>
            <input type='password' placeholder='Contraseña'>
            </form>
            <input type='checkbox'><p>Recordarme</p>
            <button id='login' class='btn'>Iniciar sesión</button>
            <button id='loginGg' class='btn'>Iniciar con Google</button>
            <button id='loginFb' class='btn'>Iniciar con Facebook</button>
            <p>¿Aún no estás registrado? <a href="#/signUp" id="registerLink">Crea tu cuenta</a></p>`
    

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