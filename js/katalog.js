document.addEventListener("DOMContentLoaded", function () {
    let allProducts = []; // Сохраняем все товары для фильтрации
    let globalData = {};

    fetch("https://kushderi.github.io/k2day/json/katalog_all.json") // Загружаем JSON
        .then(response => response.json()) // Преобразуем в объект
        .then(data => {
            //allProducts = data.products; //только массив products
            //allProducts = Object.values(data).flat(); // Объединяем все массивы в один
            globalData = data;
            allProducts = data.products;

            displayProducts(allProducts, globalData); // ВЫЗЫВАЕМ ФУНКЦИЮ ЗДЕСЬ   
            populateFilters(allProducts, globalData); // ДЕЛАЕТ ФИЛЬТР
        }) 
        //.catch(error => console.error("Ошибка загрузки JSON:", error));
        alert("Не удалось загрузить каталог. Проверь путь к файлу и наличие в GitHub.");


    





    function displayProducts(productsArray, globalData) {
        const container = document.getElementById("products-container");
        container.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов

        // Создаем словари (id → имя) для быстрого доступа
        let submenuMap = Object.fromEntries(globalData.submenu.map(a => [a.id, a.name]));
        let brandMap = Object.fromEntries(globalData.brand.map(b => [b.id, b.name]));
        let categoryMap = Object.fromEntries(globalData.category.map(c => [c.id, c.name]));
        let typeSkineMap = Object.fromEntries(globalData.typeSkine.map(t => [t.id, t.name]));
        let statusMap = Object.fromEntries(globalData.status.map(s => [s.id, s.name]));
        let starMap = Object.fromEntries(globalData.star.map(f => [f.id, f.name]));

        //let productsMap = Object.fromEntries(globalData.products.map(p => [p.id, p.submenuId, p.brandId, p.image, p.name, p.categoryId, p.price, p.volume, p.v_2, p.typeSkineId, p.details, p.starId, p.statusId]));


        productsArray.forEach(p => {
            //???
            const submenuName = submenuMap[p.submenuId] || "Невідомо";
            const brandName = brandMap[p.brandId] || "Невідомо";
            const categoryName = categoryMap[p.categoryId] || "Невідомо";
            const typeSkineName = typeSkineMap[p.typeSkineId] || "Невідомо";
            const starName = starMap[p.starId] || "";
            const statusName = statusMap[p.statusId] || "";



            //HTML код отображения продуктов ВСІХ
            const productHTML = `
                    <div class="card">
                        <a href="#"><img src="${p.image}" alt="${p.name}"></a>
                        <div class="card-info" id="card">
                            <a href="brand.html?brand=${encodeURIComponent(p.brandId)}" class="brand">${brandMap[p.brandId]}</a>
                            <a href="product.html?name=${encodeURIComponent(p.name)}" class="name">${p.name}</a>
                            <a href="coming_soon.html?category=${encodeURIComponent(p.categoryId)}" class="category">${p.categoryId}</a>
                            <a href="product.html" class="v">${p.v} ${p.v_2}</a>
                            <a href="product.html" class="price">${p.price} ₴</a>
                            <!--<div>відгуки</div>-->
                        </div>
                    </div>
            `;
            container.insertAdjacentHTML("beforeend", productHTML); //ALL
        });
    }



    // Функция для заполнения фильтров
    function populateFilters(productsArray) {
        const submenuFilter = document.getElementById("submenu-filter");
        const brandFilter = document.getElementById("brand-filter");
        const typeSkineFilter = document.getElementById("typeSkine-filter");
        //const categoryFilter = document.getElementById("category-filter");

        const brands = [...new Set(products.map(p => p.brandId))]; // Уникальные бренды???
        const typeSkines = [...new Set(products.map(p => p.typeSkineId))]; // Уникальные тип кожи
        //const categories = [...new Set(products.map(p => p.category))]; // Уникальные категории



        brandFilter.innerHTML = `<option value="">Всі бренди</option>`;
        brands.forEach(brand => {
            brandFilter.innerHTML += `<option value="${brandId}">${brandId}</option>`;
        });

        typeSkineFilter.innerHTML = `<option value="">Всі типи</option>`;
        typeSkines.forEach(typeSkine => {
            typeSkineFilter.innerHTML += `<option value="${typeSkineId}">${typeSkineId}</option>`;
        });

        //categoryFilter.innerHTML = `<option value="">Всі категорії</option>`;
        //categories.forEach(category => {
        //    categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
        //});


        // Добавляем обработчики событий для фильтрации
        brandFilter.addEventListener("change", filterProducts);
        typeSkineFilter.addEventListener("change", filterProducts);
        //categoryFilter.addEventListener("change", filterProducts);
    }



    // Фильтрация товаров
    function filterProducts() {
        const selectedBrand = document.getElementById("brand-filter").value;
        //const selectedCategory = document.getElementById("category-filter").value;

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