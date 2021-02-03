const menu = document.querySelector("#mobile__menu");
const menuLink = document.querySelector(".navbar__menu");

const mobileMenu = () =>{
    menu.classList.toggle("is-active");
    menuLink.classList.toggle("active");
}

menu.addEventListener("click",mobileMenu)

