<?php global $pdo;
require('db_config.php');

$player_id = $_POST['player_id'];
$randomNumber = $_POST['randomNumber'];
$number_of_tries = $_POST['number_of_tries'];
$left_tries = $_POST['left_tries'];
$won = $_POST['won'];

$stmt = $pdo->prepare("INSERT INTO db_scoreboard (player_id, randomNumber, number_of_tries, left_tries, won) VALUES (:player_id, :randomNumber, :number_of_tries, :left_tries, :won)");
$stmt->execute(array(
    ':player_id' => $_POST['$player_id'],
    ':randomNumber' => $_POST['randomNumber'],
    ':number_of_tries' => $_POST['number_of_tries'],
    ':left_tries' => $_POST['left_tries'],
    ':won' => $_POST['won']
));