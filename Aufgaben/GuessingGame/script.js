if (typeof(Storage) !== "undefined") {
    var username = localStorage.getItem("username");
    if (!username) {
        username = prompt("Bitte geben Sie Ihren Namen ein:");
        localStorage.setItem("username", username);
    }
    document.querySelector('#welcomeMsg').innerHTML = `<h1>Willkommen ${username}</h1>`;
} else {
    document.write("Sorry, Ihr Browser unterstützt den Localstorage nicht.");
}