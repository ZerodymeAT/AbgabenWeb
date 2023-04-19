<?php require('head.php'); ?>
<?php include('nav.php'); ?>
    <main>
        <section>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Zufallszahl</th>
                    <th scope="col">Anzahl der Versuche</th>
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
                    </tr>
                <?php } ?>
                </tbody>
            </table>
        </section>
    </main>
<?php require('foot.php'); ?>

<!--/* 05.11 */-->
