import net from 'net';

const server = net.createServer(function (client) {
  console.log('Client connected');
  client.on('data', (data) => {
    console.log(`${data.toString()}`);
    client.write(`Hello ${data.toString()}\r\n`);
  });
});

server.listen(3000, 'localhost');
