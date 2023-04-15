'use strict'

let randomInt = -1
let trys = 11
let trys_had = 0
let won = false

/*
Hier wird der LocalStorage überprüft, ob bereits ein Spieler Name existiert
*/
if (localStorage.getItem("nickname") == null) {
    setElementdisplayFlex("name_input")

    setElementdisplayNone("number_input")

} else {
    setElementdisplayNone("name_input")
    setElementdisplayFlex("number_input")

}


/*
 Hier wird der player_name und der nickname in den localStorage gespeichert
*/
document.querySelector('form').addEventListener("submit", function () {
    localStorage.setItem("player_name", document.querySelector('#player_name').value);
    localStorage.setItem("nickname", document.querySelector('#nickname').value);
    setElementdisplayNone("name_input")
    setElementdisplayFlex("number_input")
})


/*
Hier sind alle Funktionen aufgelistet
*/


function getMinAndMaxNumber() {
    let number_min = parseInt(document.getElementById('number_min').value)
    let number_max = parseInt(document.getElementById('number_max').value)
    if (!isNaN((number_min && number_max)) && (number_min && number_max) != null) {
        checkMinAndMaxNumberFromUserInput(number_max, number_min);
    } else {
        alert("Gib einen gültigen Wert ein!")
    }

}

function checkMinAndMaxNumberFromUserInput(max, min) {

    if ((max - min) < 1000) {
        alert('Zahlen müssen mindestens um 1.000 auseinander liegen!');
    } else {
        if ((max - min) > 9999) {
            trys += 3
        }
        trys_had = trys
        setElementdisplayNone("number_input");
        setElementdisplayFlex("quest_input")
        randomInt = createRandomInt(max, min)
        document.getElementById('minNumber').innerHTML = 'Min: ' + min
        document.getElementById('maxNumber').innerHTML = 'Max: ' + max
        document.getElementById('trys').innerHTML = ' ' + trys
    }
}

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('user_answer').value)
    if (userAnswer == null || isNaN(userAnswer)) {
        alert("Gib eine Zahl ein!")
    } else {
        if (userAnswer == randomInt) {
            /*
            Abspeichern der Variablen und des Local Storage in der Datenbank und Won!
            */
            showAnswer();
            won = true;
            alert("Das war die richtige Antwort");
            localStorageAbspeicherung();
        } else {
            trys--;
            if (trys <= 0) {
                /*
                Abspeichern der Variablen und des Local Storage in die Datenbank und Lost
                Buttons entfernen
                */
                showAnswer()
                localStorageAbspeicherung();

            }
            if (userAnswer > randomInt) {
                alert("Deine Zahl ist zu groß!");
            } else {
                alert("Deine Zahl ist zu klein!")
            }
            document.getElementById('trys').innerHTML = ' ' + trys;
        }
    }
}

function showAnswer() {
    setElementdisplayFlex("searched_number_div")
    document.getElementById('searched_number').innerHTML = randomInt
    setElementdisplayFlex("reload_button")
    setElementdisplayNone("user_answer_button")
    setElementdisplayNone("answer")
    localStorageAbspeicherung();

}


/*
Kürzere Schreibweisen von Funktionen
 */
function anDatenbankSchicken() {
    let name1 = localStorage.getItem("player_name")
    let nickname1 = localStorage.getItem("nickname")
    let zahl1 = localStorage.getItem("zahl")
    let trys_tried1 = (localStorage.getItem("trys_tried"))
    let trys_had1 = localStorage.getItem("trys_had")
    let won1 = localStorage.getItem("won")

    $.ajax({
        url: "../datenbank/dbSave.php",
        type: "POST",
        data: {
            name: name1,
            nickname: nickname1,
            zahl: zahl1,
            trys_tried: trys_tried1,
            trys_had: trys_had1,
            won: won1
        },
        success: function (data) {
            console.log("worked", data);
            window.location.href = "../../view/index.php"
        },
        error: function (data) {
            console.error("error", data);
        }
    });
    localStorage.removeItem("zahl", randomInt);
    localStorage.removeItem("trys_tried", (trys_had - trys));
    localStorage.removeItem("trys_had", trys_had);
    localStorage.removeItem("won", won);
}

function localStorageAbspeicherung() {
    localStorage.setItem("zahl", randomInt);
    localStorage.setItem("trys_tried", (trys_had - trys));
    localStorage.setItem("trys_had", trys_had);
    localStorage.setItem("won", won);

}

function setElementdisplayNone(elementId) {
    document.getElementById(elementId).style.display = "none"

}

function setElementdisplayFlex(elementId) {
    document.getElementById(elementId).style.display = "flex"
}

function createRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}