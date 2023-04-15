<?php require('head.php'); ?>
<?php include('nav.php');
?>

<main>
    <article class="rangeSelector" id="rangeSelector" style="display: flex">
        <section>
            <div>
                <form id="MinAndMaxValues" method="POST">
                    <div>
                        <p>Hier legst du den Bereich fest, zwischen welchen Werte die Zahl liegen soll:</p>
                        <p>Differenz zw. min und max muss mind. 100 sein</p>
                    </div>
                    <div>
                        <label name="minValue">Min</label>
                        <input type="number" name="minValue" id="minValue" required>
                    </div>
                    <div>
                        <label name="maxValue">Max</label>
                        <input type="number" name="maxValue" id="maxValue" required>
                    </div>
                    <div>
                        <button class="submit" type="button" onclick="getMinAndMaxValuesFromUser()">Enter</button>
                        <button class="reset" type="reset">Reset</button>
                    </div>
                    <div class="errorBox errorBoxBG" id="errorBox" style="display: none">
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                        <p id="errorMsg"></p>
                    </div>
                </form>
            </div>

        </section>
    </article>
    <article class="findNumber" id="findNumber" style="display: none">
        <section>
            <div>
                <p>Die Zahl zwischen <span id="minValuePrint"></span> und <span id="maxValuePrint"></span> wurde generiert</p>
                <p>Was denkst du ist die richtige Antwort?</p>
                <p>Mögliche Versuche: <span id="tries"></span></p>
            </div>
            <div class="userInputButton">
                <label for="userValue"></label>
                <input type="number" id="userValue" name="userValue" required>
                <button type="submit" onclick="checkNumber()" name="userValueButton">Submit</button>
            </div>
            <div>
                <button type="button" onclick="givenUp()" name="givenUpButton">Aufgeben</button>
                <button type="button" onclick="newGame()" name="newGameButton">Neues Spiel</button>
            </div>
            <div class="msgBoxHint msgBoxHintBG" id="msgBoxHint" style="display: none">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                <p id="hintMsg"></p>
            </div>
            <div class="msgBoxHint msgBoxAnswerCorrect" id="msgBoxAnsCorrect" style="display: none">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                <p id="ansCorrectMsg"></p>
            </div>

        </section>
    </article>
</main>

<script src="script/script.js"></script>
<?php require('foot.php'); ?>

