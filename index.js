/* CRITERIA
    application generates a README file with the following:
        project title
            input: project title
                description
                table of contents
                    contains links directing Users to corresponding section of the README
                installation
                    input: installation instructions
                usage
                    input: usage information
                license
                    license notice
                contributing
                    input: contribution guidelines
                tests
                    input: test instructions
                questions
                    input: GitHub username, email address
                    link to GitHub profile
                    instructions on how to contact via email
    choosing a license will place a badge for that license near the top of the README */
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/template.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'projectDesc',
            message: 'Please provide a description of your project.  The length of this section is up to you!'
        },
        {
            type: 'input',
            name: 'installInst',
            message: 'Please provide installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Please provide usage details for your project.'
        },
        {
            type: 'checkbox',
            name: 'licenseOptions',
            message: 'Please select a License for your project from the options below.',
            choices: ['Apache License 2.0', 'BSD 3-Clause', 'GNU General Public License (GPL) v3', 'MIT License', 'Mozilla Public License 2.0']
        },
        {
            type: 'input',
            name: 'contGuide',
            message: 'Please provide contribution guidelines for Users.'
        },
        {
            type: 'input',
            name: 'testInst',
            message: 'Please provide testing instructions for Users.'
        },
        {
            type: 'input',
            name: 'gHUser',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your email address?'
        },
        {
            type: 'confirm',
            name: 'contactQ',
            message: 'Would you like to provide Users with instructions on contacting you via email?',
            default: true
        },
        {
            type: 'input',
            name: 'contactInst',
            message: 'Please provide instructions for contacting you via email.',
            when: ({ contactQ }) => {
                if (contactQ) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('dist/README.md', generateMarkdown());
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions()
.then(writeToFile);
