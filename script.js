// script.js - Оптимизированный для index.html

// Данные о продукции (соответствуют карточкам в HTML)
const products = [
    {
        id: 1,
        name: "Пшеница",
        category: "grain",
        description: "Высококачественная пшеница мягких сортов. Идеально подходит для производства муки высшего сорта.",
        price: 85,
        priceDisplay: "85 ₽/кг",
        image: "images/pshenica.jpeg",
        unit: "кг"
    },
    {
        id: 2,
        name: "Молоко",
        category: "dairy",
        description: "Свежее натуральное молоко от здоровых коров. Пастеризованное, без консервантов.",
        price: 50,
        priceDisplay: "50 ₽/л",
        image: "images/milk.jpeg",
        unit: "л"
    },
    {
        id: 3,
        name: "Сыр",
        category: "dairy",
        description: "Натуральный сыр твердых сортов. Выдержка 6 месяцев. Идеально для нарезки и приготовления блюд.",
        price: 650,
        priceDisplay: "650 ₽/кг",
        image: "images/cheese.jpeg",
        unit: "кг"
    },
    {
        id: 4,
        name: "Ячмень",
        category: "grain",
        description: "Кормовой ячмень высшего качества. Идеально подходит для кормления сельскохозяйственных животных.",
        price: 75,
        priceDisplay: "75 ₽/кг",
        image: "images/yachmen.jpg",
        unit: "кг"
    }
];

const API_CONFIG = {
    ORDER_ENDPOINT: 'send_order.php',
    METHOD: 'POST'
};

// Переводы для многоязычности
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
        "order-quantity": "Количество",
        "order-comment": "Комментарий к заказу",
        "order-submit": "Отправить заказ",
        "order-success": "Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.",
        "order-error": "Ошибка при отправке заказа. Пожалуйста, попробуйте еще раз.",
        "order-loading": "Отправка заказа..."
    },
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-about": "About",
        "nav-advantages": "Advantages",
        "nav-order": "Quick Order",
        "nav-news": "News",
        "nav-gallery": "Gallery",
        "nav-contacts": "Contacts",

        // Hero section
        "hero-title": "Modern Agriculture",
        "hero-subtitle": "Quality products, advanced technologies and care for the environment",
        "hero-button": "Learn More",

        // About
        "about-title": "About Us",
        "stat-employees": "employees",
        "stat-years": "years of experience",
        "stat-quality": "quality",

        // Advantages
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

        // Quick Order
        "order-title": "Quick Order",
        "order-subtitle": "Select products and place an order directly on the website",
        "search-placeholder": "Search products...",
        "filter-all": "All",
        "filter-grain": "Grains",
        "filter-dairy": "Dairy Products",
        "filter-livestock": "Livestock",

        // News
        "news-title": "Latest News",
        "news-1-title": "Harvest campaign has ended 🌾",
        "news-1-text": "In Udmurtia, the grain harvest has ended, as well as at our enterprise!",
        "news-2-title": "For night reading lovers 🌙",
        "news-2-text": "The ability to switch the theme on the site has appeared (see photo)",
        "news-3-title": "Modern curtain",
        "news-3-text": "Two outdated farms have been dismantled. Construction of a modern canopy for keeping calves is underway on the vacated site.",
        "news-read": "Read more",

        // Gallery
        "gallery-title": "Our Farm",
        "gallery-1": "Dairy equipment",
        "gallery-2": "SPK Voshod farm",
        "gallery-3": "SPK Voshod employees",

        // Contacts
        "contacts-title": "Contacts",
        "contact-address": "Address",
        "contact-owner": "Owner",
        "contact-phone": "Phone",
        "contact-email": "Email",

        // Footer
        "footer-about": "Agricultural production cooperative \"Voshod\" is a modern enterprise with traditions.",
        "footer-navigation": "Navigation",
        "footer-contacts": "Contacts",
        "footer-newsletter": "Newsletter",
        "footer-newsletter-text": "Stay up to date with all events and news",
        "footer-subscribe": "Subscribe",

        // Order Modal
        "order-name": "Name",
        "order-phone": "Phone",
        "order-email": "Email",
        "order-quantity": "Quantity",
        "order-comment": "Order comment",
        "order-submit": "Submit Order",
        "order-success": "Order successfully sent! We will contact you soon.",
        "order-error": "Error sending order. Please try again.",
        "order-loading": "Sending order..."
    }
};

