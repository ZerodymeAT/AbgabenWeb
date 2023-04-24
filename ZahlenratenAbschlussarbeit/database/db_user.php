<?php
global $pdo;
require('db_config.php');
error_reporting(E_ALL);
$name = $_POST['name'];
$nickname = $_POST['nickname'];


$stmt = $pdo->prepare("INSERT INTO db_userwithscoreboard (name, nickname) VALUES (:name, :nickname)");
$stmt->execute(array(
    ':name' => $name,
    ':nickname' => $nickname
));
$newUserId = $pdo->lastInsertId();
echo $newUserId;