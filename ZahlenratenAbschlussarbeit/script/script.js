"use strict"










/* Name & Nickname in den localstorage schreiben */
document.getElementById("LoStUsRe").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values of the name and nickname fields
    var name = document.getElementById("name").value;
    var nickname = document.getElementById("nickname").value;

    // Store the values in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("nickname", nickname);
});







