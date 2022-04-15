/* TOGGLE-SEASONS-MENU.JS */

/* 1. will create a class open, open the seasons bar by chnaging left property.
 adding a rotate class, to rortte the right arrow to make it look like left arrow. this will operate after opening the bar.
*/

//grabbbing toggle button

const openMenuButton= document.querySelector(".toggle-menu"),
seasonBar= document.querySelector(".seasons");

openMenuButton.addEventListener("click", ()=>{
    seasonBar.classList.toggle("open");
    openMenuButton.classList.toggle("rotate");
});

