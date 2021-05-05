const questions = require('./src/questions');
const renderHTML = require('./src/renderHTML');


const init = (answers) => {
    //console.log(questions.answers);
    renderHTML(answers);
}
(answers => inquirer.prompt(questions, answers)
    .then((res) => renderMarkUp(res)))();
