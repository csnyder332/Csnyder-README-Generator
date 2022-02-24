

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  //sections of README
  return `# ${questions.title}
  
  
  ## Badges
  ![badge](https://img.shields.io/badge/license-${questions.license}-yellow)<br />
  ${renderLicenseBadge(questions.license)}
  ## Description
  ${questions.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Features](#features)
  - [Tests](#tests)
  - [questions?](#Questions)
  - [License](#license)
  
  ## Installation
  ${questions.installation}

  ## Usage
  ${questions.usage}

  ## Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ${questions.contributing}


  ## Features
  ${questions.features}

  ## Tests
  ${questions.tests}

  ## Questions?
  
  Github: [${questions.username}](https://github.com/${questions.username})
  email: ${questions.email}

  ## License
  ![NPM](https://img.shields.io/npm/l/inquirer)
  
  
  `;
}
module.exports = generateMarkdown;