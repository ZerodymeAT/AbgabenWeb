<?php
require('head.php');
include('nav.php');
?>
<main>
    <article class="userRegister" id="userRegister">
        <section>
            <form id="LoStUsRe" method="POST">
                <div class="registerForm flex">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="registerForm flex">
                    <label for="nickname">Nickname:</label>
                    <input type="text" id="nickname" name="nickname" required>
                </div>
                <div class="flex">
                    <button type="submit" value="Submit" onclick="createUser()">Submit</button>
                </div>
            </form>
        </section>
    </article>
</main>
<?php require('foot.php'); ?>

<script src="script/script.js"></script>