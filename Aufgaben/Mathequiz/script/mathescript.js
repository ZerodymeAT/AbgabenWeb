'use strict';
let level = 4;
let lifes = 3;
let userAns = document.getElementById("btnUserAnswer");

userAns.addEventListener('click', function () {
    let user = document.getElementById("userMatheAnswer").value;
});

function game() {
    let int1 = Math.round(getRandomInt(level));
    let int2 = Math.round(getRandomInt(level));
    if (int2 > int1) {
        let tempint = int1;
        int1 = int2;
        int2 = tempint;
    }

    document.querySelector('#question').innerHTML = ("Aufgabe: " + int1 + " " + switchOp(level) + " " + int2 + " =  ");
    console.log("Level: " + level + " Aufgabe: " + int1 + " " + switchOp(level) + " " + int2 + " = " + switchCalc(int1, int2) + "  " + userAns);

    if (userAns === switchCalc(int1, int2)) {
        level++;
    } else {
        lifes--;
    }

}

function getRandomInt() {
    if (level <= 3) {
        return Math.random() * (20 - 1);
    } else if (level > 3 && level <= 6) {
        return Math.random() * (50 - 3);
    } else if (level > 6) {
        return Math.random() * (100 - 3);
    }
}

function switchCalc(int1, int2) {
    let result;
    // let divint1;
    // let divint2;

    switch (level) {
        case 1: case 5:
            result = int1 + int2;
            break;
        case 2: case 6:
            result = int1 - int2;
            break;
        case 3: case 7:
            result = int1 / int2;
            break;
        case 4: case 8: case 9:
            result = int1 * int2;
            break;
    }
    return result;
}

function switchOp(level){
    let op;
    switch (level){
        case 1: case 5: op = '+'; break;
        case 2: case 6: op = '-'; break;
        case 3: case 7: op = '/'; break;
        case 4: case 8: case 9: op = '*'; break;
    }
    return op;
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