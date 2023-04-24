'use script'

// Globale Variablen
let nameInput = document.querySelector("#name");
let nicknameInput = document.querySelector("#nickname");
let nickname = localStorage.getItem("nickname");

// Funktion zur Überprüfung des Nicknamens
function checkNickname(nickname) {
    if(!nickname || nickname.trim().length === 0) {
        alert("Bitte gib einen Namen & Nicknamen ein!");
        return false;
    } else {
        localStorage.setItem("nickname", nickname);
        return true;
    }
}

// Event Listener für Formular-Einreichungen
document.querySelector("form").addEventListener("submit", function (event){
    event.preventDefault();

    // Hole den Wert des Name- und Nickname-Eingabefelds
    const name = nameInput.value;
    nickname = nicknameInput.value;

    // Namen und Spitznamen im lokalen Speicher speichern
    localStorage.setItem("name", name);

    // Überprüfen Sie den Nicknamen und fahren Sie nur fort, wenn er gültig ist
    if(checkNickname(nickname)) {
        alert(`Your nickname "${nickname}" has been saved in local storage.`);
        window.location.href = "../spiel/zahlenRaten.php";
    }
    safeUser();
});

//User abspeichern
function safeUser () {

    let nameInput = localStorage.getItem("name");
    let nicknameInput = localStorage.getItem("nickname");

    $.ajax({
        url: "DatenspeicherPlayer.php",
        type: "POST",
        data: {
            name:nameInput,
            nickname:nicknameInput
        },
        success: function (data) {
            console.log("SAFE", data);
        },
        error: function (data) {
            console.log("FAIL", data)
        }
    });
}



//Überprüfung ob ein Name & Nickname im LocalStorage ist
function userCheck () {
    if (localStorage.getItem(name) !== null) {
        window.location.href = "../spiel/zahlenRaten.php";
    }
}
