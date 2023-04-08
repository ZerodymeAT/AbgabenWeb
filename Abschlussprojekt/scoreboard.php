
<?php
require_once('controller/Controller.php');
require('./inc/nav.php');
?>
<main class="container py-4 mt-5">
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">dabei seit</th>
                <th>#</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $sql = "SELECT * FROM db_user";
            foreach ($pdo->query($sql) as $row) {
                ?>
                <tr>
                    <td> <?= $row['id'] ?> </td>
                    <td> <?= $row['username'] ?></td>
                    <td> <?= $row['created_at'] ?> </td>
                    <td>
                        <a href="detail.php?id=<?= $row['id'] ?>" class="btn btn-dark">edit</a>
                        <a class="btn btn-danger" href="logic/logicDelete.php?id=<?= $row['id'] ?>">delete</a>
                    </td>
                </tr>
            <?php } ?>
            </tbody>
        </table>
    </div>
</main>

<?php
include_once ('./inc/script.inc.php');
?>
</body>
</html>
