<!DOCTYPE html>
<html lang="de">

<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="../style/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hauptseite</title>
</head>
<body>

<nav>
    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="scoreboard.php">Leaderboard</a></li>
    </ul>
</nav>

<header>
    <h1>Herzlich Willkommen beim Zahlen raten</h1>
    <p><?php echo "Bitte erstellen sie einen User" ?></p>
</header>

<main>
   <!-- Name und Nickname abspeichern-->
    <article class="form4name" id="name_input">
        <form>
            <div>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name">
            </div>
            <div>
                <label for="nickname">Nickname: </label>
                <input type="text" id="nickname" name="nickname">
            </div>
            <div>
                <button class="reset" type="reset">Abbruch</button>
                <button class="submit" type="submit">Bestätigen</button>
            </div>
        </form>
    </article>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script
    src="https://code.jquery.com/jquery-3.6.4.js"
    integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
    crossorigin="anonymous"></script>
<script src="index_script.js"></script>
</body>
</html>