const http = require('http');
const url = process.argv[2];
// http
//   .get(url, (res) => {
//     let data = '';
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => (data += chunk));
//     res.on('end', () => {
//       console.log(data.length);
//       console.log(data);
//     });
//   })
//   .on('error', console.error);
const bl = require('bl');
http.get(url, (res) => {
  res.pipe(
    bl((err, data) => {
      if (err) return console.error(err);
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
