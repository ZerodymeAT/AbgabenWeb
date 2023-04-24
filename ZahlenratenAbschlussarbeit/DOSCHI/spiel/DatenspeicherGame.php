<?php
try {
    $pdo = new PDO('mysql:host=localhost:3306;dbname=guessing_game', 'root', '');
} catch (PDOException $exception) {
    print "Error: " . $exception->getMessage() . "<br/>";
    die();
}

$name = $_POST['name'];
$nickname = $_POST['nickname'];
$randomNumber = intval($_POST['randomNumber']);
$tried_tries = intval($_POST['tried_tries']);
$left_tries = intval($_POST['left_tries']);
$won = intval($_POST['won']);
try {
    $playerStmt = $pdo->prepare("SELECT id FROM player WHERE name = :name AND nickname = :nickname");

    $playerStmt->bindParam(':name', $name);
    $playerStmt->bindParam(':nickname', $nickname);

    $playerStmt->execute();

    $player = $playerStmt->fetch();
} catch(PDOException $err) {
    echo "PDO 2 fel";
}

if ($player) {
    $playerId = $player['id'];
} else {
    $playerId = null;
}
//var_dump($playerId);
//print $playerId;

if (is_string($playerId)) {
    $playerId = (int) $playerId;
}

if($playerId) {
    try{
        $stmt2 = $pdo->prepare("INSERT INTO GAME (player_id, randomNumber, tried_tries, left_tries, won) VALUES (:playerId, :randomNumber, :tried_tries, :left_tries, :won)");
        $stmt2->execute(array
        (':playerId' => $playerId,
            ':randomNumber' => $randomNumber,
            ':tried_tries' => $tried_tries,
            ':left_tries' => $left_tries,
            ':won' => $won
        ));
    } catch(PDOException $err) {
        echo "PDO 2 fel";
    }
}