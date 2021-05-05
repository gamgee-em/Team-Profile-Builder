const inquirer = require('inquirer');
const questions = require('./src/questions');
const htmlTemplate = require('./lib/html-skel');

(() => inquirer.prompt(questions)
    .then((answers) => {
        switch(answers.member_type) {
            case 'Intern':
                console.log('Adding Intern...');
                break;
            case 'Engineer': 
                console.log('Adding Engineer...');
                break;
            case 'My Team is complete for now':
                console.log('Team positions fulfilled')
        }
        htmlTemplate(answers);
    }))();
