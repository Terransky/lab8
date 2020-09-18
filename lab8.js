
'use scrict'

var num = 38;
var guess = prompt("Please guess a number between 1 and 50 within 5 attempts.");




for(var i = 0; i < 5; i++) {

    if (guess<1 || guess>50) {
        alert("Please enter a number between 1 and 50. You have " 5 - i "attempts remaining.");
        i--;
    }

    else if (guess < num) {
        alert("Guessed too low. You have " 5 - i "attempts remaining.");
    }

    else if (guess > num) {
        alert("Guessed too high. You have " 5 - i "attempts remaining.");
    }

    else {
        alert("Winner winner chicken dinner!")
    }
}

