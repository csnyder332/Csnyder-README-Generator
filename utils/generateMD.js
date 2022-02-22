// Create a function that returns a license badge based on which license is passed in


const licenseArr = ['AUR', 'Github', 'NPM',]

function renderLicenseBadge(lice) {
  if (lice===licenseArr[0]) {
    return '![AURlicense](https://img.shields.io/aur/license/android-studio)'
  } else if (lice===licenseArr[1]) {
    return '![GitHub](https://img.shields.io/github/license/${questions.username}/repo-name)'
  } else if (lice===licenseArr[2]) {
    return '![NPM](https://img.shields.io/npm/l/inquirer)'
  } else {
    return ''
  }
}







// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://wiki.archlinux.org/title/Arch_User_Repository)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://github.com/)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://www.npmjs.com/)`
  } else {
    return ''
  }
}
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  
  return `# ${questions.title}

  ## Badges
  ${renderLicenseBadge(questions.lice)}

  ## Description
  ${questions.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributers](#contributing)
  - [Features](#features)
  - [Tests](#tests)
  - [Questions?](#Questions)
  - [License](#license)
  
  ## Installation
  ${questions.installation}

  ## Usage
  ${questions.usage}

  ## Contributors
  ${questions.contributing}


  ## Features
  ${questions.features}

  ## Tests
  ${questions.tests}

  ## Questions?
  
  Github: [${questions.username}](https://github.com/${questions.username})
  email: ${questions.email}

  ## Licenses
  ${renderLicenseLink(questions.lice)}
  
  `;
}
module.exports = generateMarkdown;