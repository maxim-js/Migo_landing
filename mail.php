<?php

$to='support@migo-mobile.ru';


if (isset($_POST['user_name'])) {$name = $_POST['user_name'];}
if (isset($_POST['user_email'])) {$email = $_POST['user_email'];}
if (isset($_POST['user_phone'])) {$phone = $_POST['user_phone'];}
if (isset($_POST['user_text'])) {$mess = $_POST['user_text'];}

$theme = 'Заявка с сайта migo-mobile.ru';

if (isset($_POST['form_sbmt'])) {

    $hdr="From: migo-mobile.ru\nMIME-Version: 1.0\nContent-Type:text/plain;charset=\"utf-8\"";


    $message = "Имя: $name \nЭлектронный адрес: $email\nТелефон: $phone \nСообщение: $mess";

    $subject = "$theme";

    if (mail($to, "=?utf-8?B?".base64_encode($subject)."?=", $message, $hdr)) {
        print_r('<h3>Спасибо за заявку!</h3><p>Мы с Вами свяжемся в ближайшее время!</p>');
    }
    else {
        print_r('<h3>Ваше сообщение не отправлено.</h3><p>Попробуйте отправить данные еще раз.</p>');
    }
}

?>