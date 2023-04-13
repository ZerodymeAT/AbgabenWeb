<?php


try {
    $pdo = new PDO('mysql:host=localhost:3306;dbname=basic_abschluss', 'root', '');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

$name = $_POST['name'];
$nickname = $_POST['nickname'];
$zahl = $_POST['zahl'];
$trys_tried = $_POST['trys_tried'];
$trys_had = $_POST['trys_had'];
$won = $_POST['won'];

if ($won) {
    $won = 1;
} else {
    $won = 0;
}

// SQL-Abfrage vorbereiten und ausführen
$stmt = $pdo->prepare("INSERT INTO playerandscore (name, nickname, zahl, trys_tried, trys_had, won) VALUES (:name, :nickname, :zahl, :trys_tried, :trys_had, :won)");
$stmt->execute(array(
    ':name' => $name,
    ':nickname' => $nickname,
    ':zahl' => $zahl,
    ':trys_tried' => $trys_tried,
    ':trys_had' => $trys_had,
    ':won' => $won
));

