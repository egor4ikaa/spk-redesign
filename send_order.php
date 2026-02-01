<?php
header('Content-Type: application/json; charset=utf-8');

// Проверка метода запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешён']);
    exit;
}

// Получаем данные
$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$product = trim($_POST['product'] ?? '');
$quantity = trim($_POST['quantity'] ?? '');
$comment = trim($_POST['comment'] ?? '');

// --- Защита от спама ---
// Проверка на наличие "ботских" полей (например, hidden_field)
if (!empty($_POST['website']) || !empty($_POST['url'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Спам-фильтр: недопустимое поле']);
    exit;
}

// --- Валидация данных ---
$errors = [];

// 1. Проверка имени
if (empty($name)) {
    $errors[] = 'Имя обязательно';
} elseif (mb_strlen($name) < 2 || mb_strlen($name) > 50) {
    $errors[] = 'Имя должно быть от 2 до 50 символов';
} elseif (!preg_match('/^[а-яёa-z\s\-]+$/iu', $name)) {
    $errors[] = 'Имя содержит недопустимые символы';
}

// 2. Проверка телефона
if (empty($phone)) {
    $errors[] = 'Телефон обязателен';
} elseif (!preg_match('/^[\+]?[0-9\(\)\-\s]{10,20}$/', $phone)) {
    $errors[] = 'Телефон указан некорректно';
}

// 3. Проверка email
if (empty($email)) {
    $errors[] = 'Email обязателен';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email указан некорректно';
}

// 4. Проверка продукта
if (empty($product)) {
    $errors[] = 'Продукт обязателен';
} elseif (mb_strlen($product) > 100) {
    $errors[] = 'Название продукта слишком длинное';
}

// 5. Проверка количества
if (empty($quantity)) {
    $errors[] = 'Количество обязательно';
} else {
    $quantity = preg_replace('/[^\d.,]/', '', $quantity); // Убираем всё, кроме цифр, точек, запятых
    if (!is_numeric($quantity) || $quantity <= 0) {
        $errors[] = 'Количество должно быть положительным числом';
    }
}

// 6. Комментарий (необязательно, но можно ограничить)
if (mb_strlen($comment) > 500) {
    $errors[] = 'Комментарий слишком длинный (макс. 500 символов)';
}

// Если есть ошибки — отправляем их
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode('; ', $errors)]);
    exit;
}

// --- Санитизация данных ---
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$product = htmlspecialchars($product, ENT_QUOTES, 'UTF-8');
$quantity = (float)$quantity;
$comment = htmlspecialchars($comment, ENT_QUOTES, 'UTF-8');

// --- Формирование сообщения ---
$message = "
<h2>Новый заказ на сайте СПК \"Восход\"</h2>
<hr>
<p><strong>Дата заказа:</strong> " . date('d.m.Y H:i') . "</p>
<hr>
<p><strong>Продукт:</strong> $product</p>
<p><strong>Количество:</strong> $quantity кг/л</p>
<hr>
<p><strong>Имя клиента:</strong> $name</p>
<p><strong>Телефон:</strong> $phone</p>
<p><strong>Email:</strong> $email</p>
<hr>
<p><strong>Комментарий:</strong><br>" . nl2br($comment) . "</p>
";

// --- Отправка письма ---
$to = 'egor7ananiev@gmail.com';
$subject = 'Новый заказ на сайте СПК "Восход"';

// Убедитесь, что From использует реальный email с вашего домена
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $email\r\n"; // Замените на реальный email!
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode([
        'success' => true,
        'message' => 'Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.'
    ]);
} else {
    error_log("Ошибка отправки письма от $email");
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка при отправке письма. Пожалуйста, попробуйте позже.'
    ]);
}
?>