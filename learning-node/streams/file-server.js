const fs = require('fs');

const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./big', (error, data) => {
    if (error) {
      console.log('error', error);
    }
    res.end(data);
  });
});
server.listen(3000);
