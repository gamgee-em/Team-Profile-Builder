const inquirer = require('inquirer');
const questions = require('./src/questions');
const htmlTemplate = require('./lib/html-skel');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

(() => inquirer.prompt(questions)
    .then((answers) => {
        const newManager = new Manager(answers.manager_name, answers.manager_id, getRole, answers.manager_email, answers.manager_office)
        console.log(newManager);
        switch(answers.member_type) {
            case 'Intern':
                console.log('Adding Intern...');
                newIntern(answers);
                console.log(newIntern);
                //! newIntern = new Intern(answers.intern_name, answers.intern_id, answers.member_type, answers.email, answers.school); 
                break;
            case 'Engineer': 
                console.log('Adding Engineer...');
                break;
            case 'My Team is complete for now':
                console.log('Team positions fulfilled')
        }
        htmlTemplate(answers);
    })
)();
