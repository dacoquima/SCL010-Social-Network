export const templateCategory = () => {
    const containerCategory = document.createElement("div");
    containerCategory.className = "containerCategories";
    const contentCategory = 

`   <header class="secondHeader">
<a id="feedIcon" class="iconInputBack" href="#/feed"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
<img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
</header> `


    containerCategory.innerHTML = contentCategory;
    return containerCategory;
};