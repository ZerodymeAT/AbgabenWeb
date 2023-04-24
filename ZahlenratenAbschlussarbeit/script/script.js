"use strict"

let randomInt = -1
let tries = 10
let counter = 0
let won = 0
let minmaxrange = 0
let name
let nickname

function getMinAndMaxValuesFromUser() {
    let min = parseInt(document.getElementById("minValue").value)
    let max = parseInt(document.getElementById("maxValue").value)
    if (isNaN(min && max)) {
        showElement("errorBox")
        errorMsg(4)
    } else if (min > max) {
        showElement("errorBox")
        errorMsg(1)
    } else if (max - min < 100) {
        showElement("errorBox")
        errorMsg(2)
    } else {
        makeElementHidden("errorBox")
        makeElementHidden("rangeSelector")
        showElement("findNumber")
        randomInt = generateRandomInt(min, max)
        document.getElementById("minValuePrint").innerHTML = "<strong>" + min + "</strong>"
        document.getElementById("maxValuePrint").innerHTML = "<strong>" + max + "</strong>"
        document.getElementById("tries").innerHTML = "<strong>" + tries + "</strong>"
        minmaxrange = max - min
        console.log("MinValue: " + min)
        console.log("MaxValue: " + max)
        console.log("Range: " + minmaxrange)
    }

}

function checkNumber() {
    let userValue = parseInt(document.getElementById("userValue").value)
    if (userValue == randomInt) {
        counter++
        won = 1
        showElement("msgBoxAnsCorrect")
        makeElementHidden("msgBoxHint")
        makeElementHidden("gamepanel")
        makeElementHidden("findNumberTextblock")
        hintMsg("correct")
        sendGamerToScoreboadDB()
    } else {
        if (tries <= 0) {
            showElement("errorBox")
            errorMsg(3)
            makeElementHidden("userInputButton")
            givenUp()
        } else if (userValue > randomInt) {
            showElement("msgBoxHint")
            hintMsg("toohigh")
        } else {
            showElement("msgBoxHint")
            hintMsg("toolow")
        }
        counter++
        tries--
    }
    document.getElementById("tries").innerHTML = "<strong>" + tries + "</strong>"
    console.log("Generierte Zahl: " + randomInt)
    console.log("Offene Versuche: " + tries)
    console.log("Getätigte Versuche: " + counter)
}

function givenUp() {
    sendGamerToScoreboadDB();
    showElement("msgBoxHint")
    makeElementHidden("gamepanel")
    makeElementHidden("findNumberTextblock")
    hintMsg("givenUp")
}

function newGame() {
    localStorage.removeItem('[Zahlenraten] Name');
    localStorage.removeItem('[Zahlenraten] Nickname');
    window.location.href = "./index.php"
}

function createUser() {
    event.preventDefault();
    localStorage.removeItem('[Zahlenraten] Name');
    localStorage.removeItem('[Zahlenraten] Nickname');
    name = document.getElementById("name").value;
    nickname = document.getElementById("nickname").value;
    localStorage.setItem("[Zahlenraten] Name", name);
    localStorage.setItem("[Zahlenraten] Nickname", nickname);
    window.location.href = "./game.php"
}

// Datenbank
function sendGamerToScoreboadDB() {
    let nameSB = localStorage.getItem("[Zahlenraten] Name")
    let nicknameSB = localStorage.getItem("[Zahlenraten] Nickname")
    let rndZahlSB = randomInt
    let minmaxrangeDB = minmaxrange
    let number_of_triesSB = counter
    let left_triesSB = tries
    let wonSB = won

    $.ajax({
        url: "./database/db_scoreboard.php",
        type: "POST",
        data: {
            name: nameSB,
            nickname: nicknameSB,
            randomNumber: rndZahlSB,
            minmaxrange: minmaxrangeDB,
            number_of_tries: number_of_triesSB,
            left_tries: left_triesSB,
            won: wonSB
        },
        success: function (data) {
            console.log("worked", data);
        },
        error: function (data) {
            console.error("error", data);
        }
    });
}

function generateRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

function makeElementHidden(elementId) {
    document.getElementById(elementId).style.display = "none"
}

function showElement(elementId) {
    document.getElementById(elementId).style.display = "flex"
}

function errorMsg(typeOfError) {
    if (typeOfError === 1) {
        document.getElementById("errorMsg").innerHTML = "<strong>Fehler!</strong> Min darf nicht größer als max sein"
    } else if (typeOfError === 2) {
        document.getElementById("errorMsg").innerHTML = "<strong>Fehler!</strong> Differenz zw. min und max zu gering"
    } else if (typeOfError === 3) {
        document.getElementById("errorMsg").innerHTML = "<strong>Oh No!</strong> Du hast keine weiteren Versuche mehr!"
    } else if (typeOfError === 4) {
        document.getElementById("errorMsg").innerHTML = "<strong>Fehler!</strong> Die Werte dürfen nicht leer sein!"
    }
}

function hintMsg(typeOfHint) {
    if (typeOfHint === "toohigh") {
        document.getElementById("hintMsg").innerHTML = "Die Zahl ist zu hoch"
    } else if (typeOfHint === "toolow") {
        document.getElementById("hintMsg").innerHTML = "Die Zahl ist zu niedrig"
    } else if (typeOfHint === "correct") {
        document.getElementById("ansCorrectMsg").innerHTML = "<strong>Super!</strong> Du hast die Zahl nach " + counter + " Versuchen erraten"
    } else if (typeOfHint === "givenUp") {
        document.getElementById("hintMsg").innerHTML = "Die Zahl war: <strong>" + randomInt + " </strong>"
    }
}
