const inquirer = require('inquirer');

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
      name: 'table of contents',
      message: ''
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
      name: 'contributing',
      message: 'Who contributed to this project? '
    },
    {
      type: 'input',
      name: 'tests',
      message: ''
    },
    {
      type: 'input',
      name: 'questions',
      message: ''
    }
  ]);