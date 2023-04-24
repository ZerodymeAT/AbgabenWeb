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
                <th scope="col">Nickname</th>
                <th scope="col">Zufallszahl</th>
                <th scope="col">Mögliche Optionen</th>
                <th scope="col">Versuche</th>
                <th scope="col">Gelöst</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $sql = "SELECT * FROM db_userwithscoreboard ORDER BY won DESC, minmaxrange ASC, number_of_tries ASC";
            foreach ($pdo->query($sql) as $row) {
            ?>
            <tr>
                <td data-label=""> <?= $row['id'] ?> </td>
                <td data-label="Nickname"> <?= $row['nickname'] ?></td>
                <td data-label="Zufallszahl"> <?= $row['randomNumber'] ?> </td>
                <td data-label="Mögliche Optionen"> <?= $row['minmaxrange'] ?></td>
                <td data-label="Versuche"> <?= $row['number_of_tries'] ?> </td>
                <td data-label="Gelöst">
                    <img src="img/<?php echo ($row['won'] === 1) ? 'won.png' : 'lost.png'; ?>" alt="<?php echo ($row['won'] === 1) ? 'Win' : 'Lost';  ?>">
                    <?php } ?>
                </td>

            </tr>
            </tbody>
        </table>
    </section>
</main>
<?php require('foot.php'); ?>

<!--/* 05.11 */-->
