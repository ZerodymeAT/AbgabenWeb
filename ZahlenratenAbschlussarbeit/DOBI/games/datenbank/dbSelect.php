<!DOCTYPE html>
<html lang="de">

<head>
    <link rel="stylesheet" href="../../style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spiele Bibliothek</title>
</head>

<body>
<header>
    <h1>Highscore Liste</h1>

</header>
<main class="flex">
    <table>
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Nickname</th>
            <th scope="col">Searched Number</th>
            <th scope="col">Tries tried</th>
            <th scope="col">Tries Had</th>
            <th scope="col">Won</th>
        </tr>
        </thead>
        <tbody>
        <?php
        try {
            $pdo = new PDO('mysql:host=localhost:3306;dbname=basic_abschluss', 'root', '');
        } catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die();
        }

        $stmt = $pdo->prepare("SELECT * FROM playerandscore");
        $stmt->execute(array());
        while ($row = $stmt->fetch()) {
            ?>
            <tr>
                <td data-label="Name"><?php echo $row['name'] ?></td>
                <td data-label="Nickname"><?php echo $row['nickname'] ?></td>
                <td data-label="Searched Number"><?php echo $row['zahl'] ?></td>
                <td data-label="Tries tried"><?php echo $row['trys_tried'] ?></td>
                <td data-label="Tries Had"><?php echo $row['trys_had'] ?></td>
                <td data-label="Won"><?php if ($row['won'] == 1) {
                        echo '<img src="won.png" alt="Gewonnen">';
                    } else {
                        echo '<img src="lost.png" alt="Verloren">';
                    }
                     ?></td>
            </tr>
        <?php } ?>
        </tbody>

    </table>
</main>
<section>
    <footer>
        <a href="../../view/index.php" title="Hier kommen Sie zurück auf die Index Seite">Nach Hause telefonieren</a>
    </footer>
</section>
</body>
</html>

