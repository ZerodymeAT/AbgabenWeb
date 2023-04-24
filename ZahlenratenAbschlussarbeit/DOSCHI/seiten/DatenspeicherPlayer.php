<?php

try {
    $pdo = new PDO('mysql:host=localhost:3306;dbname=guessing_game', 'root', '');
} catch (PDOException $exception) {
    print "Error: " . $exception->getMessage() . "<br/>";
    die();
}

// Spieler Tabelle
$name = $_POST['name'];
$nickname = $_POST['nickname'];



try {
    // Abfrage, ob Spieler bereits vorhanden ist
    $playerStmt = $pdo->prepare("SELECT id FROM player WHERE name = :name AND nickname = :nickname");
    $playerStmt->execute(array(
        ':name' => $name,
        ':nickname' => $nickname,
    ));
    $player = $playerStmt->fetch();
} catch(PDOException $err) {
    echo "PDO 1 fel";
}

// Wenn Spieler noch nicht vorhanden ist, lege ihn an
if (!$player) {
    try {
    $insertPlayerStmt = $pdo->prepare("INSERT INTO player (name, nickname) VALUES (:name, :nickname)");
    $insertPlayerStmt->execute(array(
        ':name' => $name,
        ':nickname' => $nickname
    ));
    $playerId = $pdo->lastInsertId();
    } catch(PDOException $err) {
        echo "PDO 2 fel";
    }
} else {
    $playerId = $player['id'];
}