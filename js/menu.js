    //добавление класса on

    //for (var i = 0; i < 5; i++) {
    //    if (document.getElementById(i)) {
    //        links.forEach(function(link) {
    //            links.classList.add('on');
                //break;
    //        });
    //    }
    //}
    
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


(function () {}());

// Открывашка меню
menuOpener.addEventListener("click", (e) => {
    e.preventDefault();
     if (menu.classList.contains('responsive')) {
        menu.classList.toggle('responsive');
        document.querySelector(".ver_m").style.display = "none";
        document.querySelector(".close").style.display = "none";
        document.querySelector(".open").style.display = "block";
        document.getElementById('menu').style.height = "5%";
        menu.style.background = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
        if (color.a == 1) {
            document.querySelector(".open").style.color = "#fff";
        }
        //links.forEach(function(link) {
        //    link.style.color = "#fff";
        //  });
    } else {
        menu.classList.toggle('responsive');
        document.querySelector(".ver_m").style.display = "block";
        document.querySelector(".open").style.display = "none";
        document.querySelector(".close").style.display = "block";
        document.getElementById('close').style.color = "#fff";
        document.getElementById('menu').style.height = "100%";
        menu.style.background = "rgba(" + color.r + "," + color.g + "," + color.b + ", 1)";
        links.forEach(function(link) {
            link.style.color = "#fff";
          });
    }
});



});




