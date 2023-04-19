<?php global $pdo;
require('db_config.php');

$name = $_POST['name'];
$nickname = $_POST['nickname'];

$stmt = $pdo->prepare("INSERT INTO db_user (name, nickname) VALUES (:name, :nickname)");
$stmt->execute(array(
    ':name' => $name,
    ':nickname' => $nickname));
