const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs; //ES6 feature called assignment destructuring, it assigns elements of an array to variable names in a single expression

  //reference 9.2.5
  fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
  

