// 1. Deposite some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};
// 1. Deposite some money

const deposit = () =>{
    while(true) {
    const depositAmount = prompt("Enter a deposit amount ");
    const numberDepositAmount = parseFloat(depositAmount);
    
    if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalide Deposit amount, try again.");
    } 
    
    else{
        return numberDepositAmount;
    }
    }
};



// 2. Determine number of lines to bet on

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of the lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
        
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalide number of lines, try again.");
        } 
        
        else{
            return numberOfLines;
        }
    }
};


// 3. Collect a bet amount

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberOfBet = parseFloat(bet);
        
        if(isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines) {
            console.log("Invalide Bet, try again.");
        } 
        
        else{
            return numberOfBet;
        }
    }
};


const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
       for (let i = 0; i < count; i++){
        symbols.push(symbol);
       }
    }


};




 let balance = deposit();
 const numberOfLines = getNumberOfLines();
 const bet = getBet(balance, numberOfLines);
 
