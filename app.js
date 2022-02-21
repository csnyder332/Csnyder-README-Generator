//node packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMD');

//inquirer for questions
function questions() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Name for file?',
            name: 'file',
        },
        {
            type: 'input',
            message: 'Project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Descripton of project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Steps needed to install?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Instructions for use and screenshots.',
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: 'Choose applicable licenses?',
            name: 'license',
            choices: ['Apache', 'MIT', 'Mozilla', 'NPM', 'Github', 'Node',]
        },
        {
            type: 'input',
            message: 'List users contributing to this project.',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Any features to highlight?',
            name: 'features',
        },
        {
            type: 'input',
            message: 'Tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Enter Github username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'email',
        },
    ]
    )
};

//function to write README file
function writeToFile(file, data) {
    fs.appendFile(`${file}.md`, data,
        (err) => err ? console.error(err) : console.log(`${file}.md has been created!`))
}

//Create a function to initialize app
async function init() {
    let input = await questions();
    writeToFile((input.file), (generateMarkdown(input)));
}

// Function call to initialize app
init();