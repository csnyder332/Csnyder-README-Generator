// Create a function that returns a license badge based on which license is passed in

const licenseArr = ['AUR', 'Github', 'NPM',]

function renderLicenseBadge(license) {
  if (license===licenseArr[0]) {
    return '(https://img.shields.io/aur/license/android-studio)'
  } else if (license===licenseArr[1]) {
    return '(https://img.shields.io/github/license/${questions.username}/repo-name)'
  } else if (license===licenseArr[2]) {
    return '(https://img.shields.io/npm/l/inquirer)'
  } else {
    return ''
  }
}
// // function renderLicenseBadge(questions) {
//   let lice = questions; 
//   let yourLicense = ''
//   if(lice === 'AUR') {
//     yourLicense = '![AURlicense](https://img.shields.io/aur/license/android-studio)'
//   } else if (lice === 'Github') {
//     yourLicense = '![GitHub](https://img.shields.io/github/license/${questions.username}/repo-name)'
//   } else if (lice === 'NPM') {
//     yourLicense = '![NPM](https://img.shields.io/npm/l/inquirer)'
//   } else {
//     return ''
//   }
//   renderLicenseBadge();
//   return yourLicense;
// };


//function for license links
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