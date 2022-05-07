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
const generateMarkdown = (questions) => {
  return `
  # ${projName}

    ${projectDesc}
    
    ### Table of Contents
    
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [(#
    
    ### Installation

    ${installInst}
    
    ### Usage

    ${usageInfo}
    
    ### License

    ${licenseOptions}
    
    ### Contributing

    ${contGuide}
    
    ### Tests

    ${testInst}
    
    ### Questions

    GitHub: [${gHUser}](https://github.com/${gHUser})  
    Email: ${emailAddress}  
    ${contactInst}
`;
}

module.exports = generateMarkdown;
