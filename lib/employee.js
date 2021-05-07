const questions = require('../src/questions');

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
const employee = () => {
    return {};
};

module.exports = {
    Employee,
    employee,
}