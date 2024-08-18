export function initBurgerMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const header = document.querySelector(".header");
    const overlay = document.getElementById("overlay");
    const navLinks = document.querySelectorAll(".nav-link");
    const body = document.body;

    const targetElement = header || body;

    const toggleMenu = () => {
        targetElement.classList.toggle("open");
        body.classList.toggle('no-scroll');
    };

    // Открыть/закрыть бургер-меню
    burgerMenu.addEventListener("click", toggleMenu);

    // Закрыть бургер-меню при нажатии на область overlay
    overlay.addEventListener("click", () => {
        targetElement.classList.remove("open");
        body.classList.remove('no-scroll');
    });

    // Закрыть меню и убрать затемнение при нажатии на ссылку в меню
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            if (!href.startsWith("#")) {
                event.preventDefault();
                targetElement.classList.remove("open");
                body.classList.remove('no-scroll');
                setTimeout(() => {
                    window.location.href = href;
                }, 700);
            } else {
                targetElement.classList.remove("open");
                body.classList.remove('no-scroll');
            }
        });
    });

    // Закрыть меню при нажатии на Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            targetElement.classList.remove("open");
            body.classList.remove('no-scroll');
        }
    });

    // Закрыть меню перед переходом на другую страницу
    window.addEventListener("beforeunload", () => {
        targetElement.classList.remove("open");
        body.classList.remove('no-scroll');
    });
}
