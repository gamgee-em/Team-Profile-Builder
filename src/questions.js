const managerQuestions = [
    {
        name: 'manager_name',
        type: 'input',
        message: 'What is your team managers name?'
    },
    {
        name: 'manager_id',
        type: 'input',
        message: 'What is the team manager\'s employee ID?'
    },
    {
        name: 'manager_email',
        type: 'input',
        message: 'What is the team manager\'s e-mail?'
    },
    {
        name: 'manager_office',
        type: 'input',
        message: 'What is the team manager\'s office #?'
    }
];

const teamMemberQuestion = [
    {
        name: 'member_type',
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'My Team is complete for now']
    }
];

const engineerQuestions = [
    {
        name: 'engineer_name',
        type: 'input',
        message: 'What is your engineer\'s name?'
    },
    {
        name: 'engineer_id',
        type: 'input',
        message: 'What is the engineer\'s employee ID?'
    },
    {
        name: 'engineer_email',
        type: 'input',
        message: 'What is the engineer\'s e-mail?'
    },
    {
        name: 'engineer_github',
        type: 'input',
        message: 'What is the engineer\'s GitHub username?'
    }
];

const internQuestions = [
    {
        name: 'intern_name',
        type: 'input',
        message: 'What is this Intern\'s name?'
    },
    {
        name: 'intern_id',
        type: 'input',
        message: 'What is this Intern\'s employee ID?'
    },
    {
        name: 'intern_email',
        type: 'input',
        message: 'What is this Intern\'s e-mail?'
    },
    {
        name: 'intern_school',
        type: 'input',
        message: 'Where did this Intern go to school?'
    }
];

module.exports = {
    managerQuestions,
    teamMemberQuestion,
    engineerQuestions,
    internQuestions
};