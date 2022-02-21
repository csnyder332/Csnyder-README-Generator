// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}
  
  ## Description
  ${questions.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributers](#contributing)
  - [Features](#features)
  - [Tests](#tests)
  - [Questions?](#Questions)
  
  ## Installation
  ${questions.installation}

  ## Usage
  ${questions.usage}

  ## Licenses
  ${questions.license}

  ## Contributors
  ${questions.contributing}

  ## Features
  ${questions.features}

  ## Tests
  ${questions.tests}

  ## Questions?
  
  Github: [${questions.username}](https://github.com/${questions.username})
  email: ${questions.email}
  
  `;
}
module.exports = generateMarkdown;