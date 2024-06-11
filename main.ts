#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1203;


let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin number",
  },
]);



if (pinAnswer.pin === myPin) {
  console.log("correct pin code!!!");
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "fast Cash", "check balance"],
    },
  ]);



  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter your amount",
      },
    ]);

    if (myBalance < amountAns.amount) {
      console.log("You don't have enough money in your account to cover your transactions.");
    }

    else {
      myBalance -= amountAns.amount;

      console.log(`your remaining balance is ${myBalance}`);
    };

  }

  else if (operationAns.operation === "fast Cash") {
    let fastCashAns = await inquirer.prompt({
      name: "amount",
      type: "list",
      choices: ["20000", "10000", "5000", "1000"],},
    );
   
    if(fastCashAns.amount <= myBalance) {
      let balance2 = myBalance - fastCashAns.amount;
      console.log(`The Remaining Balance Is ${balance2}.`);
    }
  
    else {console.log (`You Have Insufficient Balance`);}
    
  }

  else if (operationAns.operation === "check balance") {
    console.log("your balance is :" + myBalance)
  };

}


else {
  console.log("Incorrect pin number");
}
