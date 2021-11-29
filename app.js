const inquirer = require('inquirer');

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])
.then (answers => console.log(answers));

// use this at top of file in order to use file system functions/modules
//const fs = require('fs');

// added the generatePage function to the page-template.js and now we're making the connection
// using this require
//const generatePage = require('./src/page-template.js');

// holds user command-line arguments
//const pageHTML = generatePage(name, github)

/*fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!')
})*/

/*// notice the lack of parentheses around the 'profileDataArr' parameter?
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================')

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem))
};

printProfileData(profileDataArgs)*/