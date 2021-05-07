const inquirer = require('inquirer');
const { internQuestions } = require('../src/questions');
const { Employee, renderEmployee } = require('./employee');

class Intern extends Employee {
    constructor(name, id, role, email, school) {
        super(name, id, role, email);
        this.school = school;//${response.school}
        this.role = 'Intern';
    }
    getSchool() {
        return this.school;//${response.school}
    }
}

const renderIntern = (answers) => {
    inquirer
        .prompt(internQuestions, (answers) => {
            const internOne = new Intern(
                answers.intern_name, 
                answers.intern_id, 
                this.getRole, 
                answers.intern_email, 
                this.getSchool
            );
    }).then((answers) => {
        renderEmployee(answers);
    });
};

module.exports = { 
    renderIntern
};