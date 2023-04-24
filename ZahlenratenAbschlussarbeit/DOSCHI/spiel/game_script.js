'use strict'

let randomNumber = 0;
let tries = 10;
let won = 0;
let tried_tries = 0;

localStorage.setItem("tried_tries", tried_tries);
localStorage.setItem("tries", tries);
document.getElementById("tries-value").textContent = tries;

const versucheAnzeigen = document.getElementById("showTries");
const highOrLow = document.getElementById("highOrLowIndicator");
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
highOrLow.classList.add("hide");
versucheAnzeigen.classList.add("hide");


startBtn.addEventListener("click", () => {

    // Falls nicht 10 Versuche im LocalStorage sind
    if (!tries) {
        tries = 10;
        localStorage.setItem("tries", tries);
    } else {
        tries = parseInt(tries);
    }

    let minNumb = parseInt(document.getElementById("minNumb").value);
    let maxNumb = parseInt(document.getElementById("maxNumb").value);

    randomNumber = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;

    if (isNaN(minNumb) && isNaN(maxNumb)) {
        alert("Bitte einen gültigen Wert eingeben");
    } else {
        localStorage.setItem("randomNumber", randomNumber);
    }

    if (!isNaN(randomNumber)) {
        startBtn.classList.add("hide");
    }
    versucheAnzeigen.classList.remove("hide");
    return randomNumber;
});

//Das Spiel selber
submitBtn.addEventListener("click", () => {
    let userInput = parseInt(document.getElementById("user-input").value);

    if (!isNaN(userInput)) {
        if (userInput === randomNumber) {
            tried_tries = 10 - tries;
            won = 1;
            localStorage.setItem("won", won);
            alert("Herzlichen Glückwunsch Sie haben gewonnen!");
            safeGameData();
        } else if (userInput < randomNumber) {
            tried_tries++;
            tries--;
            highOrLow.classList.remove("hide");
            highOrLow.innerHTML = "Deine Zahl ist zu klein!";
        } else {
            tried_tries++;
            tries--;
            highOrLow.classList.remove("hide");
            highOrLow.innerHTML = "Deine Zahl ist zu groß!";
        }

        // Update the tries counter in localStorage
        localStorage.setItem("tries", tries);
        localStorage.setItem("tried_tries", tried_tries);

        // Update the tries counter on the page
        document.getElementById("tries-value").innerHTML = tries.toString();

        // Check if the user has lost
        if (tries === 0 && !won) {
            alert("Du hast verloren! Die gesuchte Zahl war " + randomNumber);
            safeGameData();
        }
    } else {
        alert("Bitte rate eine Zahl")
    }
});

//Löschen des LocalStorage
window.onbeforeunload = function () {
    localStorage.removeItem('randomNumber');
    localStorage.removeItem('tried_tries');
    localStorage.removeItem('won');
};

//Gamestats abspeichern
function safeGameData() {
    let randomNumber = localStorage.getItem("randomNumber");
    let tries = localStorage.getItem("tries");
    let tried_tries = localStorage.getItem("tried_tries");
    let won = localStorage.getItem("won");
    let nameInput = localStorage.getItem("name");
    let nicknameInput = localStorage.getItem("nickname");

    $.ajax({
        url: "DatenspeicherGame.php",
        type: "POST",
        data: {
            name: nameInput,
            nickname: nicknameInput,
            randomNumber: randomNumber,
            tried_tries: tried_tries,
            left_tries: tries,
            won: won
        },
        success: function (data) {
            console.log("SAFE");
            window.location.reload();
        },
        error: function(data) {
            console.log(data);

        }
    });
}



