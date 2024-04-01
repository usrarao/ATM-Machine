#!/usr/bin/env code
// SHABANG

import inquirer from "inquirer";
import chalk from "chalk";
// initialize user balance and pin code 
let myBalance = 10000;
let myPin = 2579;

// print welcome message

console.log(chalk.blue("\n \t Wellcome to code with Amber - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
  { 
     name: "pin",
  type: "number",
  message:chalk.yellow("Enter your pin code:")
  }
])
if(pinAnswer.pin ===myPin) {
    console.log(chalk.green("\nPin is Correct, login Successfully!\n"));
   // console.log(`current Account Balance is ${myBalance}`)

let operationAns = await inquirer.prompt([
    {
        name:"operation",
        type: "list",
        message: "Select an operation:",
      choices:["withdraw ammount", "check Balance"]
    }
])
if(operationAns.operation === "withdraw ammount") {
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdrawMethod",
            type: "list",
            message: " select awithdrawal method:",
            choices: ["Fast Cash", "Enter Amount"]
        }
    ])
if(withdrawAns.withdrawMethod === "Fast Cash"){
let fastCashAns = await inquirer.prompt([
    {
        name: "fastCash",
        type: "list",
        message: " select Amount:",
        choices: [1000, 2000, 3000, 7000, 50000, 20000]
    }
])
if(fastCashAns.fastCash > myBalance){
console.log(chalk.red("Insufficient Balnce"));
}
else{
    myBalance -= fastCashAns.fastCash
    console.log(`${fastCashAns.fastCash} withdraw successfully`);
    console.log(`your Remaining Balance is:${myBalance}`);
}
}
   else if(withdrawAns.withdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
            {        
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
                ])
                if(amountAns.amount > myBalance){
                    console.log(chalk.bgGray("Insufficient Balance"));
                }
                else{
                    myBalance -= amountAns.amount;
                    console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your Remaining Balance is: ${myBalance}`);
            }
    }
        
}  
else if(operationAns.operation === "check Balance"){
console.log(`your Account Balance is: ${myBalance}`);
}
}
else{
    console.log(chalk.bgCyanBright("Pin is Incorrect, Try Again!"));
}



