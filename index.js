const inquirer = require('inquirer');
const { managerQuestions } = require('./src/questions');
const { htmlTemplate, renderEmployee } = require('./lib/html-skel');
const { Manager, renderManager } = require('./lib/manager');
const { renderTeamMember } = require('./lib/employee');
// immediately invokes program when node index.js command is ran from CL
(() => inquirer.prompt(managerQuestions, (answers) => {
        const manager = new Manager(
            answers.manager_name, 
            answers.manager_id, 
            answers.manager_email, 
            answers.manager_github
            );
        // renders manager first
        renderManager(manager);
        // invokes htmlTemplate in html-skel.js
        // htmlTemplate(answers);
    }).then((answers) => {
        //? asks what type of team member to add
        renderTeamMember(answers);
    })
)();
