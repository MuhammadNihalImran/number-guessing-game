import inquirer from 'inquirer';
let correctnumber = Math.floor(Math.random() * 10);
let attemps = 10;
do {
    let answer = await inquirer.prompt([
        {
            name: "answer",
            type: "number",
            message: `guess your number between 1-10 and only ${attemps}`,
        }
    ]);
    if (answer.answer === correctnumber) {
        console.log("your answer is correct!");
    }
    else {
        console.log("your answer is incorrect!");
        attemps--;
    }
} while (attemps > 0);
