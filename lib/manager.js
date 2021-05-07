const { Employee } = require('./employee')

class Manager extends Employee {
    constructor(name, id, role, email, officeNumber) {
        super(name, id, role, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
}

const newManager = new Manager('Sam', '143314159', this.getRole, 'samuel.sweigart@gmail.com', '143');
console.log(newManager.name);
console.log(newManager);


const manager = () => {
    return {};
}

module.exports = Manager;