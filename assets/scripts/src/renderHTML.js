const fs = require('fs');
const employee = require('../lib/employee');
const engineer = require('../lib/engineer');
const intern = require('../lib/intern');
const manager = require('../lib/manager');
const questions = require('../src/questions');
const inquirer = require('inquirer');
const { type } = require('os');

const renderTeamMember = member => {
    return member === 'Engineer' ? document.getElementById('#employee-type').innerHTML = 'Engineer'
    : license === 'Intern' ? document.getElementById('#employee-type').innerHTML = 'Intern'
    : console.log('Team positions filled!');
};

/* const renderHTML = (questions) => {
    
    console.log(questions);
}
 */

module.exports = renderHTML;