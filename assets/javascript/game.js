var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];
var computerGuesses = 'abcdefghijklmnopqrstuvwxyz'.split('').map((c) => c.toUpperCase());
var computerGuess = computerGuesses[Math.floor(Math.random()*computerGuesses.length)]; 
//console.log(computerGuesses);
//console.log(computerGuess);


function myfunction() {
    //document.getElementById("computerGuess").innerHTML = computerGuess;
    console.log(computerGuess);
};

document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("userGuesses").innerHTML = "none";

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    userGuesses.push(userGuess);
    document.getElementById("userGuesses").innerHTML = userGuesses;
    console.log(userGuess);
    console.log(userGuesses);

        if (userGuess !== computerGuess) {
            guessesLeft--;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            
            if (guessesLeft === 0) {
                resetGame();
                losses++;
                document.getElementById("losses").innerHTML = losses;
                console.log(losses);
            };
        } else {
            resetGame();
            wins++;
            document.getElementById("wins").innerHTML = wins;
            console.log(wins);
        };

    function resetGame() {
        guessesLeft = 10;
        userGuesses = [];
        document.getElementById("userGuesses").innerHTML = userGuesses;
        computerGuess = computerGuesses[Math.floor(Math.random()*computerGuesses.length)];
        //document.getElementById("computerGuess").innerHTML = computerGuess;
        console.log("Reset the game the next guess is: " + computerGuess);
    };   
};

myfunction();

