// BURGER

document.addEventListener("DOMContentLoaded", function(){
    const burgerMenu = document.getElementById("burger-menu");
    const header = document.querySelector(".header");
    const overlay = document.getElementById("overlay");
    const navLinks = document.querySelectorAll(".nav-link");

    // открыть бургер-меню
    burgerMenu.addEventListener("click", function(){
        header.classList.toggle("open");
    });

    // закрыть бургер-меню при нажатии на область
    overlay.addEventListener("click", function(){
        header.classList.remove("open");
    });

    // закрыть меню и убрать затемнение при нажатии на ссылку в меню
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            header.classList.remove("open");
        });
    });

    // закрыть меню при нажатии на эскейп
    window.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            header.classList.remove("open");
        }
    });
});
