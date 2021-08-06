'use strict';

function start() {
    let num = 5;
    let userNumber;

    function askNumber() {
        userNumber = prompt('Угадай число от 1 до 100');
    }

    function corrNumber() {
        if (isNaN(userNumber)) {
            alert('Введи число!');
            tryAgain();
        }
    }

    function checkNumber() {
        if (userNumber === null){
            alert('Игра окончена');
        } else {
            if (userNumber > num) {
                alert('Загаданное число меньше');
                tryAgain();
            } else if (userNumber < num) {
                alert('Загаданное число больше');
                tryAgain();
            } else if (userNumber == num) {
                alert('Поздравляю, Вы угадали!!!');
            }
        }
    }

    function tryAgain() {
        askNumber();
        corrNumber();;
        checkNumber();
    }
    tryAgain();
}
start();