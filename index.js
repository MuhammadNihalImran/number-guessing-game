#! /usr/bin/env node
import inquirer from 'inquirer';
async function checknumber() {
    let guessnumber = Math.floor(Math.random() * 10) + 1;
    console.log("guess number: ", guessnumber);
    let attempts = 10;
    do {
        const userGuess = await inquirer.prompt({
            name: "guess",
            type: "number",
            message: `Guess the number (between 1 and 10). You have ${attempts} attempts:`,
        });
        if (userGuess.guess === guessnumber) {
            console.log("Congratulations! You guessed the correct number.");
            return;
        }
        else {
            console.log(`Incorrect guess. Try again.`);
            attempts--;
        }
    } while (attempts > 0);
}
checknumber();
