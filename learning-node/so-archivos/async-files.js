const fs = require('fs');

const file = process.argv[2];

const content = fs.readFile(file, function (error, content) {
  if (error) {
    return console.log(error);
  }
  const lines = content.toString().split('\n').length;
  console.log(lines);
});
