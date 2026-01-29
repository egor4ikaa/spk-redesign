// script.js

// Данные для карточек продукции
const products = [
    {
        id: 1,
        name: "Ячмень",
        category: "grain",
        description: "Высококачественный ячмень для кормовых и пивоваренных целей",
        price: "от 15 000 руб./т",
        image: "images/barley.jpg"
    },
    {
        id: 2,
        name: "Соя",
        category: "grain",
        description: "Питательная соя с высоким содержанием белка",
        price: "от 35 000 руб./т",
        image: "images/soy.jpg"
    },
    {
        id: 3,
        name: "Пшеница",
        category: "grain",
        description: "Отборная пшеница высшего качества",
        price: "от 20 000 руб./т",
        image: "images/wheat.jpg"
    },
    {
        id: 4,
        name: "Молоко",
        category: "dairy",
        description: "Свежее натуральное молоко высшего сорта",
        price: "от 50 руб./л",
        image: "images/milk.jpg"
    },
    {
        id: 5,
        name: "Говядина",
        category: "livestock",
        description: "Нежная говядина премиум-класса",
        price: "от 450 руб./кг",
        image: "images/beef.jpg"
    },
    {
        id: 6,
        name: "Свинина",
        category: "livestock",
        description: "Сочная свинина отборного качества",
        price: "от 350 руб./кг",
        image: "images/pork.jpg"
    },
    {
        id: 7,
        name: "Баранина",
        category: "livestock",
        description: "Ароматная баранина с пастбищ",
        price: "от 550 руб./кг",
        image: "images/lamb.jpg"
    },
    {
        id: 8,
        name: "Курятина",
        category: "livestock",
        description: "Диетическое куриное мясо",
        price: "от 250 руб./кг",
        image: "images/chicken.jpg"
    }
];

