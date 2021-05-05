const fs = require('fs');

/* function managerTemplate(response) {
`<div class="col-sm-4 card">
    <div class="card-body">
        <div class="text-center">
            <!-- EMPLOYEE CARDS -->
            <h3 id='manager' class="text-center">Manager</h3>
            <img class="" src="../assets/images/dev-icon.png" alt="icon representing type of employee">
        </div>
        <div class="card-body">
            <h4 id='manager-name' class="card-title text-center ">${response.manager_name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li id='manager-email' class="list-group-item">Email: <a href="mailto: samuel.sweigart@gmail.com"></a></li>
            <li id='manager-github' class="list-group-item">GitHub: <a href="https://www.github.com/gamgee-em"></a></li>
            <li id='manager-id' class="list-group-item">Employee Id: </li>
        </ul>
    </div>
</div>`
}
 */
module.exports = htmlTemplate = (response) => {
    console.log(response.manager_name)
    const htmlTemp = 
    `<!DOCTYPE html>
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
        <body>
            <header class="container bg-info pt-3" style="height: 15vh;">
                <h1 class="d-flex justify-content-center">My Team</h1>
            </header>
            <div class="container">
                <div id='main' class="row">
                    <div class="col-sm-4 card">
                        <div class="card-body">
                            <div class="text-center">
                                <!-- EMPLOYEE CARDS -->
                                <h3 id='manager' class="text-center">Manager</h3>
                                <img class="" src="../assets/images/dev-icon.png" alt="icon representing type of employee">
                            </div>
                            <div class="card-body">
                                <h4 id='manager-name' class="card-title text-center ">${response.manager_name}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li id='manager-email' class="list-group-item">Email: <a href="mailto: samuel.sweigart@gmail.com">${response.manager_email}</a></li>
                                <li id='manager-id' class="list-group-item">Employee Id: ${response.manager_id}</li>
                                <li id='manager-office' class="list-group-item">Office #: ${response.manager_office}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <script src="../scripts/index.js"></script>
            <script src="../scripts/src/renderHTML.js"></script>
        </body>
    </html>`
    
    function renderMemberType() {
        switch(response.member_type) {
            case 'Engineer':
                // TODO: invoke renderEngineer() here? or create new Employee? 🤔 
                // ? then appendFile()?
                console.log('Engineer')
                break;
            case 'Intern':
                console.log('intern');
                break;
        }
    }

    fs.writeFile('./index.html', htmlTemp, (err) => {
        err ? console.error(err) : console.log('File Written!');
    });
}
