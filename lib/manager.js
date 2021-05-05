const { Employee } = require('./employee')

class Manager extends Employee {
    constructor(name, id, role, email, officeNumber) {
        super(name, id, role, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

//const newManager = new Manager('Sam', '143314159', 'Manager', 'samuel.sweigart@gmail.com', '555-555-5555')
//console.log(newManager);

const manager = () => {
    return {};
}

module.exports = Manager;