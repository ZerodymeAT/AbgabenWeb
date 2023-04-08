'use strict';
let difficulty;
let userAns;
let tries;
let rndNumByDiff;

function game(){
    levelBasedOnDifficulty();
    getRandomIntByRange();

    while (tries > 0) {
        if (!Number.isInteger(userAns) || userAns <= 0) {
            alert("Fehlerhafte Benutzereingabe");
            return;
        } else if (userAns === rndNumByDiff) {
            alert("Zahl erraten");
            newGame();
            return;
        } else if (userAns < rndNumByDiff) {
            tries--;
            console.log("Zu niedrig Mögliche Versuche: " + tries);
        } else if (userAns > rndNumByDiff) {
            tries--;
            console.log("Zu hoch! Mögliche Versuche: " + tries);
        }

        userAns = Number(document.getElementById('userAnswer').value);
    }

    newGame();
}

function getRandomIntByRange() {
    if (difficulty === 1){
        rndNumByDiff = (Math.floor(Math.random() * 50) + 1);
        console.log("Die richtige Zahl ist: " + rndNumByDiff);
    } else if ( difficulty === 2) {
        rndNumByDiff = Math.floor(Math.random() * 100) + 1;
        console.log("Die richtige Zahl ist: " + rndNumByDiff);
    } else if (difficulty === 3) {
        rndNumByDiff = Math.floor(Math.random() * 100) + 1;
        console.log("Die richtige Zahl ist: " + rndNumByDiff);
    }

}

function levelBasedOnDifficulty(){
    switch (difficulty){
        case 1:
            console.log("Schwierigkeitsgrad: Leicht");
            tries = 15;
            break;
        case 2:
            console.log("Schwierigkeitsgrad: Mittel");
            tries = 10;
            break;
        case 3:
            console.log("Schwierigkeitsgrad: Schwer");
            tries = 7;
            break;
        default:
    }
}

function newGame(){
    if (confirm('Soll ein neues Spiel gestartet werden?')){
        game();
    } else {
        location.href = 'scoreboard.php';
    }
}