document.addEventListener("DOMContentLoaded", function () {
    fetch("https://kushderi.github.io/k2day/data.json") // Загружаем JSON
        .then(response => response.json()) // Преобразуем в объект
        .then(data => {

            function displayProducts(data) {
                const container = document.getElementById("products-container");

                products.forEach(product => {
                    const productHTML = `
                        <div class="card">
                            <a href="#"><img src="${product.image}" alt="${product.name}"></a>
                            <div class="card-info">
                                <a href="#">${product.brand}</a>
                                <a href="#">${product.name}</a>
                                <a href="#">${product.category}</a>
                                <div class="size-price">${product.price}</div>
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


