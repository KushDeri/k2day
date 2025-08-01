document.addEventListener("DOMContentLoaded", function () {   
    
    fetch("https://kushderi.github.io/k2day/menu.html") // Загружаем файл меню
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;
            setupMenu(); // Функция для корректной работы выпадающего меню


            let logo = document.querySelector(".logo a img");
            let menu = document.getElementById("menu");
            let menuLinks = document.querySelectorAll(".menu ul");
            let open = document.querySelector(".burger-menu .open");
            let close = document.querySelector(".burger-menu .close");
            //let face = document.getElementById("face");
            let tabl = document.querySelectorAll(".tabl-content");
            //let tabs = document.querySelectorAll(".tabs");
            let header = document.querySelector(".header");
            let dropdowns = document.querySelectorAll(".dropdown-menu");

            const menuKatalog = document.querySelector('.menu-katalog');
            const dropdownMenu = document.querySelector('.dropdown-menu');

            let timeout;



            // Показываем меню при наведении
            menuKatalog.addEventListener('mouseenter', () => {
                clearTimeout(timeout); // отменяем таймер скрытия
                menuKatalog.classList.add('active');
            });

            // Устанавливаем таймер на скрытие
            menuKatalog.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    menuKatalog.classList.remove('active');
                }, 400); // задержка перед исчезновением
            });

            // Также учитываем сам .dropdown-menu, чтобы не исчезало, если мышка туда перешла
            dropdownMenu.addEventListener('mouseenter', () => {
                clearTimeout(timeout);
                menuKatalog.classList.add('active');
            });

            dropdownMenu.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    menuKatalog.classList.remove('active');
                }, 400);
            });




            // Открывашка меню
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
                    //alert("Кнопка нажата!");
                    tabl.style.display = "flex";
                }
            }

            document.getElementById("burger-menu").addEventListener("click", function () {
                toggleMenu('menu');
            });
            document.getElementById("face").addEventListener("click", function (event) {
                //event.stopPropagation();
                toggleMenu('face');
            });


            //Уменьшение лого
            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    // Зменшуємо логотип
                    logo.style.width = "100px";
                    logo.style.transition = "0.3s";

                    dropdowns.forEach(link => {
                        link.style.top = "91.5%";
                    });

                    menuLinks.forEach(link => {
                        link.style.margin = "10px 0 0";
                    });

                } else {
                    // Повертаємо стандартні розміри
                    logo.style.width = "130px";
                    dropdowns.forEach(link => {
                        link.style.top = "86%";
                    });
                    menuLinks.forEach(link => {
                        link.style.margin = "20px 0 0";
                    });
                }
            });


            //???
            //document.querySelectorAll(".submenu").forEach((category) => {
            //    category.addEventListener("mouseenter", function () {
            //        document.querySelectorAll(".sub-dropdown").forEach((submenu) => {
            //            submenu.style.display = "none";
            //        });
            //        const subMenu = this.querySelector(".sub-dropdown");
            //        if (subMenu) {
            //            subMenu.style.display = "block";
            //        }
            //    });
            //});
            //document.querySelector(".dropdown").addEventListener("mouseleave", function () {
            //    document.querySelectorAll(".dropdown-menu, .sub-dropdown").forEach((menu) => {
            //        menu.style.display = "none";
            //    });
            //});




        })
        //.catch(error => console.error("Ошибка загрузки меню:", error));
});

