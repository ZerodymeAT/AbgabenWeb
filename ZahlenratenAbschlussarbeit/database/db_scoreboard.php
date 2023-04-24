<?php global $pdo;
require('db_config.php');

$name = $_POST['name'];
$nickname = $_POST['nickname'];
$randomNumber = $_POST['randomNumber'];
$number_of_tries = $_POST['number_of_tries'];
$left_tries = $_POST['left_tries'];
$won = $_POST['won'];

$stmt = $pdo->prepare("UPDATE db_userwithscoreboard SET randomNumber=:randomNumber, number_of_tries=:number_of_tries, left_tries=:left_tries, won=:won WHERE name=:name AND nickname=:nickname");
$stmt->execute(array(
    ':name' => $name,
    ':nickname' => $nickname,
    ':randomNumber' => $randomNumber,
    ':number_of_tries' => $number_of_tries,
    ':left_tries' => $left_tries,
    ':won' => $won
));