const { Employee } = require('./employee');

class Engineer extends Employee {
    constructor(name, id, role, email, github) {
        super(name, id, role, email);
        this.role = 'Engineer';
        this.github = `https://www.github.com/gamgee-em`;//${answers.github}
    }
    getGitHub() {
        return this.github
    }
} 

const newEngineer = new Engineer('Thao', '314902345', this.getRole, 'thao@email.com', this.getGitHub)
console.log(newEngineer);

const engineer = () => {
    return {};
}

module.exports = Engineer;