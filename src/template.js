const questions = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.projectName}

    ${data.projectDesc}
    
    ### Table of Contents
    
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
    
    ### Installation

    ${data.installInst}
    
    ### Usage

    ${data.usageInfo}
    
    ### License

    ${data.licenseOptions}
    
    ### Contributing

    ${data.contGuide}
    
    ### Tests

    ${data.testInst}
    
    ### Questions

    GitHub: [${data.gHUser}](https://github.com/${data.gHUser})  
    Email: ${data.emailAddress}  
    ${data.contactInst}
`;
}

module.exports = generateMarkdown;
