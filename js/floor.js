    fetch("https://kushderi.github.io/k2day/floor.html") // Загружаем файл меню
        .then(response => response.text()) 
        .then(data => {
            document.getElementById("floor-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Ошибка загрузки меню:", error));