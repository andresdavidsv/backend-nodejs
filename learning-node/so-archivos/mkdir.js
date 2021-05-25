const fs = require('fs');

fs.mkdir('curso/js/node', { recursive: true }, (error) => {
  if (error) {
    return console.log(error);
  }
});
