const http = require('http');

const PORT = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot draait');
  })
  .listen(PORT, '0.0.0.0', () => {
    console.log(`Keepalive-server luistert op poort ${PORT}`);
  });
