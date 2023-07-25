function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors', 'pistol', 'in_da_house', 'finger'];
    const random = options[Math.floor(Math.random()*options.length)];
    return random;
}

// function printText (target, message, index) {   
//     if (index < message.length) {
//      target.textcontent = message[index++];
//      setTimeout(function () { printText(target, message, index); }, 150);
//     }
//   }

function printText (target, message, index) {   
    if (index < message.length) {
        target.append(message[index++]);
        setTimeout(() => {printText(target, message, index)}, 5);
    }
  }

function putImage (playerId, computerImage) {
    document.getElementById('player_counter').innerHTML = 
    `<img class="putImage" src='./img/${playerId}.png'/>`;
    document.getElementById('computer_counter').innerHTML = 
    `<img class="putImage" src='./img/${computerImage}.png'/>`;
}  

function addCounter (point, elementID) {
    const element = document.getElementById(elementID);
    element.textContent =element.textContent.slice(0,(element.textContent.length-1))+ ' ' + point;
    gameover();
}

function gameover() {
    if (document.getElementById('computer_caption').textContent.slice(-1) == 5) {
        alert('You lost the game! ...because you are loser.)');
        location.reload();
    } else if (document.getElementById('player_caption').textContent.slice(-1) == 5) {
        alert('You Won the game...by accident!)')
        location.reload();
    }
}
  //printText(document.getElementById('explanation'), 'Hello, WORLDdddd!', 0);
    let playerScore = 0;
    let computerScore = 0;
    let text = document.querySelector('#explanation');
    const choice = document.querySelector('#buttons');
    choice.addEventListener('click', (e) => {
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice();
        putImage(playerSelection, computerSelection);
        //let playerSelection = 'rock';
        //let computerSelection = 'scissors';
        //console.log(computerSelection);
        //console.log(playerSelection);
        if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
               // text.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
                text.textContent= "";
                const output = `You Win! ${playerSelection} beats ${computerSelection}.`;
                printText(text, output, 0);
                playerScore++;
                addCounter(playerScore, 'player_caption');
            } else if (
                (playerSelection === 'scissors' && computerSelection === 'rock') ||
                (playerSelection === 'paper' && computerSelection === 'scissors') ||
                (playerSelection === 'rock' && computerSelection === 'paper')
            ) {
                //text.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
                text.textContent= "";
                const output = `You Lose! ${computerSelection} beats ${playerSelection}.`;
                printText(text, output, 0);   
                computerScore++;
                addCounter(computerScore, 'computer_caption');             
            } else if (playerSelection === computerSelection) {
                //text.textContent = 'It\'s a tie!';
                text.textContent= "";
                const output = 'It\'s a tie!';
                printText(text, output, 0);          
                } else {
                    switch (computerSelection) {
                        case 'finger':
                            //text.textContent = 'The computer chooses some powerful sign. You lose!)';
                            text.textContent= "";
                            const output1 = 'The computer chooses some powerful sign. You lose!)';
                            printText(text, output1, 0);      
                            computerScore++;
                            addCounter(computerScore, 'computer_caption');    
                            break;
                        case 'in_da_house':
                            //text.textContent = 'The computer IN Da HOUSE now. He can\'t lose, so you lose!)';
                            text.textContent= "";
                            const output2 = 'The computer IN Da HOUSE now. He can\'t lose, so you lose!)';
                            printText(text, output2, 0);    
                            computerScore++;
                            addCounter(computerScore, 'computer_caption');                             
                            break;
                        case 'pistol':
                            //text.textContent = 'The computer just shot you. You lose!)';
                            text.textContent= "";
                            const output3 = 'The computer just shot you. You lose!)';
                            printText(text, output3, 0);  
                            computerScore++;
                            addCounter(computerScore, 'computer_caption');  
                            break;
                    }
                }
        
    })

