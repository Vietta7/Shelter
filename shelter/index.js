// BURGER

document.addEventListener("DOMContentLoaded", function(){
    const burgerMenu = document.getElementById("burger-menu");
    const header = document.querySelector(".header");
    const overlay = document.getElementById("overlay");
    const navLinks = document.querySelectorAll(".nav-link", ".link-active");
    const body = document.body;
    
    // открыть бургер-меню
    burgerMenu.addEventListener("click", function(){
        header.classList.toggle("open");
        body.classList.toggle('no-scroll');
        
    });
    // открыть бургер меню на второй странице
    burgerMenu.addEventListener("click", function(){
        body.classList.toggle('open');
        body.classList.toggle('no-scroll');
    });

    // закрыть бургер-меню при нажатии на область
    overlay.addEventListener("click", function(){
        header.classList.remove("open");
        body.classList.remove('open');
    });

    overlay.addEventListener('click', function(){
        body.classList.remove('open');
    }) 

    // закрыть меню и убрать затемнение при нажатии на ссылку в меню
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            const href = link.getAttribute("href");
            if (!href.startsWith("#")) {
                // Если ссылка ведет на другую страницу, сначала плавно закрываем меню
                event.preventDefault(); // Останавливаем стандартный переход по ссылке
                header.classList.remove("open");
                body.classList.remove('open');
                body.classList.remove('no-scroll');

                // Ждем завершения анимации, затем переходим по ссылке
                setTimeout(() => {
                    window.location.href = href;
                }, 700); // Задержка соответствует времени анимации в CSS
            } else {
                // Для ссылок на той же странице просто закрываем меню
                header.classList.remove("open");
                body.classList.remove('open');
                body.classList.remove('no-scroll');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            const href = link.getAttribute("href");
            if (!href.startsWith("#")) {
                // Если ссылка ведет на другую страницу, сначала плавно закрываем меню
                event.preventDefault(); // Останавливаем стандартный переход по ссылке
                
                body.classList.remove('open');
                body.classList.remove('no-scroll');

                // Ждем завершения анимации, затем переходим по ссылке
                setTimeout(() => {
                    window.location.href = href;
                }, 700); // Задержка соответствует времени анимации в CSS
            } else {
                // Для ссылок на той же странице просто закрываем меню
                
                body.classList.remove('open');
                body.classList.remove('no-scroll');
            }
        });
    });


    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            body.classList.remove('open');
        })
    });
    // закрыть меню при нажатии на эскейп
    window.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            header.classList.remove("open");
            body.classList.remove('open');
        }
    });

    window.addEventListener('keydown', function(e) {
        if (e.key === "Escape") {
            body.classList.remove('open');
        }
    });
    
     // Закрыть меню перед переходом на другую страницу
     window.addEventListener("beforeunload", function() {
        header.classList.remove("open");
        body.classList.remove('open');
    });
});
