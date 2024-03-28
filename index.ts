#! /usr/bin/env node

import inquirer from "inquirer"
// npm i --save-dev@types creates types for typescript in node modules.

console.log("Card Detected!")

let myBalance= 10000;
let pin_Code= 1234;
// square brackets(array) used for multiple messages
let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        message: "Enter your Pin:",
        type: "number"

    }
)
console.log(pinAnswer) //gives answer in object form
console.log(pinAnswer.pin) // gives independent answer

if(pinAnswer.pin === pin_Code){
    console.log("Correct pin code!")
     
    // correct pin, move on to other options
    let operation_ans = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices:["Withdraw","Check Balance"]
        }
    ])
    // key values start with small letters (! Type, Message etc) similarly not List -> type, message, list. 

    if(operation_ans.operation === "Withdraw"){
        let amount = await inquirer.prompt([
            {
                name: "amt",
                message: "Amount you want to withdraw",
                type: "list",
                choices: ["Manual Entry", 5000,7500,10000,20000] 
            }
        ])
        
        // console.log(amount.amt) //displays amount 
        if(amount.amt==="Manual Entry"){
            //input
            let manual = await inquirer.prompt([
                {
                    name: "amt",
                    message: "Amount you want to withdraw",
                    type: "number",
                }
            ])
            
            //validation
            if(manual.amt > 10000){
                console.log("Your withdraw can't exceed account balance! ")
            }
            else{
                myBalance -= manual.amt
            }
        }
        else{
            if(amount.amt > myBalance && amount.amt != "Manual Entry" ){
                console.log("Your withdraw can't exceed account balance! ")
            }
            else{
                myBalance -= amount.amt
            }

        }

        console.log("Your remaining balance is: " + myBalance)
    }

    else if(operation_ans.operation === "Check Balance"){
        
        console.log("Your Balance is: " + myBalance)

    }



}

else{
    console.log("Incorrect pin code!")
}

// add try exception for withdraw more than amount
// few special withdraws 

