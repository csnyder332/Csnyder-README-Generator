//node
const inquirer = require(inquirer);
const fs = require('fs');
const util = require('util');

//inquirer
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Project title?',
            name: 'title',
            validate: (value) => {if (value){return true} else {return 'Enter an Value'}},
        }
    ]
)
