module.exports = questions = [
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
            },
            {
                name: 'member_type',
                type: 'list',
                message: 'What type of team member would you like to add?',
                choices: ['Engineer', 'Intern', 'My Team is complete for now']
            }
];
/* 
{
    name: 'engineer_github',
    type: 'input',
    message: 'What is the team engineer\'s github username?'
}, */