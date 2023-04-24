<!DOCTYPE html>
<html lang="de">

<head>
    <link rel="stylesheet" href="../style/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spielseite</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<nav>
    <ul>
        <li><a href="../seiten/index.php">Home</a></li>
        <li><a href="../seiten/scoreboard.php">Leaderboard</a></li>
        <li><a href="zahlenRaten.php">Neues Spiel</a></li>
    </ul>
</nav>

<header>
<h1>Zahlen Raten</h1>
<h3>Gesucht wird eine Zahl die zufällig aus deinen Angaben generiert wird.</h3>
</header>

<section>
    <div class="setRange">
        <label for="minNumb">min</label>
        <input id="minNumb" type="number">
        <label for="maxNumb">max</label>
        <input id="maxNumb" type="number">
    </div>
</section>

<section>
    <div class="container">
        <button id="start-btn">Spiel Starten</button>
        <label for="user-input"></label>
        <input id="user-input" type="number">
        <button id="submit-btn">Submit</button>
        <p id="showTries">Du hast noch <span id="tries-value"></span> Versuche</p>
        <p id="highOrLowIndicator">High or Low?</p>
    </div>
</section

<script
    src="https://code.jquery.com/jquery-3.6.4.js"
    integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
    crossorigin="anonymous"></script>
<script src="game_script.js"></script>
</body>
</html>

