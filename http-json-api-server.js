const http = require('http');
const getParseTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
};
const getUnixTime = (time) => {
  return { unixtime: time.getTime() };
};
const server = http.createServer((req, res) => {
  const parsedURL = new URL(req.url, 'http://example.com');
  const time = new Date(parsedURL.searchParams.get('iso'));
  let result;
  if (/^\/api\/parsetime/.test(req.url)) result = getParseTime(time);
  else if (/^\/api\/unixtime/.test(req.url)) result = getUnixTime(time);
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(+process.argv[2]);
