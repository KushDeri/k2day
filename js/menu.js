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

        // Збільшуємо шрифт у меню
        //menuLinks.forEach(link => {
        //    link.style.fontSize = "18px";
        //});

        // Зменшуємо висоту меню
        //header.style.box-shadow = "0px 2px 10px rgba(0, 0, 0, 0.2)";
    } else {
        // Повертаємо стандартні розміри
        logo.style.width = "130px";
        dropdown.forEach(link => {
            link.style.top = "86%";
        });
        menuLinks.forEach(link => {
            link.style.margin = "20px 0 0";
        });
        //menuLinks.forEach(link => {
        //    link.style.fontSize = "16px";
        //});
    }
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



document.getElementById('burger-menu').addEventListener('click', function() {
        document.getElementById('menu').classList.toggle('active');
    });
    
    // Открывашка меню
    function toggleMenu() {
//    const menu = document.getElementById("menu");
    menu.classList.toggle('responsive');

    if (menu.classList.contains('responsive')) {
        // Закрити меню
        // Змінити іконку на бургер
//        document.getElementById("close").style.display = "block";
//        document.getElementById("open").style.display = "none";
//        document.getElementById("menu").style.background = "linear-gradient(171.42deg, #C9908B 1.7%, #7F4A45 99.16%)";
//        document.getElementById("menu").style.height = "100%";
    } else {
        // Відкрити меню
        // Змінити іконку на хрестик
//        document.getElementById("open").style.display = "block";
//        document.getElementById("close").style.display = "none";
//        document.getElementById("menu").style.height = "5%";
    }
}