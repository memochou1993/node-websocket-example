const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    console.log('received: %s', msg);
  });

  ws.send('Hello, world!');
});
