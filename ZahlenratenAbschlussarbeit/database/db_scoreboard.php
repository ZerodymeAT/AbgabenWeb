<?php
try {
    $pdo = new PDO('mysql:host=localhost:3306;dbname=zahlenraten', 'root', '');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

$name = $_POST['name'];
$randomNumber = $_POST['randomNumber'];
$number_of_tries = $_POST['number_of_tries'];
$left_tries = $_POST['left_tries'];
$won = $_POST['won'];


$stmt = $pdo->prepare("INSERT INTO db_user (name, nickname) VALUES (:name, :nickname)");
$stmt->execute(array(
    'name' => $name,
    'nickname' => $nickname,
    'randomNumber' => $_POST['randomNumber'],

));