// Текущий язык (по умолчанию русский)
let currentLang = 'ru';

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация темы
    initTheme();

    // Инициализация перевода
    initTranslations();

    // Инициализация фильтров и поиска
    initFilters();

    // Инициализация кнопок заказа
    initOrderButtons();

    // Инициализация модального окна
    initModal();

    // Инициализация мобильного меню
    initMobileMenu();

    // Инициализация анимаций при скролле
    initScrollAnimations();

    // Инициализация копирования контактов
    initCopyButtons();

    // Инициализация плавной прокрутки
    initSmoothScroll();

    // Инициализация формы подписки
    initNewsletter();
});

// ===== ИНИЦИАЛИЗАЦИЯ ТЕМЫ =====
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    // Обновление иконки
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';

    // Обработчик переключения темы
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);

        // Обновляем иконку
        icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';

        // Сохраняем в localStorage
        localStorage.setItem('theme', newTheme);
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ ПЕРЕВОДОВ =====
function initTranslations() {
    // Загрузка сохраненного языка
    const savedLang = localStorage.getItem('language') || 'ru';
    currentLang = savedLang;

    // Применение переводов
    applyTranslations();
}

// Применение переводов ко всем элементам
function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Обновление плейсхолдера поиска
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.placeholder = translations[currentLang]['search-placeholder'];
    }
}

// ===== ИНИЦИАЛИЗАЦИЯ ФИЛЬТРОВ И ПОИСКА =====
function initFilters() {
    // Фильтрация по категориям
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('click', function() {
            // Убираем активный класс у всех фильтров
            document.querySelectorAll('.category-filter').forEach(f => {
                f.classList.remove('active');
            });

            // Добавляем активный класс текущему фильтру
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Поиск по продукции
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const activeFilter = document.querySelector('.category-filter.active');
            const category = activeFilter ? activeFilter.getAttribute('data-category') : 'all';

            filterProducts(category, searchTerm);
        });
    }
}

// Фильтрация продукции
function filterProducts(category = 'all', searchTerm = '') {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productDesc = card.querySelector('p').textContent.toLowerCase();

        let matchesCategory = true;
        let matchesSearch = true;

        // Проверка категории
        if (category !== 'all') {
            const productCategory = getProductCategoryByName(productName);
            matchesCategory = productCategory === category;
        }

        // Проверка поиска
        if (searchTerm) {
            matchesSearch = productName.includes(searchTerm) || productDesc.includes(searchTerm);
        }

        // Показываем/скрываем карточку
        if (matchesCategory && matchesSearch) {
            card.style.display = 'block';
            card.classList.add('visible');
        } else {
            card.style.display = 'none';
            card.classList.remove('visible');
        }
    });
}

// Получение категории продукта по имени
function getProductCategoryByName(productName) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
    return product ? product.category : 'other';
}

// ===== ИНИЦИАЛИЗАЦИЯ КНОПОК ЗАКАЗА =====
function initOrderButtons() {
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            openOrderModal(productName);
        });
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ МОДАЛЬНОГО ОКНА =====
function initModal() {
    const modal = document.getElementById('orderModal');
    const closeBtn = document.querySelector('.modal-close');
    const orderForm = document.getElementById('orderForm');

    // Закрытие модального окна по кнопке
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    // Закрытие модального окна при клике вне его
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Обработка отправки формы
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitOrder();
    });
}

