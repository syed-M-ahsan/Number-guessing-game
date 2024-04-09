#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\t Number-Guessing-Game ");
console.log("\t -------------------- \n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
// from 0 to 1 the multiplied No be the limit
console.log("Computer has generated a number, its your turn ;)");
const answer = await inquirer.prompt([
    { name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 to 5 :" },
]);
if (answer.userGuessNumber == randomNumber) {
    console.log(`hurrah! your answer is correct`);
    console.log(`your answer "${answer.userGuessNumber}" is equal to "${randomNumber}"`);
}
else {
    console.log(`please try again ! your answer is incorrect ${answer.userGuessNumber} is not equal to ${randomNumber}`);
}
