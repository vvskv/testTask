<?php
$name = '';
$tel = '';
if(isset($_POST["name"])){ 
      $name = $_POST["name"];
  }
  if(isset($_POST["tel"])){
  
      $tel = $_POST["tel"];
  }
  if (
      mail("mail1@yandex.ru", "Заявка с сайта", "Имя: ".$name.". Телефон: ".$tel) && 
      mail("mail2@yandex.ru", "Заявка с сайта", "Имя: ".$name.". Телефон: ".$tel)
      ) {

  };