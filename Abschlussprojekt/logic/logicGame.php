<?php
include_once('../inc/login.inc.php');

global $difficulty;
$userAns= 0;
$tries = 0;
$rndNumByDiff = 0;

function game(){
    levelBasedOnDifficulty();
    getRandomIntByRange();

    while ($tries > 0) {
        if (!is_int($userAns) || $userAns <= 0) {
            echo "Fehlerhafte Benutzereingabe";
            return;
        } else if ($userAns === $rndNumByDiff) {
            echo "Zahl erraten";
            newGame();
            return;
        } else if ($userAns < $rndNumByDiff) {
            $tries--;
            echo "Zu niedrig Mögliche Versuche: " . $tries;
        } else if ($userAns > $rndNumByDiff) {
            $tries--;
            echo "Zu hoch! Mögliche Versuche: " . $tries;
        }

        $userAns = (int)$_POST['userAnswer'];
    }

    newGame();
}

function getRandomIntByRange() {
    if ($difficulty === 1){
        $rndNumByDiff = (rand(1,50));
        echo "Die richtige Zahl ist: " . $rndNumByDiff;
    } else if ( $difficulty === 2) {
        $rndNumByDiff = rand(1,100);
        echo "Die richtige Zahl ist: " . $rndNumByDiff;
    } else if ($difficulty === 3) {
        $rndNumByDiff = rand(1,100);
        echo "Die richtige Zahl ist: " . $rndNumByDiff;
    }

}

function levelBasedOnDifficulty(){
    switch ($difficulty){
        case 1:
            echo "Schwierigkeitsgrad: Leicht";
            $tries = 15;
            break;
        case 2:
            echo "Schwierigkeitsgrad: Mittel";
            $tries = 10;
            break;
        case 3:
            echo "Schwierigkeitsgrad: Schwer";
            $tries = 7;
            break;
        default:
    }
}

function newGame(){
    if (confirm('Soll ein neues Spiel gestartet werden?')){
        game();
    } else {
        header('Location: scoreboard.php');
    }
}
?>


