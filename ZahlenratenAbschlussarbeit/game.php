<?php
require('head.php');
include('nav.php');
?>

<main>
    <article class="rangeSelector" id="rangeSelector">
        <section>
            <div>
                <form class="MinAndMaxValues" id="MinAndMaxValues" method="POST">
                    <div class="flex">
                        <p>Hier legst du den Bereich fest, zwischen welchen Werte die Zahl liegen soll:</p>
                        <p>Differenz zw. min und max muss mind. 100 sein</p>
                    </div>
                    <div class="flex">
                        <label name="minValue">Min</label>
                        <input type="number" name="minValue" id="minValue" required>
                    </div>
                    <div class="flex">
                        <label name="maxValue">Max</label>
                        <input type="number" name="maxValue" id="maxValue" required>
                    </div>
                    <div class="SubmitResetButtonMinMax flex">
                        <button class="submit" type="button" onclick="getMinAndMaxValuesFromUser()">Enter</button>
                        <button class="reset" type="reset">Reset</button>
                    </div>
                </form>
                <div class="errorBox errorBoxBG" id="errorBox">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                    <p id="errorMsg"></p>
                </div>
            </div>

        </section>
    </article>
    <article class="findNumber" id="findNumber">
        <section class="abstaende">
            <div class="flex" id="findNumberTextblock">
                <p>Die Zahl zwischen <span id="minValuePrint"></span> und <span id="maxValuePrint"></span> wurde
                    generiert</p>
                <p>Was denkst du ist die richtige Antwort?</p>
                <p>Offene Versuche: <span id="tries"></span></p>
            </div>
            <div class="gamepanel" id="gamepanel">
                <div class="flex" id="userInputButton">
                    <label for="userValue"></label>
                    <input type="number" id="userValue" name="userValue" required>
                    <button type="submit"  onclick="checkNumber()" name="userValueButton">Submit</button>
                </div>
                <div><button type="button" onclick="givenUp()" name="givenUpButton">Aufgeben</button></div>
            </div>
            <div>
                <button type="button" onclick="newGame()" name="newGameButton">Neues Spiel</button>
            </div>
            <div class="msgBoxHint msgBoxHintBG" id="msgBoxHint">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                <p id="hintMsg"></p>
            </div>
            <div class="msgBoxHint msgBoxAnswerCorrect" id="msgBoxAnsCorrect" >
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                <p id="ansCorrectMsg"></p>
            </div>

        </section>
    </article>
</main>

<script src="script/script.js"></script>
<?php require('foot.php'); ?>

