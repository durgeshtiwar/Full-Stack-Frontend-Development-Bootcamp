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