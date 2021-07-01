const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  // const readStream = fs.createReadStream(process.argv[3]);
  // let data = '';
  // readStream.on('data', (chunk) => {
  //   data += chunk;
  // });
  // readStream.on('end', () => res.end(data));
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(+process.argv[2]);
