'use strict';
let level = 0;
let lifes = 3;
let userAns;
let int1;
let int2;
let result;
let passed = 0;

function comparisonWithUserInput() {
    userAns = Number(document.getElementById('userMatheAnswer').value);
    if (userAns === 0 && userAns !== result){
        alert("Kein Userinput eingegeben");
        return
    }

    document.getElementById('userMatheAnswer').value = "";
    if (userAns === result) {
        if (level === 9){
            alert("Spiel gewonnen!");
            newGame();
        }
        level++;
        passed++;
        levelbasedCalculation();
    } else {
        lifes--;
        stylingLifes();
    }
}
function levelbasedCalculation() {
    stylingLevel();
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
        default:

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
    switch (lifes) {
        case 2:
            document.getElementById("Life3").style.backgroundImage = 'linear-gradient(#d71414, #9d3c3c)';
            break;
        case 1:
            document.getElementById("Life2").style.backgroundImage = 'linear-gradient(#d71414, #9d3c3c)';
            break;
        case 0:
            document.getElementById("Life1").style.backgroundImage = 'linear-gradient(#d71414, #9d3c3c)';
            alert("Game Over du Noob, spiel wird neu gestartet");
            newGame();
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
        levelbasedCalculation();
    } else {
        document.getElementById('start').innerHTML = `Spiel starten`;
    }
}

function lifestart() {
    document.getElementById("Life1").style.backgroundImage = 'linear-gradient(#62d714, #3c9d41)';
    document.getElementById("Life2").style.backgroundImage = 'linear-gradient(#62d714, #3c9d41)';
    document.getElementById("Life3").style.backgroundImage = 'linear-gradient(#62d714, #3c9d41)';
}

function start() {
    if (level === 0) {
        level = 1;
        lifestart();
        letTheShowBegin();
    } else letTheShowBegin();
}