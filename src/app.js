console.log("Ta funcionando hola");

import { initRouter } from './route.js';

const init = () => {
    initRouter();
}

window.addEventListener('load', init);