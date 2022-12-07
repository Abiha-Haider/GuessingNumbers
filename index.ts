#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let randomNum = Math.floor(Math.random() * 10);
const guessNuFunc = async() => {

    for  (let i =0; i<4; i++)  {

     let guessNum : {num : number} = await inquirer.prompt([
       {

        name : "num",
        type : "number",
        message : "Guess the number",
       },
    ]); 
      
       if( guessNum.num === randomNum) {

        console.log(chalk.bgMagentaBright("You guessed it!"));
        break;
    }
       else  {
        console.log(chalk.bgCyan("Please try again"));
    }

  }
    console.log(chalk.bgRedBright("The number was  '" + randomNum + "'"));

 };

guessNuFunc();