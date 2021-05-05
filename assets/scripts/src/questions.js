const inquirer = require('inquirer');

const questions = (answers = [{}]) => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your team managers name?',
                name: 'manager-name'
            },
            {
                type: 'input',
                message: 'What is the team manager\'s employee ID?',
                name: 'manager-id'
            },
            {
                type: 'input',
                message: 'What is the team manager\'s e-mail?',
                name: 'manager-email'
            },
            {
                type: 'input',
                message: 'What is the team manager\'s employee ID?',
                name: 'manager-id'
            },
            {
                type: 'list',
                message: 'What type of team memeber would you like to add?',
                choices: ['Engineer', 'Intern', 'My Team is complete for now'],
                name: 'employee-type'
            }
        ]).then((answers) => {
            //console.log(answers);
            
        });
    
};

module.exports = { questions };