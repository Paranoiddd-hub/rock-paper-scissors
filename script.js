function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors', 'pistol', 'in_da_house', 'finger'];
    const random = options[Math.floor(Math.random()*options.length)];
    return random;
}

function printText (target, message, index) {   
    if (index < message.length) {
        target.append(message[index++]);
        setTimeout(() => {printText(target, message, index)}, 5);
    }
  }

function putImage (playerId, computerImage) {
    if (document.querySelector('#player_counter')) {
        document.querySelector('#player_counter').remove();
        document.querySelector('#computer_counter').remove();
        } else if (document.querySelector('.delete')) {
            document.querySelectorAll('.delete').forEach( node => node.remove());
        }
    const playerImage = document.createElement('img'); 
    playerImage.classList.add('putImage');
    playerImage.classList.add('delete');
    playerImage.src = `./img/${playerId}.png`;
    const playerCaption = document.getElementById('player_caption');
    document.getElementById('player_box').insertBefore(playerImage, playerCaption);

    const computerImg = document.createElement('img'); 
    computerImg.classList.add('putImage');
    computerImg.classList.add('delete');
    computerImg.src = `./img/${computerImage}.png`;
    const computerCaption = document.getElementById('computer_caption');
    document.getElementById('computer_box').insertBefore(computerImg, computerCaption);
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
    let playerScore = 0;
    let computerScore = 0;
    let text = document.querySelector('#explanation');
    const choice = document.querySelector('#buttons');
    choice.addEventListener('click', (e) => {
        
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice();
        putImage(playerSelection, computerSelection);
        if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
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
                text.textContent= "";
                const output = `You Lose! ${computerSelection} beats ${playerSelection}.`;
                printText(text, output, 0);   
                computerScore++;
                addCounter(computerScore, 'computer_caption');             
            } else if (playerSelection === computerSelection) {
                text.textContent= "";
                const output = 'It\'s a tie!';
                printText(text, output, 0);          
                } else {
                    switch (computerSelection) {
                        case 'finger':
                            text.textContent= "";
                            const output1 = 'The computer chooses some powerful sign. You lose!)';
                            printText(text, output1, 0);      
                            computerScore++;
                            addCounter(computerScore, 'computer_caption');    
                            break;
                        case 'in_da_house':
                            text.textContent= "";
                            const output2 = 'The computer IN Da HOUSE now. He can\'t lose, so you lose!)';
                            printText(text, output2, 0);    
                            computerScore++;
                            addCounter(computerScore, 'computer_caption');                             
                            break;
                        case 'pistol':
                            text.textContent= "";
                            const output3 = 'The computer just shot you. You lose!)';
                            printText(text, output3, 0);  
                            computerScore++;
                            addCounter(computerScore, 'computer_caption');  
                            break;
                    }
                }
        
    })

