const questions = require('../src/questions');

class Employee {
    constructor(name, id, role, email) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
        this.getId = () => {

        };
        this.getEmail = () => {
            return this.email;
        };
        this.getRole = () => {
            return this.role;
        };
    };
}; 

const employee = () => {
    return {};
};


// TODO: Assign employee object/values using the below syntax
//? myEmployee = new Employee(res.name, res.id, res.role, res.email)
newEmployee = new Employee('Sam', '143314159', 'Manager', 'samuel.sweigart@gmail.com');

console.log(newEmployee);

module.exports = {
    Employee,
    employee,
    newEmployee
}