const number = process.argv.reduce((acc, cur, idx) => {
  if (idx < 2) return acc;
  return acc + +cur;
}, 0);
console.log(number);