// Переводы
const translations = {
    ru: {
        // Навигация
        "nav-home": "Главная",
        "nav-about": "О нас",
        "nav-advantages": "Преимущества",
        "nav-order": "Быстрый заказ",
        "nav-news": "Новости",
        "nav-gallery": "Галерея",
        "nav-contacts": "Контакты",

        // Герой секция
        "hero-title": "Современное сельское хозяйство",
        "hero-subtitle": "Качественная продукция, передовые технологии и забота об экологии",
        "hero-button": "Узнать больше",

        // О нас
        "about-title": "О нас",
        "stat-employees": "сотрудников",
        "stat-years": "лет опыта",
        "stat-quality": "качество",

        // Преимущества
        "advantages-title": "Наши преимущества",
        "advantage-1-title": "Производственная мощность",
        "advantage-1-text": "Ферма оснащена современным оборудованием и соответствует всем стандартам сельскохозяйственного производства.",
        "advantage-2-title": "Рабочие места",
        "advantage-2-text": "В сельскохозяйственном секторе открыты дополнительные вакансии (при текущем штате 51 сотрудник).",
        "advantage-3-title": "Развитие экономики",
        "advantage-3-text": "Предприятие несет существенный вклад в экономическое развитие региона через увеличение налоговых отчислений.",
        "advantage-4-title": "Качество продукции",
        "advantage-4-text": "Современные оборудования позволяют выпускать молочную продукцию премиального качества с улучшенными характеристиками.",
        "advantage-5-title": "Экологичность",
        "advantage-5-text": "Использование экологичных технологий и ответственное отношение к природным ресурсам.",
        "advantage-6-title": "Опыт и традиции",
        "advantage-6-text": "Более 20 лет успешной работы в сельскохозяйственной отрасли с сохранением лучших традиций.",

        // Быстрый заказ
        "order-title": "Быстрый заказ",
        "order-subtitle": "Выберите продукцию и оформите заказ прямо на сайте",
        "search-placeholder": "Поиск продукции...",
        "filter-all": "Все",
        "filter-grain": "Зерновые",
        "filter-dairy": "Молочная продукция",
        "filter-livestock": "Животноводство",
        "order-button": "Заказать",

        // Новости
        "news-title": "Последние новости",
        "news-1-title": "Уборочная компания закончилась 🌾",
        "news-1-text": "В Удмуртии завершилась уборка зерна, как и на нашем предприятие!",
        "news-2-title": "Для любителей ночного чтения 🌙",
        "news-2-text": "Появилась возможность переключения темы на сайте (смотреть фото)",
        "news-3-title": "Современный занавес",
        "news-3-text": "Демонтированы две устаревшие фермы. На освободившемся месте ведется строительство современного навеса для содержания телят.",
        "news-read": "Читать далее",

        // Галерея
        "gallery-title": "Наша ферма",
        "gallery-1": "Молочное оборудование",
        "gallery-2": "Ферма СПК Восход",
        "gallery-3": "Работники СПК Восход",

        // Контакты
        "contacts-title": "Контакты",
        "contact-address": "Адрес",
        "contact-owner": "Владелец",
        "contact-phone": "Телефон",
        "contact-email": "Почта",

        // Подвал
        "footer-about": "Сельскохозяйственный производственный кооператив \"Восход\" - современное предприятие с традициями.",
        "footer-navigation": "Навигация",
        "footer-contacts": "Контакты",
        "footer-newsletter": "Подписка на новости",
        "footer-newsletter-text": "Будьте в курсе всех событий и новостей",
        "footer-subscribe": "Подписаться",

        // Модальное окно заказа
        "order-name": "Имя",
        "order-phone": "Телефон",
        "order-email": "Email",
        "order-quantity": "Количество (кг)",
        "order-comment": "Комментарий к заказу",
        "order-submit": "Отправить заказ"
    },
    en: {
        // Навигация
        "nav-home": "Home",
        "nav-about": "About",
        "nav-advantages": "Advantages",
        "nav-order": "Quick Order",
        "nav-news": "News",
        "nav-gallery": "Gallery",
        "nav-contacts": "Contacts",

        // Герой секция
        "hero-title": "Modern Agriculture",
        "hero-subtitle": "Quality products, advanced technologies and care for the environment",
        "hero-button": "Learn More",

        // О нас
        "about-title": "About Us",
        "stat-employees": "employees",
        "stat-years": "years of experience",
        "stat-quality": "quality",

        // Преимущества
        "advantages-title": "Our Advantages",
        "advantage-1-title": "Production Capacity",
        "advantage-1-text": "The farm is equipped with modern equipment and meets all agricultural production standards.",
        "advantage-2-title": "Workplaces",
        "advantage-2-text": "Additional vacancies are open in the agricultural sector (with a current staff of 51 employees).",
        "advantage-3-title": "Economic Development",
        "advantage-3-text": "The enterprise makes a significant contribution to the economic development of the region through increased tax payments.",
        "advantage-4-title": "Product Quality",
        "advantage-4-text": "Modern equipment allows the production of premium quality dairy products with improved characteristics.",
        "advantage-5-title": "Eco-friendliness",
        "advantage-5-text": "Use of environmentally friendly technologies and responsible attitude towards natural resources.",
        "advantage-6-title": "Experience and Traditions",
        "advantage-6-text": "More than 20 years of successful work in the agricultural industry while preserving the best traditions.",

        // Быстрый заказ
        "order-title": "Quick Order",
        "order-subtitle": "Select products and place an order directly on the website",
        "search-placeholder": "Search products...",
        "filter-all": "All",
        "filter-grain": "Grains",
        "filter-dairy": "Dairy Products",
        "filter-livestock": "Livestock",
        "order-button": "Order",

        // Новости
        "news-title": "Latest News",
        "news-1-title": "Harvest campaign has ended 🌾",
        "news-1-text": "In Udmurtia, the grain harvest has ended, as well as at our enterprise!",
        "news-2-title": "For night reading lovers 🌙",
        "news-2-text": "The ability to switch the theme on the site has appeared (see photo)",
        "news-3-title": "Modern curtain",
        "news-3-text": "Two outdated farms have been dismantled. Construction of a modern canopy for keeping calves is underway on the vacated site.",
        "news-read": "Read more",

        // Галерея
        "gallery-title": "Our Farm",
        "gallery-1": "Dairy equipment",
        "gallery-2": "SPK Voshod farm",
        "gallery-3": "SPK Voshod employees",

        // Контакты
        "contacts-title": "Contacts",
        "contact-address": "Address",
        "contact-owner": "Owner",
        "contact-phone": "Phone",
        "contact-email": "Email",

        // Подвал
        "footer-about": "Agricultural production cooperative \"Voshod\" is a modern enterprise with traditions.",
        "footer-navigation": "Navigation",
        "footer-contacts": "Contacts",
        "footer-newsletter": "Newsletter",
        "footer-newsletter-text": "Stay up to date with all events and news",
        "footer-subscribe": "Subscribe",

        // Модальное окно заказа
        "order-name": "Name",
        "order-phone": "Phone",
        "order-email": "Email",
        "order-quantity": "Quantity (kg)",
        "order-comment": "Order comment",
        "order-submit": "Submit Order"
    }
};

// Текущий язык
let currentLang = 'ru';

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация темы
    initTheme();

    // Инициализация перевода
    initLanguage();

    // Инициализация карточек продукции
    initProducts();

    // Инициализация фильтров и поиска
    initFilters();

    // Инициализация карты
    initMap();

    // Инициализация модального окна
    initModal();

    // Инициализация мобильного меню
    initMobileMenu();

    // Инициализация анимаций при скролле
    initScrollAnimations();

    // Инициализация формы подписки
    initNewsletter();
});

// Инициализация темы
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');

    // Проверяем сохраненную тему
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Применяем сохраненную тему
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // Обработчик переключения темы
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
}

// Инициализация перевода
function initLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');

    // Устанавливаем язык из localStorage или по умолчанию русский
    const savedLang = localStorage.getItem('language') || 'ru';
    setLanguage(savedLang);

    // Обработчики для кнопок переключения языка
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);

            // Обновляем активную кнопку
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

