let menuOpener = document.querySelector(".icon");
const menu = document.getElementById("menu");
const blok = document.querySelector('.blok');
var links = document.querySelectorAll('.menu .nav .main > li > a');
let bgColor1 = {
    r: 201,
    g: 144,
    b: 139,
    a: 0
}; //Из какого цвета
let bgColor2 = {
    r: 127,
    g: 74,
    b: 69,
    a: 1
}; //В какой цвет

window.onload = function () {
    window.dispatchEvent(new Event("scroll"));
    if (document.body.clientWidth > 850) {
        menu.classList.remove("responsive");
    }
};
window.addEventListener('resize', () => {
    if (document.body.clientWidth > 850) {
        menu.classList.remove("responsive");
    }
});


window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; //текущая позиция скролла
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - innerHeight; //Получаем высоту видимой части окна
    let percent = scrollTop / scrollHeight;
    let color = {
        r: 201,
        g: 144,
        b: 139,
        a: 0
    };
    let color_shadow = {
        r: 127,
        g: 74,
        b: 69,
        a: 1
    };
    let tmp = Math.abs(bgColor1.r - bgColor2.r) * percent;
    color.r = Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp : bgColor1.r + tmp);

    tmp = Math.abs(bgColor1.g - bgColor2.g) * percent;
    color.g = Math.ceil(bgColor1.g > bgColor2.g ? bgColor1.g - tmp : bgColor1.g + tmp);

    tmp = Math.abs(bgColor1.b - bgColor2.b) * percent;
    color.b = Math.ceil(bgColor1.b > bgColor2.b ? bgColor1.b - tmp : bgColor1.b + tmp);

    tmp = Math.abs(bgColor1.a - bgColor2.a) * percent;
    color.a = Math.ceil(bgColor1.a > bgColor2.a ? bgColor1.a - tmp : bgColor1.a + tmp);

    if (menu.classList.contains('responsive')) {
        menu.style.background = "rgba(" + color.r + "," + color.g + "," + color.b + ", 1)";
    } else {
        menu.style.background = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";

    }

    if (menu.style.background = "rgba(" + color.r + "," + color.g + "," + color.b + ", 1)" && color.a == 0) {
        links.forEach(function(link) {
            link.style.color = "#111";
          });
    } else {
        links.forEach(function(link) {
            link.style.color = "#fff";
          });
        
    }

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




