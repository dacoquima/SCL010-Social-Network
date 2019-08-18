import {
    observer
  } from "./../js/auth.js";
  import {
    categoryChoose
  } from "../js/category.js";
  
export const templateCategory = () => {
    observer();
    categoryChoose();
    const containerCategory = document.createElement("div");
    containerCategory.className = "containerCategory";
    const contentCategory = 
`  
<header class="secondHeader">
<a id="feedIcon" class="iconInputBack" onclick="window.history.back()"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
<img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
</header>
`
    containerCategory.innerHTML = contentCategory;
    return containerCategory;
};