// Установка языка
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Обновляем все элементы с data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Обновляем placeholder для поиска
    const searchInput = document.getElementById('productSearch');
    if (searchInput && translations[lang]['search-placeholder']) {
        searchInput.placeholder = translations[lang]['search-placeholder'];
    }
}

// Инициализация карточек продукции
function initProducts() {
    const productsGrid = document.getElementById('productsGrid');

    // Генерируем карточки
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card scroll-animate';
        productCard.setAttribute('data-category', product.category);

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="order-btn" data-product-id="${product.id}" data-translate="order-button">Заказать</button>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });

    // Добавляем обработчики для кнопок заказа
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            openOrderModal(productId);
        });
    });
}

// Получение названия категории
function getCategoryName(category) {
    const categoryNames = {
        'grain': currentLang === 'ru' ? 'Зерновые' : 'Grains',
        'dairy': currentLang === 'ru' ? 'Молочная продукция' : 'Dairy Products',
        'livestock': currentLang === 'ru' ? 'Животноводство' : 'Livestock'
    };

    return categoryNames[category] || category;
}

// Инициализация фильтров и поиска
function initFilters() {
    const searchInput = document.getElementById('productSearch');
    const categoryFilters = document.querySelectorAll('.category-filter');

    // Поиск
    searchInput.addEventListener('input', filterProducts);

    // Фильтры по категориям
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Удаляем активный класс у всех фильтров
            categoryFilters.forEach(f => f.classList.remove('active'));
            // Добавляем активный класс текущему фильтру
            this.classList.add('active');
            filterProducts();
        });
    });
}

// Фильтрация продуктов
function filterProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const activeFilter = document.querySelector('.category-filter.active');
    const category = activeFilter ? activeFilter.getAttribute('data-category') : 'all';

    document.querySelectorAll('.product-card').forEach(card => {
        const productName = card.querySelector('.product-name').textContent.toLowerCase();
        const productDescription = card.querySelector('.product-description').textContent.toLowerCase();
        const productCategory = card.getAttribute('data-category');

        const matchesSearch = productName.includes(searchTerm) || productDescription.includes(searchTerm);
        const matchesCategory = category === 'all' || productCategory === category;

        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('animated');
            }, 100);
        } else {
            card.style.display = 'none';
            card.classList.remove('animated');
        }
    });
}

// Инициализация карты
function initMap() {
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(function() {
            const myMap = new ymaps.Map("map-container", {
                center: [56.491220, 52.841043],
                zoom: 16
            });

            const myPlacemark = new ymaps.Placemark([56.491220, 52.841043], {
                hintContent: 'СПК "Восход"',
                balloonContent: 'Сельскохозяйственный производственный кооператив "Восход"<br>Октябрьская ул., д.6'
            });

            myMap.geoObjects.add(myPlacemark);
            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            myMap.behaviors.disable(['scrollZoom']);
        });
    }
}

// Инициализация модального окна
function initModal() {
    const modal = document.getElementById('orderModal');
    const closeBtn = modal.querySelector('.modal-close');
    const orderForm = document.getElementById('orderForm');

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Закрытие при клике вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Обработка формы заказа
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Здесь должна быть логика отправки заказа на сервер
        const formData = {
            product: document.getElementById('modalProductName').textContent,
            name: document.getElementById('orderName').value,
            phone: document.getElementById('orderPhone').value,
            email: document.getElementById('orderEmail').value,
            quantity: document.getElementById('orderQuantity').value,
            comment: document.getElementById('orderComment').value
        };

        console.log('Order submitted:', formData);

        // Показываем сообщение об успехе
        alert(currentLang === 'ru'
            ? 'Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.'
            : 'Order successfully sent! We will contact you soon.');

        // Закрываем модальное окно
        modal.classList.remove('active');

        // Сбрасываем форму
        orderForm.reset();
    });
}

// Открытие модального окна заказа
function openOrderModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('orderModal');
    const modalProductName = document.getElementById('modalProductName');

    modalProductName.textContent = product.name;
    modal.classList.add('active');
}

// Инициализация мобильного меню
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');

    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');

        // Меняем иконку
        const icon = this.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Закрываем меню при клике на ссылку
    document.querySelectorAll('#nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
}

// Инициализация анимаций при скролле
function initScrollAnimations() {
    function animateOnScroll() {
        const elements = document.querySelectorAll('.scroll-animate');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    }

    // Запускаем при загрузке и скролле
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
}

// Инициализация формы подписки
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;

            // Здесь должна быть логика отправки email на сервер
            console.log('Newsletter subscription:', email);

            // Показываем сообщение об успехе
            alert(currentLang === 'ru'
                ? 'Спасибо за подписку!'
                : 'Thank you for subscribing!');

            // Сбрасываем форму
            this.reset();
        });
    }
}

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});