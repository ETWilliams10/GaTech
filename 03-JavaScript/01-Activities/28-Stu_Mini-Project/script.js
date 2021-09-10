// Grab User Choice
var userChoice = prompt('Pick R, P, or S');

// Get Computer Choice
var possibleChoices = ['r', 'p', 's']
var computerChoice = Math.floor(Math.random() * 3);

if (userChoice === computerChoice) {
    alert("You tied!");
    ties++;
    }    else if ((userChoice === 'r' && computerChoice === 's') ||
                    (userChoice === 'p' && computerChoice === 'r') ||
                    (userChoice === 's' && computerChoice === 'p'))
