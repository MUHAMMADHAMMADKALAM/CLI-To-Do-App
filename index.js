#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.bgYellowBright.underline.bold.italic("\n..........* WELCOM TO THE TO-DO APP *..........\n"));
let toDos = [];
let condition = true;
while (condition) {
    let todoTask = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: chalk.underline.italic.yellowBright("what whould you like to add in your Todos ?"),
            type: "input",
        },
        {
            name: "secondQuestion",
            message: chalk.italic.yellowBright("whar you like to add more in your Todos?"),
            type: "confirm",
            default: "true",
        }
    ]);
    toDos.push(todoTask.firstQuestion);
    condition = todoTask.secondQuestion;
    console.log(chalk.magentaBright.italic("\n" + (toDos) + "\n"));
}
;
