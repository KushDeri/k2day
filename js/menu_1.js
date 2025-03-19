document.addEventListener("DOMContentLoaded", function () {
    fetch(".../menu.html") // Загружаем файл меню
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Ошибка загрузки меню:", error));
});