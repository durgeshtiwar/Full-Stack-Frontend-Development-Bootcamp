let computerChoice = '';
let randomNumber;
let resultMessage = '';
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
            return `It's is Tie`;
        } else if (computerChoice === 'Ball') {
            return `User Win`;
        }else if (computerChoice === 'Stump') {
            return `Computer Win`;
        }
    } else if (userInput ==='Ball') {
        if (computerChoice === 'Bat') {
            return `Computer Win`;
        } else if (computerChoice === 'Ball') {
            return `It's is Tie`;
        }else if (computerChoice === 'Stump') {
            return `User Win`;
        }
    } else
    {
        if (computerChoice === 'Bat') {
            return `User Win`;
        } else if (computerChoice === 'Ball') {
            return `Computer Win`;
        }else if (computerChoice === 'Stump') {
            return `It's is Tie`;
        }
    }
}