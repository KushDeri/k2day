document.addEventListener("DOMContentLoaded", function () {
    let allProducts = []; // Сохраняем все товары для фильтрации

    fetch("https://kushderi.github.io/k2day/json/katalog_all.json") // Загружаем JSON
        .then(response => response.json()) // Преобразуем в объект
        .then(data => {
            allProducts = data; // Сохраняем JSON для последующей фильтрации
            displayProducts(allProducts); // ВЫЗЫВАЕМ ФУНКЦИЮ ЗДЕСЬ   
            populateFilters(allProducts); // ДЕЛАЕТ ФИЛЬТР
        }) 
        .catch(error => console.error("Ошибка загрузки JSON:", error));
        alert("Не удалось загрузить каталог. Проверь путь к файлу и наличие в GitHub.");



    function displayProducts(products) {
                const container = document.getElementById("products-container");
                container.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов

                products.forEach(product => {
                    //let card = document.getElementById("card");
                    //if (product.vegan > 0) {
                    //    card.classList.toggle("vegan");
                    //}

                    const productHTML = `
                        <div class="card">
                            <a href="#"><img src="${product.image}" alt="${product.name}"></a>
                            <div class="card-info" id="card">
                                <a href="brand.html?brand=${encodeURIComponent(product.brand)}" class="brand">${product.brand}</a>
                                <a href="product.html?name=${encodeURIComponent(product.name)}" class="name">${product.name}</a>
                                <a href="coming_soon.html?category=${encodeURIComponent(product.category)}" class="category">${product.category}</a>
                                <a href="product.html" class="v">${product.v} ${product.v_2}</a>
                                <a href="product.html" class="price">${product.price} ₴</a>
                                <!--<div>відгуки</div>-->
                            </div>
                        </div>
                    `;
                    container.insertAdjacentHTML("beforeend", productHTML); //ALL
                });
    }

    // Функция для заполнения фильтров
    function populateFilters(products) {
        const brandFilter = document.getElementById("brand-filter");
        //const categoryFilter = document.getElementById("category-filter");

        const brands = [...new Set(products.map(p => p.brand))]; // Уникальные бренды
        //const categories = [...new Set(products.map(p => p.category))]; // Уникальные категории



        brandFilter.innerHTML = `<option value="">Всі бренди</option>`;
        brands.forEach(brand => {
            brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
        });

        //categoryFilter.innerHTML = `<option value="">Всі категорії</option>`;
        //categories.forEach(category => {
        //    categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
        //});

        // Добавляем обработчики событий для фильтрации
        brandFilter.addEventListener("change", filterProducts);
        categoryFilter.addEventListener("change", filterProducts);
    }



    // Фильтрация товаров
    function filterProducts() {
        const selectedBrand = document.getElementById("brand-filter").value;
        const selectedCategory = document.getElementById("category-filter").value;

        let filteredProducts = allProducts;

        if (selectedBrand) {
            filteredProducts = filteredProducts.filter(p => p.brand === selectedBrand);
        }

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
        }

        displayProducts(filteredProducts);
    }
});