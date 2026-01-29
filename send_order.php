<?php
header('Content-Type: application/json; charset=utf-8');

// Настройки почты
$to = 'ego7ananiev@gmail.com'; // Почта главного бухгалтера
$subject = 'Новый заказ на сайте СПК "Восход"';

// Получение данных из формы
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$email = htmlspecialchars($_POST['email']);
$product = htmlspecialchars($_POST['product']);
$quantity = htmlspecialchars($_POST['quantity']);
$comment = htmlspecialchars($_POST['comment']);

// Формирование сообщения
$message = "
<h2>Новый заказ на сайте СПК \"Восход\"</h2>
<hr>
<p><strong>Дата заказа:</strong> " . date('d.m.Y H:i') . "</p>
<hr>
<p><strong>Продукт:</strong> $product</p>
<p><strong>Количество:</strong> $quantity кг</p>
<hr>
<p><strong>Имя клиента:</strong> $name</p>
<p><strong>Телефон:</strong> $phone</p>
<p><strong>Email:</strong> $email</p>
<hr>
<p><strong>Комментарий:</strong><br>$comment</p>
";

// Заголовки письма
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: Сайт СПК \"Восход\" <noreply@voshodspk.ru>\r\n";
$headers .= "Reply-To: $email\r\n";

// Отправка письма
if (mail($to, $subject, $message, $headers)) {
    echo json_encode([
        'success' => true,
        'message' => 'Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка при отправке заказа. Пожалуйста, попробуйте позже.'
    ]);
}
?>