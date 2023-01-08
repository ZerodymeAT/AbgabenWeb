'use strict';
let level = 1;
let lifes = 3;
let userAns = 0;

function userAnswer() {
    userAns = document.querySelector('#userMatheAnswer');
}

// userAns.addEventListener('click', function () {
//     let user = document.getElementById("userMatheAnswer").value;
// });

function game(userAns) {
    let int1 = getRandomInt(level);
    let int2 = getRandomInt(level);
    if (int2 > int1) {
        let tempint = int1;
        int1 = int2;
        int2 = tempint;
    }
    let result = switchCalc(int1, int2);

    document.querySelector('#question').innerHTML = ("Aufgabe: " + int1 + " " + switchOp(level) + " " + int2 + " =  ");
    console.log("Level: " + level + " Aufgabe: " + int1 + " " + switchOp(level) + " " + int2 + " = " + result + "  " + userAnswer());



    if (lifeCalculator() === 1) {
        if (userAns === result) {
            level++;
            console.log("Level: " + level + " Aufgabe: " + int1 + " " + switchOp(level) + " " + int2 + " = " + result + "  " + userAnswer());
            game(userAns, level, lifes);
        } else lifes--;
    } else gameOver();
}

function lifeCalculator() {
    if (lifes > 0) {
        return 1;
    } else return 0;
}

/* Returns switchCalc result */
function switchCalc(int1, int2) {
    let result;
    // let divint2;

    switch (level) {
        case 1:
        case 5:
            result = int1 + int2;
            break;
        case 2:
        case 6:
            result = int1 - int2;
            break;
        case 3:
        case 7:
            result = int1 / int2;
            break;
        case 4:
        case 8:
        case 9:
            result = int1 * int2;
            break;
    }
    return result;
}

/* Returns the operator [op] for the calculation */
function switchOp(level) {
    let op;
    switch (level) {
        case 1:
        case 5:
            op = '+';
            break;
        case 2:
        case 6:
            op = '-';
            break;
        case 3:
        case 7:
            op = '/';
            break;
        case 4:
        case 8:
        case 9:
            op = '*';
            break;
    }
    return op;
}

function getRandomInt() {
    if (level <= 3) {
        return Math.floor(Math.random() * (20 - 2));
    } else if (level > 3 && level <= 6) {
        return Math.floor(Math.random() * (50 - 5));
    } else if (level > 6) {
        return Math.floor(Math.random() * (100 - 10));
    }
}
function newGame() {
    window.location.reload()
}
function gameOver() {
    console.log("Game Over")
}


// function operatorSelection() {
//     let operator;
//     if (level === 1 || level === 5) {
//         operator = '+';
//         return operator;
//     } else if (level === 2 || level === 6) {
//         operator = '-';
//         return operator;
//     } else if (level === 3 || level === 7) {
//         operator = '/';
//         return operator;
//     } else if (level === 4 || level > 7) {
//         operator = '*';
//         return operator;
//     }
// }
//
// function mathResult(int1, int2) {
//     return eval(int1 + operatorSelection(level) + int2);
// }