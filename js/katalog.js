document.addEventListener("DOMContentLoaded", function () {
    fetch("https://kushderi.github.io/k2day/json/katalog.json") // Загружаем JSON
        .then(response => response.json()) // Преобразуем в объект
        .then(data => {

            function displayProducts(data) {
                const container = document.getElementById("products-container");

                products.forEach(product => {
                    const productHTML = `
                        <div class="card">
                            <a href="#"><img src="${products.image}" alt="${products.name}"></a>
                            <div class="card-info">
                                <a href="#">${products.brand}</a>
                                <a href="#">${products.name}</a>
                                <a href="#">${products.category}</a>
                                <div class="size-price">${products.price}</div>
                                <!--<div>відгуки</div>-->
                            </div>
                        </div>
        `;
        container.innerHTML += productHTML;
    });
}

        }) // Передаём в функцию
        //.catch(error => console.error("Ошибка загрузки JSON:", error));
});


