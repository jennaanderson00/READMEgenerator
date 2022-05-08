// packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/template.js');

// command line prompt to get User data
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
            type: 'list',
            name: 'license',
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

// export module
module.exports = questions;

// write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('dist/README.md', fileContent, err => {
            // if an error occurs, reject Promise and send the error to the catch method
            if (err) {
                reject(err);
                // return to ensure Promise does not execute the resolve function
                return;
            }
            // resolve Promise and send data to the then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// initialize app
questions()
.then((answers) => {
    return generateMarkdown(answers);
})
.then(generateMarkdown => {
    return writeFile(generateMarkdown);
});
