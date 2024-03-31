function play(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var i = Math.floor(Math.random() * 3);
    
    var computerChoice = choices[i];
    var msg = 'You chose ' + userChoice + '. Computer chose ' + computerChoice + '. ';

    if (userChoice === computerChoice) {
        msg += "It's a tie!";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') || 
               (userChoice === 'scissors' && computerChoice === 'paper') || 
               (userChoice === 'paper' && computerChoice === 'rock')) {
        msg += "You win!";
    } else {
        msg += "You lose!";
    }

    document.getElementById('message').innerHTML = msg;
}
