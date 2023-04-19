<?php
require('head.php');
include('nav.php');
?>
<main>
    <article class="userRegister" id="userRegister">
        <section>
            <form id="LoStUsRe" method="POST">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" name="nickname" required>
                </div>
                <div>
                    <input type="submit" value="Submit" onclick="createUser()">
                </div>
            </form>
        </section>
    </article>
</main>
<?php require('foot.php'); ?>
<script src="script/script.js"></script>