<?php
try {
    $pdo = new PDO('mysql:host=localhost:3306;dbname=zahlenraten', 'root', '');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

$name = $_POST['name'];
$nickname = $_POST['nickname'];


$stmt = $pdo->prepare("INSERT INTO db_user (name, nickname) VALUES (:name, :nickname)");
$stmt->execute(array(
    'name' => $name,
    'nickname' => $nickname));