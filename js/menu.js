document.addEventListener("DOMContentLoaded", function () {   
     setupMenu(); // Функция для корректной работы выпадающего меню
    fetch("https://kushderi.github.io/k2day/menu.html") // Загружаем файл меню
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;
            

            // Открывашка меню
            let menu = document.getElementById("menu");
            let open = document.querySelector(".burger-menu .open");
            let close = document.querySelector(".burger-menu .close");
            let face = document.getElementById("face");
            let tabl = document.querySelectorAll(".tabl-content");
            //let tabs = document.querySelectorAll(".tabs");
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
                    alert("Кнопка нажата!");
                }
            }

            document.getElementById("burger-menu").addEventListener("click", function () {
                toggleMenu('menu');
            });
            document.getElementById("face").addEventListener("click", function (event) {
                //event.stopPropagation();
                toggleMenu('face');
            });

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




        })
        .catch(error => console.error("Ошибка загрузки меню:", error));
});



// Функция для корректной работы выпадающего меню
function setupMenu() {
    let menuKatalog = document.querySelector(".menu-katalog");
    let dropdownMenu = document.querySelector(".dropdown-menu");
    let dropdownTabl = document.querySelector(".tabl-contents");

    if (!menuKatalog || !dropdownMenu || !dropdownTabl) return;

    let timeout;

    menuKatalog.addEventListener("mouseenter", function () {
        clearTimeout(timeout);
        dropdownMenu.style.display = "block";
        dropdownTabl.style.display = "flex";
    });
    dropdownMenu.addEventListener("mouseenter", function () {
        clearTimeout(timeout);
        dropdownTabl.style.display = "flex";
    });


    menuKatalog.addEventListener("mouseleave", function () {
        timeout = setTimeout(function () {
            dropdownMenu.style.display = "none";
            dropdownTabl.style.display = "none";
        }, 3000);
    });


    dropdownMenu.addEventListener("mouseenter", function () {
        clearTimeout(timeout);
    });

    dropdownMenu.addEventListener("mouseleave", function () {
        timeout = setTimeout(function () {
            dropdownMenu.style.display = "none";
        }, 3000);
    });


    dropdownTabl.addEventListener("mouseenter", function () {
        clearTimeout(timeout);
    });

    dropdownTabl.addEventListener("mouseleave", function () {
        timeout = setTimeout(function () {
            dropdownTabl.style.display = "none";
        }, 3000);
    });



    //Соответствиде выпвдающего меню и таблицы
    document.querySelectorAll(".submenu").forEach((category) => {
        category.addEventListener("mouseenter", function () {
            // Скрываем все подменю
            document.querySelectorAll(".sub-dropdown").forEach((submenu) => {
                submenu.style.display = "none";
            });

            // Определяем ID нужного подменю через data-category
            const categoryName = this.getAttribute("data-category");
            const subMenu = document.getElementById(categoryName + "-submenu");

            // Показываем нужное подменю
            if (subMenu) {
                subMenu.style.display = "flex";
            }
        });
    });

    // При уходе мыши скрываем все подменю
    document.querySelector(".tabs").addEventListener("mouseleave", function () {
        document.querySelectorAll(".sub-dropdown").forEach((submenu) => {
            submenu.style.display = "none";
        });
    });

}
