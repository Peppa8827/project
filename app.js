const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
     menuIcon.addEventListener("click", () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
});
} else {
     console.error("Menu or navigation links not found in the DOM.");
}

