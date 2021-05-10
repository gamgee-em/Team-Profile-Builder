const fs = require('fs');
let htmlTemp = [];

const htmlHead = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
<body class="m-4 bg-light">
    <header class="container bg-info pt-4 rounded shadow-lg" style="height: 15vh;">
        <h1 class="d-flex justify-content-center" style="text-shadow: 2px 2px 3px rgba(83, 78, 78, 0.766);">My Team</h1>
    </header>
    <div class="container card rounded shadow-lg mt-1">
        <div id='main' class="row justify-content-center">`;

const htmlFooter = `</div>
                </div>
                <script src="../scripts/index.js"></script>
                <script src="../scripts/src/renderHTML.js"></script>
            </body>
        </html>`;

const managerHTML = (member) => {
    return `<div class="col-sm-3 card rounded m-4 shadow bg-light">
                <div class="card-body">
                    <div class="text-center">
                        <!-- EMPLOYEE CARDS -->
                        <h3 id='manager' class="text-center">Manager</h3>
                        <img src="./assets/images/manager-icon.png" alt="Manager icon representing type of team member">
                    </div>
                    <div class="card-body">
                        <h4 id='manager-name' class="card-title text-center ">${member.getName()}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li id='manager-id' class="list-group-item bg-light">Employee Id: ${member.getId()}</li>
                        <li id='manager-office' class="list-group-item bg-light">Office #: ${member.officeNumber}</li>
                        <li id='manager-email' class="list-group-item bg-light">Email: <a href="mailto: samuel.sweigart@gmail.com" target='_blank'  class="text-decoration-none">${member.getEmail()}</a></li>
                    </ul>
                </div>
            </div>\n`;
};

const engineerHTML = (member) => {
    return `<div class="col-sm-3 card rounded m-4 shadow bg-light">
                <div class="card-body">
                    <div class="text-center">
                        <!-- EMPLOYEE CARDS -->
                        <h3 id='engineer' class="text-center">Engineer</h3>
                        <img src="./assets/images/engineer-icon.png" alt="Engineer icon representing type of team member">
                    </div>
                    <div class="card-body">
                        <h4 id='engineer-name' class="card-title text-center ">${member.getName()}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li id='engineer-id' class="list-group-item bg-light">Employee Id: ${member.getId()} </li>
                        <li id='engineer-github' class="list-group-item bg-light">GitHub: <a href='${member.getGitHub()}' target='_blank' class="text-decoration-none">${member.github}</a></li>
                        <li id='engineer-email' class="list-group-item bg-light">Email: <a href="mailto: ${member.getEmail()}" target='_blank' class="text-decoration-none">${member.getEmail()}</a></li>
                    </ul>
                </div>
            </div>`;
};

const internHTML = (member) => {
    return `<div class="col-sm-3 card m-4 shadow bg-light">
                <div class="card-body">
                    <div class="text-center">
                        <!-- EMPLOYEE CARDS -->
                        <h3 id='intern' class="text-center">Intern</h3>
                        <img src="./assets/images/intern-icon.png" alt="Itern icon representing type of team member">
                    </div>
                    <div class="card-body">
                        <h4 id='intern-name' class="card-title text-center ">${member.getName()}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li id='intern-id' class="list-group-item bg-light">Employee Id: ${member.getId()}</li>
                        <li id='intern-school' class="list-group-item bg-light">School: ${member.getSchool()}</li>
                        <li id='intern-email' class="list-group-item bg-light">Email: <a href="mailto: ${member.getEmail()} target='_blank' class="text-decoration-none">${member.getEmail()}</a></li>
                    </ul>
                </div>
            </div>`;
};

const renderHTML = (teamObj) => {
    htmlTemp.push(htmlHead);

    teamObj.forEach((member) => {
        switch(member.getRole()) {
            case 'Manager':
                htmlTemp.push(managerHTML(member));
                break;
            case 'Engineer':
                htmlTemp.push(engineerHTML(member));
                break;
            case 'Intern':
                htmlTemp.push(internHTML(member));
                break;
            case 'My Team is complete for now':
                htmlTemp.push(htmlFooter);
                break;
            default:
                return ''; 
        };
    });

    htmlTemp = htmlTemp.join('');

    fs.writeFile('./index.html', htmlTemp.toString(), (err) => {
        err ? console.error(err) : console.log('index.html file written...');
    });
};

module.exports = renderHTML;