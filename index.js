#! /user/bin/env node
import inquirer from "inquirer";
let user_answer = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Please enter your sentence"
});
let words_count = user_answer.words.trim().split(" ").length;
console.log(`your sentence e has ${words_count} words.`);
