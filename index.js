const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({title, description, installation, usage, credits, license,logo, tests, user,  email}) =>
  `# ${title}\n
${logo}\n
## *Table Of Contents:*
[1. Description](#description)\n
[2. Installation](#installation)\n
[3. Usage](#usage)\n
[4. Credits](#credits)\n
[5. License](#license)\n
[6. Tests](#tests)\n
[7. Questions](#questions)\n
## *Description:* 
${description}\n
## *Installation:* 
${installation}\n
## *Usage:* 
${usage}\n
## *Credits:* 
${credits}\n
## *License:* 
${license}\n
## *Tests:*
${tests}\n
## *Questions:*
[${user}'s GitHub page](https://github.com/${user})\n
Reach out to ${email} for further questions`;

inquirer
  .prompt([
    {
      message: 'Welcome to the README generator! Press ENTER to continue...',
      name: 'enterKey'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? '
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project: '
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions? '
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this repository? '
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does this repository use? ',
      choices: ['Microsoft Public License', 'MIT', 'ISC']
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who contributed to this project? '
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How would you test this repo?'
    },
    {
      type: 'input',
      name: 'user',
      message: 'What is your github user name? '
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter email address:'
    }
    ]).then((info) => {

    const info2 = Object.assign({}, info, {logo: ''});

    if (info2.license === 'Microsoft Public License') {
      info2.logo = '![MPL Logo](/microsoftpubliclicense.png)';
    } else if (info2.license === 'MIT') {
      info2.logo = '![MIT Logo](/mitlicenselogo.png)';
    } else {
      info2.logo = '![ISC logo](/isclicenselogo.png)';
    }

    const readMeContent = generateReadme(info2);

    fs.writeFile('READMEtest.md', readMeContent, (err) => err ? console.log(err) : console.log('README created')
    ); 
  });