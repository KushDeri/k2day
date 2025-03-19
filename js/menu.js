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
    let menu = document.getElementById("menu");
    let open = document.querySelector(".burger-menu .open");
    let close = document.querySelector(".burger-menu .close");
    let face = document.getElementById("face");
    let tabl = document.querySelectorAll(".tabl-content");

    function toggleMenu(target) {
        if (target === 'menu') {
            menu.classList.toggle("active");

            if (menu.classList.contains("active")) {
                close.style.display = "flex";
                open.style.display = "none";
            } else {
                close.style.display = "none";
                open.style.display = "flex";
            }
        }

        if (target === 'face') {
            //face.classList.toggle("active");
            tabl.style.display = "flex";
        }
    }

    document.getElementById("burger-menu").addEventListener("click", function () {
        toggleMenu('menu');
    });
    //document.getElementById("face").addEventListener("click", function (event) {
        //event.stopPropagation();
    //    toggleMenu('face');
    //});
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