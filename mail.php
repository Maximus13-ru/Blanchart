<?php
//файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


$title = "Тема письма";

$c = true;
//Формирование самого письма
$title = 'Заголовок письма';
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";

  }
}

$body = "<table style='width: 100%;'>$body</table>";
//Настройка пхп мэйлера
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = true;

  //настройки нашей почты
  $mail->Host       = 'smtp.gmail.com'; //smtp сервера нашей почты
  $mail->Username   = 'bezpredela13@gmail.com'; //Логин почты
  $mail->Password   = 'tjtjkaqfjgdsjcup'; // Пароль на почте (ключ в настроках)
  $mail->SMTPSecure = 'ssl'; //шифрование
  $mail->Port       = 465; //порт

  $mail->setFrom('bezpredela13@gmail.com', 'Заявка с вашего сайта'); // Адрес почты и имя отправителя

  //получатели письма
  $mail->addAddress('bez_predela13@mail.ru');
  //$mail->addAddress('');

  //отправка сообщения

  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();


} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


