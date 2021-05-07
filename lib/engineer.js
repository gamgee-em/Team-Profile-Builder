const inquirer = require('inquirer');
const { engineerQuestions } = require('../src/questions');
const { Employee } = require('./employee');
const renderEmployee = require('./employee');

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
    // const engineerOne = new Engineer('Thao', '314902345', this.getRole, 'thao@email.com', 'gamgee-em')
    inquirer
        .prompt(engineerQuestions,(answers) => {
            const engineerOne = new Engineer(
                answers.engineer_name, 
                answers.engineer_id, 
                this.getRole, 
                answers.engineer_email, 
                answers.engineer_github
                );
        }).then((answers) => {

            renderEmployee(answers);
        });
};

module.exports = {
    renderEngineer
};