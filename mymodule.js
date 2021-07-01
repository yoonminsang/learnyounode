const fs = require('fs');
const path = require('path');
module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    files = files.filter((file) => path.extname(file) === '.' + ext);
    return callback(null, files);
  });
};
