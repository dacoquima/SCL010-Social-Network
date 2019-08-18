export const templateCategories = () => {
    const containerCategories = document.createElement("div");
    containerCategories.className = "containerCategories";
    const contentCategories = 

`   <header class="secondHeader">
<a id="feedIcon" class="iconInputBack" href="#/feed"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
<img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
</header>

    <a href="#/prueba"><button id="btnArriendo" class="btnCategories"><img src="./assets/img/arriendo.svg" class="categoriesImg"/><p>Arriendo</p></button></a>
    <a href="#"><button id="btnAlojamiento" class="btnCategories"><img src="./assets/img/alojamiento.svg" class="categoriesImg"/><p>Alojamiento</p></button></a>
    <a href="#"><button id="btnCultura" class="btnCategories"><img src="./assets/img/cultura.svg" class="categoriesImg"/><p>Cultura</p></button></a>
    <a href="#"><button id="btnGastronomia" class="btnCategories"><img src="./assets/img/gastronomia.svg" class="categoriesImg"/><p>Gastronomía</p></button></a>
    <a href="#"><button id="btnTrabajo" class="btnCategories"><img src="./assets/img/trabajo.svg" class="categoriesImg"/><p>Trabajo</p></button></a>
    <a href="#"><button id="btnTramites" class="btnCategories"><img src="./assets/img/tramites.svg" class="categoriesImg"/><p>Trámites</p></button></a>`

    containerCategories.innerHTML = contentCategories;
    return containerCategories;
};