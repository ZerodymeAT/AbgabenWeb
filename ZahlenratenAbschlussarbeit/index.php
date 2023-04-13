<?php require('head.php'); ?>
<?php include('nav.php'); ?>
<main>
    <article class="userRegister" id="userRegister">
        <section>
            <form id="LoStUsRe" method="POST" action="index.php">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="nickname">Nickname:</label>
                <input type="text" id="nickname" name="nickname" required>

                <input type="submit" value="Submit">
            </form>
        </section>
    </article>
    <article class="rangeSelector" id="rangeSelector">
        <section>
            <div>
                <p>Hier musst du deinen Bereich der Zahlen festlegen:</p>
                <p id="minValue"></p>
                <p id="maxValue"></p>
            </div>

        </section>
    </article>
    <article class="game" id="game">
        <section>

        </section>
    </article>
</main>
<?php require('foot.php'); ?>
<script src="script/script.js"></script>