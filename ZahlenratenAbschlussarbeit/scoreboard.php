<?php
global $pdo;
require('head.php');
require('database\db_config.php');
include('nav.php'); ?>
    <main>
        <section>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Zufallszahl</th>
                    <th scope="col">Anzahl der Versuche</th>
                    <th scope="col">Wie oft versucht</th>
                    <th scope="col">Gewonnen</th>
                    <th>#</th>
                </tr>
                </thead>
                <tbody>
                <?php
                $sql = "SELECT * FROM db_scoreboard";
                foreach ($pdo->query($sql) as $row) {
                    ?>
                    <tr>
                        <td> <?= $row['id'] ?> </td>
                        <td> <?= $row['player_id'] ?></td>
                        <td> <?= $row['randomNumber'] ?> </td>
                        <td> <?= $row['number_of_tries'] ?> </td>
                        <td> <?= $row['left_tries'] ?> </td>
                        <td> <?= $row['won'] ?> </td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
        </section>
    </main>
<?php require('foot.php'); ?>

<!--/* 05.11 */-->
