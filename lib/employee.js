const inquirer = require('inquirer');
const { questions, teamMemberQuestion } = require('../src/questions');

class Employee {
    constructor(name, id, role, email) {
        this.name = name;
        this.id = id;
        this.role = 'Employee';
        this.email = email;
    }
    getId() {
        return this.id;
        };
    getEmail() {
            return this.email;
        };
    getRole() {
            return this.role;
        };
}; 

// may not need this
const renderTeamMember = (answers) => {
    inquirer
        .prompt(teamMemberQuestion, answers)
            .then((answers) => {
                switch (answers.member_type) {
                    case 'Engineer':
                        console.log(answers.member_type);
                        break;
                    case 'Intern':
                        console.log(answers.member_type);
                        break;
                    case 'My Team is complete for now':
                        console.log('Team complete');
            };
    });
};

module.exports = {
    Employee,
    renderTeamMember,
}