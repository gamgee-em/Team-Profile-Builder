const inquirer = require('inquirer');

const questions = (answers = [{}]) => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What type of employee would you like to add?',
                choices: ['Engineer', 'Intern', 'Manager'],
                name: 'employee-type'
            }
        ]);
    return answers;
};

module.exports = questions;