document.addEventListener("DOMContentLoaded", function () {
    let allProducts = []; // Сохраняем все товары для фильтрации

    fetch("https://kushderi.github.io/k2day/json/katalog_all.json") // Загружаем JSON
        .then(response => response.json()) // Преобразуем в объект
        .then(data => {
            allProducts = data.products; //только массив products
            //allProducts = Object.values(data).flat(); // Объединяем все массивы в один

            displayProducts(allProducts); // ВЫЗЫВАЕМ ФУНКЦИЮ ЗДЕСЬ   
            populateFilters(allProducts); // ДЕЛАЕТ ФИЛЬТР
        }) 
        //.catch(error => console.error("Ошибка загрузки JSON:", error));
        alert("Не удалось загрузить каталог. Проверь путь к файлу и наличие в GitHub.");


    





    function displayProducts(productsArray) {
        const container = document.getElementById("products-container");
        container.innerHTML = ""; // Очищаем контейнер перед добавлением новых элементов

        // Создаем словари (id → имя) для быстрого доступа
        let submenuMap = Object.fromEntries(data.submenu.map(a => [a.id, a.name]));
        let brandMap = Object.fromEntries(data.brand.map(b => [b.id, b.name]));
        let categoryMap = Object.fromEntries(data.category.map(c => [c.id, c.name]));
        let typeSkineMap = Object.fromEntries(data.typeSkine.map(t => [t.id, t.name]));
        let statusMap = Object.fromEntries(data.status.map(s => [s.id, s.name]));
        let starMap = Object.fromEntries(data.star.map(f => [f.id, f.name]));



        productsArray.forEach(product => {
            const submenuName = submenuMap[product.submenuId] || "Невідомо";
            const brandName = brandMap[product.brandId] || "Невідомо";
            const categoryName = categoryMap[product.categoryId] || "Невідомо";
            const typeSkineName = typeSkineMap[product.typeSkineId] || "Невідомо";
            const starName = starMap[product.starId] || "";
            const statusName = statusMap[product.statusId] || "";


                    //let card = document.getElementById("card");
                    //if (product.vegan > 0) {
                    //    card.classList.toggle("vegan");
                    //}

            //HTML код отображения продуктов ВСІХ
            const productHTML = `
                    <div class="card">
                        <a href="#"><img src="${product.image}" alt="${product.name}"></a>
                        <div class="card-info" id="card">
                            <a href="brand.html?brand=${encodeURIComponent(product.brandId)}" class="brand">${product.brandId}</a>
                            <a href="product.html?name=${encodeURIComponent(product.name)}" class="name">${product.name}</a>
                            <a href="coming_soon.html?category=${encodeURIComponent(product.categoryId)}" class="category">${product.categoryId}</a>
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
    function populateFilters(productsArray) {
        const submenuFilter = document.getElementById("submenu-filter");
        const brandFilter = document.getElementById("brand-filter");
        const typeSkineFilter = document.getElementById("typeSkine-filter");
        //const categoryFilter = document.getElementById("category-filter");

        const brands = [...new Set(products.map(p => p.brandId))]; // Уникальные бренды
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