<?php require('head.php'); ?>
<?php include('nav.php'); ?>
    <main>
        <section>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Score vom:</th>
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
                        <td> <?= $row['username'] ?></td>
                        <td> <?= $row['created_at'] ?> </td>
                    </tr>
                <?php } ?>
                </tbody>
            </table>
        </section>
    </main>
<?php require('foot.php'); ?>