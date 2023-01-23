'use strict';
let level = 0;
let lifes = 4;
const maxLifes = lifes;
let userAns;
let int1;
let int2;
let result;
let passed = 0;

function comparisonWithUserInput() {
    userAns = userAnswer();
    document.getElementById('userMatheAnswer').value = "";
    if (userAns === result) {
        level++;
        passed++;
        levelbasedCalculation();
    } else gameOver();
}

function userAnswer() {
    return Number(document.getElementById('userMatheAnswer').value);
}

function levelbasedCalculation() {
    stylingLevel();
    stylingLifes();
    int1 = getRandomInt();
    int2 = getRandomInt();
    if (int2 > int1) {
        let tempint = int1;
        int1 = int2;
        int2 = tempint;
    }
    let textbaustein = "Aufgabe (" + level + "): ";
    switch (level) {
        case 1:
        case 5:
            document.getElementById("start").innerHTML = textbaustein + int1 + " + " + int2;
            // document.getElementById("Level"+level).style.color = 'red';
            result = int1 + int2;
            console.log("Level: " + level + " Aufgabe: " + int1 + " + " + int2 + " = " + result + " Lifes: " + lifes);
            break;
        case 2:
        case 6:
            document.getElementById("start").innerHTML = textbaustein + int1 + " - " + int2;
            result = int1 - int2;
            console.log("Level: " + level + " Aufgabe: " + int1 + " - " + int2 + " = " + result + " Lifes: " + lifes);
            break;
        case 3:
        case 7:
            document.getElementById("start").innerHTML = textbaustein + int1 + " / " + int2;
            result = Math.floor(int1 / int2);
            console.log("Level: " + level + " Aufgabe: " + int1 + " / " + int2 + " = " + result + " Lifes: " + lifes);
            break;
        case 4:
        case 8:
            document.getElementById("start").innerHTML = textbaustein + int1 + " * " + int2;
            result = int1 * int2;
            console.log("Level: " + level + " Aufgabe: " + int1 + " * " + int2 + " = " + result + "Lifes: " + lifes);
            break
        case 9:
            document.getElementById("start").innerHTML = textbaustein + int1 + " * " + int2 + " + " + (int2 * 3);
            result = int1 * int2 + (int2 * 3);
            console.log("Level: " + level + " Aufgabe: " + int1 + " * " + int2 + " + " + (int2 * 3) + " = " + result + " Lifes: " + lifes);
            break;
    }
}

function stylingLevel() {
    if (passed > 0) {
        document.getElementById("Level" + passed).style.backgroundImage = 'linear-gradient(#96f796, #96e796)';
        document.getElementById("Level" + level).style.backgroundImage = 'linear-gradient(#f79696, #e79696)';

    } else {
        document.getElementById("Level" + level).style.backgroundImage = 'linear-gradient(#f79696, #e79696)';
    }

}

function stylingLifes() {
    for (let i = maxLifes; i > lifes; i--) {
        document.getElementById("Life" + i).style.backgroundImage = 'linear-gradient(#62d714, #3c9d41)';
    }
}

function getRandomInt() {
    if (level <= 3) {
        return Math.floor(Math.random() * 20) + 2;
    } else if (level > 3 && level <= 6) {
        return Math.floor(Math.random() * 50) + 5;
    } else if (level > 6) {
        return Math.floor(Math.random() * 100) + 10;
    }
}

function newGame() {
    window.location.reload();
}

function letTheShowBegin() {
    if (level > 0) {
        comparisonWithUserInput();
        levelbasedCalculation();
    } else {
        document.getElementById('start').innerHTML = `Spiel starten`;
    }
}

function gameOver() {
    if (lifes >= 1) {
        lifes--;
    } else {
        alert("Game Over du Noob, spiel wird neu gestartet");
        newGame();
    }
}

function start() {
    if (level === 0) {
        level = 1;
        letTheShowBegin();
    } else letTheShowBegin();
}