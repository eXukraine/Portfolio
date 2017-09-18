<?php 
// если была нажата кнопка "Отправить" 
if($_POST['submit']) {
        $title = substr(htmlspecialchars(trim($_POST['email'])), 0, 1000); 
        $name = substr(htmlspecialchars(trim($_POST['txt'])), 0, 1000);
        $mess =  substr(htmlspecialchars(trim($_POST['modal_txt'])), 0, 1000000); 
        // $to - кому отправляем 
        $to = 'yamkovoi.a@gmail.com'; 
        // $from - от кого 
        $from='test@test.ru'; 
        // функция, которая отправляет наше письмо
        mail($to, $title, $mess,$name, 'From:'.$from); 
        //echo 'Your message has been send.'; 
    	header('Refresh: 1; URL='.$_SERVER['HTTP_REFERER']);

    	if ($_SERVER=post){
    		echo "POST method";
    	}
    	else {
    		echo "GET method";
    	}
} 
?>

