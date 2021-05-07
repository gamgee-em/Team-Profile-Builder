const { Employee } = require('./employee');

class Intern extends Employee {
    constructor(name, id, role, email, school) {
        super(name, id, role, email);
        this.school = 'Meow U';//${response.school}
        this.role = 'Intern';
    }
    getSchool() {
        return this.school;//${response.school}
    }
}

// answers.intern_name, answers.intern_id, answers.member_type, answers.email, answers.school
const newIntern = new Intern('Krit', '4', this.getRole, 'krit@email.com', this.getSchool);
console.log(newIntern.getSchool());
console.log(newIntern);

/* const newIntern = (answers) => {
    return new Intern(
        answers.intern_name, 
        answers.intern_id, 
        answers.member_type, 
        answers.email, 
        answers.school
    );
} */

module.exports = { 
    Intern, 
    newIntern 
};