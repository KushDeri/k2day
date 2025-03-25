

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://kushderi.github.io/k2day/json/katalog.json") // Загружаем JSON
        .then(response => response.json()) // Преобразуем в объект
        .then(data => {
            displayProducts(data); // ВЫЗЫВАЕМ ФУНКЦИЮ ЗДЕСЬ   
            
        }) 
        .catch(error => console.error("Ошибка загрузки JSON:", error));
});


function displayProducts(products) {
                const container = document.getElementById("products-container");
                const brand = document.getElementById("brand-container");

                // Фильтруем товары по бренду
                //const filteredBrand = products.filter(product => product.brand === selectedBrand);

                products.forEach(product => {
                    const productHTML = `
                        <div class="card">
                            <a href="#"><img src="${product.image}" alt="${product.name}"></a>
                            <div class="card-info">
                                <a href="brand.html" class="brand">${product.brand}</a>
                                <a href="product.htmlbrand=${encodeURIComponent(product.brand)}" class="name">${product.name}</a>
                                <a href="coming_soon.html" class="category">${product.category}</a>
                                <a href="product.html" class="v">${product.v} ${product.v_2}</a>
                                <a href="product.html" class="price">${product.price} ₴</a>
                                <!--<div>відгуки</div>-->
                            </div>
                        </div>
                    `;
                    container.insertAdjacentHTML("beforeend", productHTML); //ALL

                    if (filteredDrand.length > 0) {
                        brand.insertAdjacentHTML("beforeend", productHTML); //BRAND
                    } else {
                        brandContainer.innerHTML = "<p>Товары этого бренда пока отсутствуют.</p>";
            }
                });
}