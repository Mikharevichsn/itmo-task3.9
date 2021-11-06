const { readFile } = require('fs');
readFile('package.json', 'utf-8', (err, data) =>
  err ? console.log('error :(') : console.log(data)
);
