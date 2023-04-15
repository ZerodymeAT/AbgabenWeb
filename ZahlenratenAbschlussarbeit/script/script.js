"use strict"

let randomInt = -1
let tries = 10
let counter = 0
let won = false


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
        console.log("MinValue: " + min)
        console.log("MaxValue: " + max)
        console.log("Zufallszahl: " + randomInt)
    }

}

function checkNumber() {
    let userValue = parseInt(document.getElementById("userValue").value)
    console.log("Generierte Zahl: " + randomInt)
    console.log("Versuche: " + tries)
    document.getElementById("tries").innerHTML = "<strong>" + tries + "</strong>"
    if (userValue == randomInt) {
        won = true
        showElement("msgBoxAnsCorrect")
        hintMsg("correct")
    } else {
        if (tries <= 0) {
            showElement("errorBox")
            errorMsg(3)
            makeElementHidden("userInputButton")
            givenUp()
        } else if (userValue > randomInt) {
            showElement("msgBoxHint")
            tries--;
            hintMsg("toohigh")
        } else {
            showElement("msgBoxHint")
            tries--;
            hintMsg("toolow")
        }
    }
}

function givenUp() {
    showElement("msgBoxHint")
    hintMsg("givenUp")
}

function newGame() {
    window.location.reload();
}

function createUser() {

    document.getElementById("LoStUsRe").addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var nickname = document.getElementById("nickname").value;

        localStorage.setItem("name", name);
        localStorage.setItem("nickname", nickname);

        window.location.href = "game.php";
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
        document.getElementById("ansCorrectMsg").innerHTML = "<strong>Super!</strong> Du hast die Zahl erraten"
    } else if (typeOfHint === "givenUp") {
        document.getElementById("hintMsg").innerHTML = "Die Zahl war: <strong><span id='randomInt'></span></strong>"

    }
}

// Datenbank
function sendUserToDatabase() {
    let nameDB = localStorage.getItem("name")
    let nicknameDB = localStorage.getItem("nickname")

    $.ajax({
        url: "../database/db_user.php",
        type: "POST",
        data: {
            name: nameDB,
            nickname: nicknameDB,
        },
        success: function (data) {
            console.log("worked", data);
            window.location.href = "../scoreboard.php"
        },
        error: function (data) {
            console.error("error", data);
        }
    });

    }

function sendGamerToScoreboadDB(){
    let nameSB = localStorage.getItem("name")
    let nicknameSB = localStorage.getItem("nickname")
    let rndZahlSB = localStorage.getItem("randomNumber")
    let number_of_triesSB = (localStorage.getItem("number_of_tries"))
    let left_triesSB = localStorage.getItem("left_tries")
    let wonSB = localStorage.getItem("won")

    $.ajax({
        url: "../database/db_scoreboard.php",
        type: "POST",
        data: {
            name: nameSB,
            nickname: nicknameSB,
            randomNumber: rndZahlSB,
            number_of_tries: number_of_triesSB,
            left_tries: left_triesSB,
            won: wonSB

        },
        success: function (data) {
            console.log("worked", data);
            window.location.href = "../scoreboard.php"
        },
        error: function (data) {
            console.error("error", data);
        }
    });
}