// Открытие модального окна
function openOrderModal(productName) {
    const modal = document.getElementById('orderModal');
    const modalProductName = document.getElementById('modalProductName');
    const orderProductInput = document.getElementById('orderProduct');
    const orderQuantityInput = document.getElementById('orderQuantity');

    // Находим продукт по имени
    const product = products.find(p => p.name === productName);

    if (product) {
        // Устанавливаем название продукта
        modalProductName.textContent = productName;
        orderProductInput.value = productName;

        // Устанавливаем единицы измерения в плейсхолдере
        const quantityLabel = document.querySelector('[data-translate="order-quantity"]');
        quantityLabel.textContent = `${translations[currentLang]['order-quantity']} (${product.unit})`;

        // Устанавливаем минимальное количество в зависимости от продукта
        if (product.unit === 'кг' || product.unit === 'л') {
            orderQuantityInput.min = '1';
            orderQuantityInput.value = '100'; // По умолчанию 100 кг/л для оптовых заказов
        }
    }

    // Показываем модальное окно
    modal.style.display = 'flex';

    // Добавляем плавное появление
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('orderModal');
    const modalContent = modal.querySelector('.modal-content');

    // Плавное закрытие
    modalContent.style.transform = 'translateY(50px)';
    modalContent.style.opacity = '0';

    setTimeout(() => {
        modal.style.display = 'none';
        // Сброс формы
        document.getElementById('orderForm').reset();
        document.getElementById('orderResponse').style.display = 'none';
    }, 300);
}

// Отправка заказа
function submitOrder() {
    const responseDiv = document.getElementById('orderResponse');
    responseDiv.style.display = 'block';
    responseDiv.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translations[currentLang]['order-loading']}`;
    responseDiv.style.backgroundColor = 'rgba(26, 93, 26, 0.1)';
    responseDiv.style.color = 'var(--color-primary)';

    // Собираем данные формы
    const formData = {
        name: document.getElementById('orderName').value,
        phone: document.getElementById('orderPhone').value,
        email: document.getElementById('orderEmail').value,
        product: document.getElementById('orderProduct').value,
        quantity: document.getElementById('orderQuantity').value,
        comment: document.getElementById('orderComment').value
    };

    // Имитация отправки на сервер (заменить на реальный fetch)
    setTimeout(() => {
        // Валидация простая
        if (formData.name && formData.phone && formData.email && formData.product && formData.quantity) {
            responseDiv.style.backgroundColor = 'rgba(197, 62, 62, 0.1)';
            responseDiv.style.color = 'var(--color-accent)';
            responseDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${translations[currentLang]['order-success']}`;

            // Очистка формы через 2 секунды
            setTimeout(() => {
                document.getElementById('orderForm').reset();
                closeModal();
            }, 2000);
        } else {
            responseDiv.style.backgroundColor = 'rgba(197, 62, 62, 0.15)';
            responseDiv.style.color = 'var(--color-accent)';
            responseDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${translations[currentLang]['order-error']}`;
        }
    }, 1000);
}

// ===== ИНИЦИАЛИЗАЦИЯ МОБИЛЬНОГО МЕНЮ =====
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');

    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');

        // Меняем иконку
        const icon = this.querySelector('i');
        icon.className = nav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('#nav a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        });
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ АНИМАЦИЙ ПРИ СКРОЛЛЕ =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ КНОПОК КОПИРОВАНИЯ =====
function initCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach(button => {
        button.addEventListener('click', function() {
            const text = this.getAttribute('data-clipboard-text');

            navigator.clipboard.writeText(text).then(() => {
                // Визуальная обратная связь
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
                this.classList.add('copied');

                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Ошибка копирования:', err);
                alert('Не удалось скопировать текст');
            });
        });
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ ПЛАВНОЙ ПРОКРУТКИ =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#orderModal') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ ФОРМЫ ПОДПИСКИ =====
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;

            // Валидация email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Пожалуйста, введите корректный email');
                return;
            }

            // Имитация отправки
            alert('Спасибо за подписку!');
            this.reset();
        });
    }
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====

// Получение цены продукта
function getProductPrice(productName) {
    const product = products.find(p => p.name === productName);
    return product ? product.price : 0;
}

// Получение полной информации о продукте
function getProductInfo(productName) {
    return products.find(p => p.name === productName);
}

// Форматирование цены
function formatPrice(price, currency = '₽') {
    return `${price} ${currency}`;
}

console.log('Script.js успешно загружен и инициализирован');
