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
        .catch(error => console.error("Ошибка загрузки JSON:", error));
        //alert("Не удалось загрузить каталог. Проверь путь к файлу и наличие в GitHub.");


    





    function displayProducts(productsArray, globalData) {
        const container = document.getElementById("products-container");
        const starContainer = document.getElementById("star");
        const statusContainer = document.getElementById("status");
        container.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов
        starContainer.innerHTML = "";
        statusContainer.innerHTML = "";


        // Создаем словари (id → имя) для быстрого доступа
        let submenuMap = Object.fromEntries(globalData.submenu.map(a => [a.id, a.name]));
        let brandMap = Object.fromEntries(globalData.brand.map(b => [b.id, b.name]));
        let categoryMap = Object.fromEntries(globalData.category.map(c => [c.id, c.name]));
        let typeSkineMap = Object.fromEntries(globalData.typeSkine.map(t => [t.id, t.name]));
        let statusMap = Object.fromEntries(globalData.status.map(s => [s.id, s.name]));
        let starMap = Object.fromEntries(globalData.star.map(f => [f.id, f.name]));

        //let productsMap = Object.fromEntries(globalData.products.map(p => [p.id, p.submenuId, p.brandId, p.image, p.name, p.categoryId, p.price, p.volume, p.v_2, p.typeSkineId, p.details, p.starId, p.statusId]));



        //HTML код отображения продуктов ВСІХ
        productsArray.forEach(p => {

            const submenuName = submenuMap[p.submenuId] || "Невідомо";
            const brandName = brandMap[p.brandId] || "Невідомо";
            const categoryName = categoryMap[p.categoryId] || "Невідомо";
            const typeSkineName = typeSkineMap[p.typeSkineId] || "Невідомо";
            const starName = starMap[p.starId] || "";
            const statusName = statusMap[p.statusId] || "";


            //Проверка на стар продукта
            if(p.starId == 1){
                const starHTML = ``;
                starContainer.insertAdjacentHTML("beforeend", productHTML);
            };
            if (p.starId == 2 || p.starId == 3) {
                const starHTML = `
                    <div>${starName}</div>
                `;
                starContainer.insertAdjacentHTML("beforeend", productHTML);
            }

            //проверка на статус продукта


            //отображение продуктов
            const productHTML = `
                    <div class="card">
                        <div class="star" id="star"></div>
                        <div class="status" id="status"></div>
                        <a href="product.html?name=${encodeURIComponent(p.name)}"><img src="${p.image}" alt="${p.name}"></a>
                        <div class="card-info" id="card">
                            <a href="brand.html?brand=${encodeURIComponent(brandName)}" class="brand">${brandName}</a>
                            <a href="product.html?name=${encodeURIComponent(p.name)}" class="name">${p.name}</a>
                            <a href="coming_soon.html?category=${encodeURIComponent(categoryName)}" class="category">${categoryName}</a>
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
    function populateFilters(productsArray, globalData) {
        const submenuFilter = document.getElementById("submenu-filter");
        const brandFilter = document.getElementById("brand-filter");
        const typeSkineFilter = document.getElementById("typeSkine-filter");
        //const categoryFilter = document.getElementById("category-filter");


        // Создаём словари
        let brandMap = Object.fromEntries(globalData.brand.map(b => [b.id, b.name]));
        let typeSkineMap = Object.fromEntries(globalData.typeSkine.map(t => [t.id, t.name]));


        // Уникальные значения
        const brands = [...new Set(productsArray.map(p => p.brandId))]; // Уникальные бренды???
        const typeSkines = [...new Set(productsArray.map(p => p.typeSkineId))]; // Уникальные тип кожи
        //const categories = [...new Set(productsArray.map(p => p.category))]; // Уникальные категории


        // Фильтр
        brandFilter.innerHTML = `<option value="">Всі бренди</option>`;
        brands.forEach(brandId => {
            brandFilter.innerHTML += `<option value="${brandId}">${brandMap[brandId]}</option>`;
        });

        typeSkineFilter.innerHTML = `<option value="">Всі типи</option>`;
        typeSkines.forEach(typeSkine => {
            //typeSkineFilter.innerHTML += `<option value="${typeSkineId}">${typeSkineMap[typeSkineId]}</option>`;
        });

        

        // Добавляем обработчики событий для фильтрации
        brandFilter.addEventListener("change", filterProducts);
        typeSkineFilter.addEventListener("change", filterProducts);
        //categoryFilter.addEventListener("change", filterProducts);
    }



    // Фильтрация товаров
    function filterProducts() {
        const selectedBrand = document.getElementById("brand-filter").value;
        const selectedtypeSkine = document.getElementById("typeSkine-filter").value;
        //const selectedCategory = document.getElementById("category-filter").value;

        // Фильтрация
        let filtered = allProducts.filter(p => {
            let byBrand = selectedBrand === "" || p.brandId == selectedBrand;
            let byType = selectedtypeSkine === "" || p.typeSkineId == selectedtypeSkine;
            return byBrand && byType;
        });

        // Показать только отфильтрованные
        displayProducts(filtered, globalData);
    }



});