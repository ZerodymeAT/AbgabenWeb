<!DOCTYPE html>
<html lang="de">

<head>
    <link rel="stylesheet" href="../../style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zahlen Raten</title>
</head>

<body>

<header>
    <h1>Zahlen Raten</h1>
    <h2>Beschreibung:</h2>
    <p>Hier kannst du mit deinen selbst definierten Min Zahl und Max Zahl, mindestens jedoch 1.000 Unterschied,
        deine Zal erraten mit 11 Versuchen,
        bei einem größeren Unterschied als 10.000 erhaltest du noch 3 Versuche dazu</p>
</header>

<main>
    <!-- Eingabe der Namen -->
    <article class="center" id="name_input">
        <form class="border-1 half" >
            <div class="form-column">
                <label for="player_name">Name: </label>
                <input type="text" id="player_name" name="player_name">
            </div>
            <div class="form-column">
                <label for="nickname">Nickname: </label>
                <input type="text" id="nickname" name="nickname" required>
            </div>
            <div class="right">
                <button class="reset" type="reset">Reset</button>
                <button class="submit" type="submit">Submit</button>
            </div>
        </form>
    </article>

    <!-- Eingabe der Zahlen Min und Max -->
    <article class="center" id="number_input" style="display: none">
        <section class="border-1 half">
            <div class="form-column">
                <label for="number_min">Min-Wert:</label>
                <input type="number" id="number_min" name="number_min">
            </div>
            <div class="form-column">
                <label for="number_max">Max-Wert:</label>
                <input type="number" id="number_max" name="number_max">
            </div>
            <div class="right">
                <button class="submit" type="button" onclick="getMinAndMaxNumber()">Enter</button>
            </div>
        </section>
    </article>

    <!-- Eingabe der zu erratenen Zahl -->
    <article class="center" id="quest_input" style="display: none">
        <section class="border-1 half">
            <div class="form-column">
                <p>Die gesuchte Zahl liegt zwischen diesen zwei werten: </p>
                <p id="minNumber"></p>
                <p id="maxNumber"></p>
            </div>
            <div class="form-column">
                <p>Versuche offen: </p>
                <p id="trys"></p>
            </div>
            <div class="form-column" style="display: none" id="searched_number_div">
                <p>Gesuchte Zahl: </p>
                <p id="searched_number"></p>
            </div>
            <div class="form-column">
                <label for="user_answer">Deine Zahl</label>
                <input type="number" id="user_answer" name="user_answer">
            </div>
            <div class="right">
                <button class="submit" type="button" onclick="showAnswer()" id="answer">
                    Aufgeben und Zahl anzeigen</button>
                <button class="submit" type="button" onclick="checkAnswer()" id="user_answer_button">
                    Zahl überprüfen</button>
                <button onclick="anDatenbankSchicken()" id="reload_button" class="reset" style="display: none">
                    Neues Spiel</button>
            </div>
        </section>
    </article>
</main>
<script
    src="https://code.jquery.com/jquery-3.6.4.js"
    integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
    crossorigin="anonymous"></script>
<script src="script.js"></script>

</body>
</html>

