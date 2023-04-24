<!DOCTYPE html>
<html lang="de">
<head>
    <link rel="stylesheet" href="../style/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard</title>
</head>
<body>
<nav>
    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="../spiel/zahlenRaten.php">Neues Spiel</a></li>
    </ul>
</nav>

<header>
    <h1>Leaderboard</h1>
</header>

<main>
    <div>
        <table>
            <thead>
            <tr>
                <th scope="col">Icon</th>
                <th scope="col">Name</th>
                <th scope="col">Nickname</th>
                <th scope="col">Gesuchte Nummer</th>
                <th scope="col">Versuchte Versuche</th>
                <th scope="col">Übrige Versuche</th>
                <th scope="col">Sieg</th>
            </tr>
            </thead>
            <tbody>
            <?php
            try {
                $pdo = new PDO('mysql:host=localhost:3306;dbname=guessing_game', 'root', '');
            } catch (PDOException $e) {
                print "Error!: " . $e->getMessage() . "<br/>";
                die();
            }

            $stmt = $pdo->prepare("SELECT * FROM game");
            $stmt->execute(array());
            while ($row = $stmt->fetch()) {
                $player_id = $row['player_id'];
                $player_stmt = $pdo->prepare("SELECT * FROM player WHERE id = ?");
                $player_stmt->execute([$player_id]);
                $player_row = $player_stmt->fetch();
                ?>
                <tr>
                    <td data-label="Icon">
                        <?php if ($row['won'] === 1): ?>
                            <img src="../style/trophae.png" alt="Siege Icon">
                        <?php else: ?>
                            <img src="../style/tot.png" alt="Niederlage Icon">
                        <?php endif; ?>
                    </td>
                    <td data-label="Name"><?php echo $player_row['name'] ?></td>
                    <td data-label="Nickname"><?php echo $player_row['nickname'] ?></td>
                    <td data-label="Gesuchte Nummer"><?php echo $row['randomNumber'] ?></td>
                    <td data-label="Versuchte Versuche"><?php echo $row['tried_tries'] ?></td>
                    <td data-label="Übrige Versuche"><?php echo $row['left_tries'] ?></td>
                    <td data-label="Sieg"><?php echo $row['won'] ?></td>
                </tr>
            <?php } ?>
            </tbody>
        </table>
    </div>
</main>
</body>
</html>
