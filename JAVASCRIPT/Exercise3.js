let computerChoice = '';
let randomNumber;
let resultMessage = '';
let storage = localStorage.getItem('Score');
let score = JSON.parse(storage) || {
    Win :0,
    Lose: 0,
    Tie : 0,
}
function genrateRandomNumber()
{
    randomNumber = (Math.random()*3);
    if(randomNumber > 0 &&  randomNumber <= 1) 
    {
        computerChoice = 'Bat';
        // console.log('Computer Choice is Bat');
    }else if (randomNumber > 1 &&  randomNumber <= 2 ) {
        computerChoice = 'Ball';
        // console.log('Computer Choice is Ball');
    }
    else{
        computerChoice = 'Stump';
        // console.log('Computer Choice is stump');
    }
}
function checkWinner(userInput, computerChoice)
{
    if (userInput === 'Bat') {
        if (computerChoice === 'Bat') {
            score.Tie++;
            return `It's is Tie`;
        } else if (computerChoice === 'Ball') {
            score.Win++;
            return `User Win`;
        }else if (computerChoice === 'Stump') {
            score.Lose++ ;
            return `Computer Win`;
        }
    } else if (userInput ==='Ball') {
        if (computerChoice === 'Bat') {
            score.Lose++ ;
            return `Computer Win`;
        } else if (computerChoice === 'Ball') {
            score.Tie++;
            return `It's is Tie`;
        }else if (computerChoice === 'Stump') {
            score.Win++;
            return `User Win`;
        }
    } else
    {
        if (computerChoice === 'Bat') {
            score.Win++;
            return `User Win`;
        } else if (computerChoice === 'Ball') {
            score.Lose++ ;
            return `Computer Win`;
        }else if (computerChoice === 'Stump') {
            score.Tie++;
            return `It's is Tie`;
        }
    }
}

function displayResult(yourChoice,computerChoice,resultMessage)
{
    localStorage.setItem("Score",JSON.stringify(score));
    document.querySelector('.user_move').innerText = `Your Choice is : ${yourChoice}`;
    document.querySelector('.comp_move').innerText = `Computer Choice is : ${computerChoice}`;
    document.querySelector('.result').innerText = `The Result is : ${resultMessage}`;
    document.querySelector('.score').innerText = `Score : {Win:${score.Win}, Lose:${score.Lose}, Tie:${score.Tie}}`;
}
function resetGame()
{

    localStorage.clear();
    score = {
        Win :0,
        Lose: 0,
        Tie : 0,
    }
    document.querySelector('.user_move').innerText = '';
    document.querySelector('.comp_move').innerText = '';
    document.querySelector('.result').innerText = 'Game Reset';
    document.querySelector('.score').innerText = `Score : {Win:${score.Win}, Lose:${score.Lose}, Tie:${score.Tie}}`;
}
