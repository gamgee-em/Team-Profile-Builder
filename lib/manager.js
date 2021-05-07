const { Employee } = require('./employee')

class Manager extends Employee {
    constructor(name, id, role, email, officeNumber) {
        super(name, id, role, email);
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }
}

const renderManager = (answers) => {
    //const manager = new Manager('Sam', '143314159', this.getRole, 'samuel.sweigart@gmail.com', '143');
    const manager = new Manager(
        answers.manager_name, 
        answers.manager_id, 
        answers.manager_email, 
        answers.manager_github
    );
    //const manager = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_officeNumber)
    return manager;
}

module.exports = {
    Manager,
    renderManager
};