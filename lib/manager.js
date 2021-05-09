const { Employee } = require('./employee')
const { renderEmployee } = require('../lib/html-skel')
class Manager extends Employee {
    constructor(name, id, role, email, officeNumber) {
        super(name, id, role, email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}

const renderManager = (answers) => {
    const manager = new Manager(
        answers.manager_name, 
        answers.manager_id, 
        answers.manager_email, 
        answers.manager_github
    );
    renderEmployee(answers);
    //return manager;
}

module.exports = {
    Manager,
    renderManager
};