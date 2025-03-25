

document.addEventListener("DOMContentLoaded", function () {
    fetch("../json/katalog.json") // Загружаем JSON
        .then(response => response.json()) // Преобразуем в объект
        .then(data => {
            displayProducts(data); // ВЫЗЫВАЕМ ФУНКЦИЮ ЗДЕСЬ   
            
        }) 
        .catch(error => console.error("Ошибка загрузки JSON:", error));
});


function displayProducts(products) {
                const container = document.getElementById("products-container");

                products.forEach(product => {
                    const productHTML = `
                        <div class="card">
                            <a href="#"><img src="${product.image}" alt="${product.name}"></a>
                            <div class="card-info">
                                <a href="coming_soon.html" class="brand">${product.brand}</a>
                                <a href="product.html" class="name">${product.name}</a>
                                <a href="coming_soon.html" class="category">${product.category}</a>
                                <a href="product.html" class="v">${product.v} ${product.v_2}</a>
                                <a href="product.html" class="price">${product.price} ₴</a>
                                <!--<div>відгуки</div>-->
                            </div>
                        </div>
                    `;
                    container.insertAdjacentHTML("beforeend", productHTML);
                });
}