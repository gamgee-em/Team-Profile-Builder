const inquirer = require('inquirer');
const { internQuestions } = require('../src/questions');
const { Employee } = require('./employee');
const { renderEmployee } = require('./html-skel');
const { renderEngineer } = require('./engineer');
class Intern extends Employee {
    constructor(name, id, role, email, school) {
        super(name, id, role, email);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

const renderIntern = (answers) => {
    inquirer
        .prompt(internQuestions, (answers))
            .then((answers) => {
                if(answers.member_type === 'Engineer') {
                    console.log('if engineer reached')
                    renderEngineer();
                } else if (answers.member_type === 'Intern'){
                    console.log('if intern reached')
                    renderIntern();
                } else {
                    console.log('team full');
                }
    });
};

module.exports = { 
    renderIntern
};