


var num = 38;
var guess;




for(var i = 0; i < 5; i++) {

    guess = prompt("Please guess a number between 1 and 50 within 5 attempts.");
    var remain = 4-i;
    console.log(i);
    console.log(guess);

    if (guess==num) {
        alert("Winner winner chicken dinner!")
        break;
    }

    else if (guess < num && guess >= 1) {
        alert("Guessed too low. You have " + remain + " attempts remaining.");
    }

    else if (guess > num && guess <= 50) {
        alert("Guessed too high. You have " + remain + " attempts remaining.");
    }

    else {
        i--;
        var plus1 = remain + 1;
        alert("Please enter a number between 1 and 50. You have " + plus1 + " attempts remaining.");
                
    }
}

