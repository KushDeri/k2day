document.addEventListener("DOMContentLoaded", function () {
    let allProducts = []; // Сохраняем все товары для фильтрации
    let globalData = {};

    //fetch("https://kushderi.github.io/k2day/json/katalog_all.json") // Загружаем JSON
    //    .then(response => response.json()) // Преобразуем в объект
    //    .then(data => {
    //        globalData = data;
    //        allProducts = data.products;
    //        displayProducts(allProducts, globalData); // ВЫЗЫВАЕМ ФУНКЦИЮ ЗДЕСЬ   
    //        populateFilters(allProducts, globalData); // ДЕЛАЕТ ФИЛЬТР
    //    }) 
    //    .catch(error => console.error("Ошибка загрузки JSON:", error));
        //alert("Не удалось загрузить каталог. Проверь путь к файлу и наличие в GitHub.");

    Promise.all([
        fetch('../k2day/json/meta.json').then(r => r.json()),
        fetch('../k2day/json/brands.json').then(r => r.json()),
        fetch('../k2day/json/categories.json').then(r => r.json()),
        fetch('../k2day/json/attributes.json').then(r => r.json()),
        fetch('../k2day/json/products.json').then(r => r.json())
    ])
    .then(([meta, brands, categories, attributes, products]) => {
        
        globalData = { meta, brands, categories, attributes };
        allProducts = products;

        displayProducts(allProducts, globalData); // ОТОБРАЖЕНИЕ ЗДЕСЬ   
        populateFilters(allProducts, globalData); // ДЕЛАЕТ ФИЛЬТР
    }) 
    .catch(error => {
        console.error("Ошибка загрузки JSON:", error);
        alert("Не удалось загрузить каталог. Проверь путь к файлу и наличие в GitHub.");
    });





    function displayProducts(productsArray, globalData) {
        const container = document.getElementById("products-container");
        container.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов


        // Создаем словари (id → имя) для быстрого доступа
        let submenuMap = Object.fromEntries(globalData.attributes.submenu.map(a => [a.id, a.name]));
        let brandMap = Object.fromEntries(globalData.brands.map(b => [b.id, b.name]));
        let categoryMap = Object.fromEntries(globalData.categories.map(c => [c.id, c.name]));
        let typeSkineMap = Object.fromEntries(globalData.attributes.typeSkine.map(t => [t.id, t.name]));
        //let statusMap = Object.fromEntries(globalData.attributes.status.map(s => [s.id, { name: s.name, image: s.image }]));
        let starMap = Object.fromEntries(globalData.attributes.star.map(f => [f.id, f.name]));
        //let stockMap = Object.fromEntries(globalData.attributes.stock.map(k => [k.id, k.name]));



        //HTML код отображения продуктов ВСІХ
        productsArray.forEach(p => {

            const submenuName = submenuMap[p.submenuId] || "Невідомо";
            const brandName = brandMap[p.brandId] || "Невідомо";
            const categoryName = categoryMap[p.categoryId] || "Невідомо";
            const typeSkineName = typeSkineMap[p.typeSkineId] || "Невідомо";
            //const statusData = statusMap[p.statusId] || null;
            const starName = starMap[p.starId] || "";
            //const stockData = stockMap[p.stockId] || null;


            //Проверка на статус продукта
            //let statusHTML = "";
            //if (statusData == 2 || statusData == 3) {
            //    statusHTML = `<img class="status" src="${statusData.image}">`;
            //}
            //else {
            //    statusHTML = ``;
            //}


            //Проверка на стар продукта
            let starStyle = "";
            //let starCSS = document.querySelectorAll(".star");
            if (p.starId == 2) {
                starStyle = `style="display:flex; background:red; position: absolute; padding: 4px 12px; color: #fff; border-radius: 15px 0 0px;"`;
            }
            else if (p.starId == 3) {
                starStyle = `style="display:flex; background:green; position: absolute; padding: 4px 12px; color: #fff; border-radius: 15px 0 0px;"`;
            }
            else {
                starStyle = `style="display:none;"`;
            }

            




            //отображение продуктов
            const productHTML = `
                    <div class="card">
                        <div class="star" ${starStyle}>${starName}</div>
                        <!--${statusHTML}-->
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