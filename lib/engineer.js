const fs = require('fs');
const inquirer = require('inquirer');
const { engineerQuestions } = require('../src/questions');
const { Employee } = require('./employee');
const { renderEmployee, htmlTemp } = require('./html-skel');
const  { renderIntern }  = require('./intern');
const employeeObj = [];

class Engineer extends Employee {
    constructor(name, id, role, email, github) {
        super(name, id, role, email);
        this.role = 'Engineer';
        this.github = `https://www.github.com/${github}`;//${answers.github}
    }
    getGitHub() {
        return this.github
    }
}

const renderEngineer = (answers) => {
    inquirer
        .prompt(engineerQuestions, (answers))
            .then((answers) => {
                if (employeeObj.length < 10) {
                switch(answers.member_type) {
                    case 'Engineer':
                        // TODO: invoke renderEngineer() here? or create new Employee? 🤔 
                        console.log('Engineer')
                        employeeObj.push(answers.name);
                        console.log(`employeedOnj: ${employeeObj}`);
                        renderEngineer();
                        break;
                    case 'Intern':
                        console.log('Intern');
                        employeeObj.push(answers);
                        console.log(employeeObj);
                        renderIntern();
                        break;
                    case 'My Team is complete for now':
                        console.log('Team positions fulfilled')
                        fs.writeFile('../index.html', htmlTemp.toString(), (err) => {
                            err ? console.error(err) : console.log('File Written!');
                        });
                        break;
                    }
                /* if(answers.member_type === 'Engineer') {
                    console.log('if engineer reached')
                    renderEngineer();
                } else if (answers.member_type === 'Intern'){
                    console.log('if intern reached')
                    renderIntern();
                } else {
                    console.log('team full');
                } */
        }
    });
};

module.exports = {
    renderEngineer
};