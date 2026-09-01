const http = require('http');
const { handler } = require('./netlify/functions/comment');

const server = http.createServer((req, res) => {
  // 将请求转发给 Waline handler
  handler(req, res, (err) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Waline server running on port ${PORT}`);
});
