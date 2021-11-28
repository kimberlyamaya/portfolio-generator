// use this at top of file in order to use file system functions/modules
const fs = require('fs');

// added the generatePage function to the page-template.js and now we're making the connection
// using this require
const generatePage = require('./src/page-template.js');

// holds user command-line arguments
const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!')
});

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