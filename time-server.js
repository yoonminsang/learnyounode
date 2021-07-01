const net = require('net');
const fillZero = (i) => {
  return i < 10 ? '0' + i : i;
};
const getDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = fillZero(now.getMonth() + 1);
  const date = fillZero(now.getDate());
  const hour = fillZero(now.getHours());
  const min = fillZero(now.getMinutes());
  return year + '-' + month + '-' + date + ' ' + hour + ':' + min;
};
const server = net.createServer((socket) => {
  socket.end(getDate() + '\n');
});
server.listen(process.argv[2]);
