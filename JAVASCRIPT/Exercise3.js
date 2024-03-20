let computerChoice = '';
let randomNumber;
let resultMessage = '';
let  score = {
    Win : 0,
    Lose : 0,
    Tie : 0,
};
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
    console.log(`Computer Choice is ${computerChoice}`);
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
    alert(`Your Choice is : ${yourChoice}
Computer Choice is : ${computerChoice}
The Result is : ${resultMessage}
Win:${score.Win}, Lose:${score.Lose}, Tie:${score.Tie}`);
}