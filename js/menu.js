window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    let logo = document.querySelector(".logo a img");
    let menuLinks = document.querySelectorAll(".menu ul");
    let dropdown = document.querySelectorAll(".dropdown-menu");

    if (window.scrollY > 50) {
        // Зменшуємо логотип
        logo.style.width = "100px";
        logo.style.transition = "0.3s";

        dropdown.forEach(link => {
            link.style.top = "91.5%";
        });

        menuLinks.forEach(link => {
            link.style.margin = "10px 0 0";
        });

    } else {
        // Повертаємо стандартні розміри
        logo.style.width = "130px";
        dropdown.forEach(link => {
            link.style.top = "86%";
        });
        menuLinks.forEach(link => {
            link.style.margin = "20px 0 0";
        });
    }
});

// Открывашка меню
//let menuOpener = document.querySelector(".icon");
document.addEventListener("DOMContentLoaded", function () {
    let burgerMenu = document.getElementById("burger-menu");
    let menu = document.getElementById("menu");

    burgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

document.querySelectorAll(".submenu").forEach((category) => {
    category.addEventListener("mouseenter", function () {
        document.querySelectorAll(".sub-dropdown").forEach((submenu) => {
            submenu.style.display = "none";
        });

        const subMenu = this.querySelector(".sub-dropdown");
        if (subMenu) {
            subMenu.style.display = "block";
        }
    });
});
document.querySelector(".dropdown").addEventListener("mouseleave", function () {
    document.querySelectorAll(".dropdown-menu, .sub-dropdown").forEach((menu) => {
        menu.style.display = "none";
    });
});