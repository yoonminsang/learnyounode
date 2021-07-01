const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;

const printResults = () => {
  results.forEach((result) => {
    console.log(result);
  });
};

const httpGet = (idx) => {
  http.get(process.argv[2 + idx], (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) return console.error(err);
        results[idx] = data.toString();
        count++;
        if (count === 3) printResults();
      })
    );
  });
};
for (let i = 0; i < 3; i++) {
  httpGet(i);
}
