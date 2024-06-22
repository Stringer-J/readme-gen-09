const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({title, description, installation, usage, credits, license, tests, email}) =>
  `# ${title}\n
## *Table Of Contents:*
[1. Description](#Description:)\n
[2. Installation](#Installation:)\n
[3. Usage](#Usage:)\n
[4. Credits](#Credits:)\n
[5. License](#License:)\n
[6. Tests](#Tests:)\n
[7. Questions](#Questions:)\n
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
      type: 'input',
      name: 'license',
      message: 'What license does this repository use? '
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
    const readMeContent = generateReadme(info);

    fs.writeFile('READMEtest.md', readMeContent, (err) => err ? console.log(err) : console.log('README created')
    ); 
  });