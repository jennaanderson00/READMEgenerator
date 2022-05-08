// require index script with User data prompts
const questions = require('../index.js');

// generate license badge to match User license
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'GNU General Public License (GPL) v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return '';
  };
};

// generate license link to match User license
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return 'http://www.apache.org/licenses/';
  } else if (license === 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'GNU General Public License (GPL) v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  } else if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  } else {
    return '';
  };
}

// generate license section containing the name of the User license and link
function renderLicenseSection(license) {
  return license + ' ' + renderLicenseLink(license);
}

// generate markdown data based on User answers
const generateMarkdown = (data) => {
  return `# ${data.projectName} 
  ${renderLicenseBadge(data.license)}

  ${data.projectDesc}
    
  ### Table of Contents
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ### Installation

  ${data.installInst}
    
  ### Usage

  ${data.usageInfo}
    
  ### License

  ${renderLicenseSection(data.license)}
    
  ### Contributing

  ${data.contGuide}
    
  ### Tests

  ${data.testInst}
    
  ### Questions

  GitHub: [${data.gHUser}](https://github.com/${data.gHUser})  
  Email: ${data.emailAddress}  
  ${data.contactInst}`;
}

// export module
module.exports = generateMarkdown;
