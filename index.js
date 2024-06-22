const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({title, description, installation, usage, credits, license, tests, email}) =>
  `# ${title}\n
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
      name: 'email',
      message: 'Enter email address:'
    }
  ]).then((info) => {
    
    if (info.license === 'Microsoft Public License') {
      info.license = 'Microsoft Public License';
    } else if (info.license === 'MIT') {
      info.license = 'MIT';
    } else {
      info.license = 'ISC';
    }

    const readMeContent = generateReadme(info);

    fs.writeFile('READMEtest.md', readMeContent, (err) => err ? console.log(err) : console.log('README created')
    ); 
  });