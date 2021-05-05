const { Employee } = require('./employee');

class Engineer extends Employee {
    constructor(name, id, role, email, github) {
        super(name, id, role, email);
        this.github = github;
    }
    getGitHub() {
        let gitURL = `https://www.github.com/${this.github}`;
        return gitURL;
    }
    getRole() {
        return 'Engineer';
    }
} 

const engineer = () => {
    return {};
}

module.exports = Engineer;