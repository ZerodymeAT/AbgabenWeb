'use strict';
let level = 0;
let lifes = 3;
let userAns;
let int1;
let int2;
let result;

function comparisonWithUserInput() {
    userAns = userAnswer();
    document.getElementById('userMatheAnswer').value = "";
    if (userAns === result) {
        level++;
        levelbasedCalculation();
    } else gameOver();
}

function userAnswer() {
    return Number(document.getElementById('userMatheAnswer').value);
}

function levelbasedCalculation() {
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
            document.getElementById("Level"+level).style.color = 'red';
            result = int1 + int2;
            console.log("Level: " + level + " Aufgabe: " + int1 + " + " + int2 + " = " + result + " Lifes: " + lifes);
            break;
        case 2:
        case 6:
            document.getElementById("start").innerHTML = textbaustein + int1 + " - " + int2;
            result = int1 - int2;
            console.log("Level: " + level + " Aufgabe: " + int1 + " - " + int2 + " = " + result +" Lifes: " + lifes);
            break;
        case 3:
        case 7:
            document.getElementById("start").innerHTML = textbaustein + int1 + " / " + int2;
            result = Math.floor(int1 / int2);
            console.log("Level: " + level + " Aufgabe: " + int1 + " / " + int2 + " = " + result +" Lifes: " + lifes);
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

    // return Math.floor(result);
}

function styling(){
    let passed;

    if (level )
    document.getElementById("Level"+level).style.color = 'red';
    document.getElementById("Level"+level).style.borderRadius = '50%';
    document.getElementById("Level"+level).image = ''

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
    if (lifes > 0){
        lifes--;
    } else {
        alert("Game Over du Noob");
        newGame();
    }
}

function start() {
    if (level === 0) {
        level = 1;
        letTheShowBegin();
    } else letTheShowBegin();
}