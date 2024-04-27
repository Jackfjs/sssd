<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email, куда вы хотите получать сообщения
    $to = 't90c13@mail.ru'; // Замените на ваш реальный email
    $subject = 'Новое сообщение с вашего сайта';
    $body = "От: $name\nE-Mail: $email\nСообщение:\n$message";
    $headers = 'From: webmaster@example.com' . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Отправка сообщения
    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение успешно отправлено.";
    } else {
        echo "Не удалось отправить сообщение.";
    }
}
?>