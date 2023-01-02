'use strict';
let level = 0;
let lifes = 3;

function game(answer) {
    let result;
    let useranswer = answer;
    function getRandomInt() {
        if (level <= 3) {
            return Math.random() * (20 - 1);
        } else if (level > 3 && level < 6) {
            return Math.random() * (50 - 3);
        } else if (level > 6) {
            return Math.random() * (100 - 3);
        }
    }

    function levelplus() {
        if (level === 1 || level === 5) {
            result = getRandomInt() + getRandomInt();
        }
        return result;
    }

    function levelminus() {
        if (level === 2 || level === 6) {
            result = getRandomInt() - getRandomInt();
        }
        return result;
    }

    function levelmulti() {
        if (level === 3 || level === 7) {
            result = getRandomInt() * getRandomInt();
        }
        return result;
    }
    function leveldivision() {
        if (level === 4 || level > 7) {
            result = Math.round((getRandomInt() / getRandomInt())*100) / 100;
        }
        return result;
    }




}