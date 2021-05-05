const { Employee } = require('./employee');

class Intern extends Employee {
    constructor(name, id, role, email, school) {
        super(name, id, role, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

const intern = () => {
    return {};
}

module.exports = Intern;