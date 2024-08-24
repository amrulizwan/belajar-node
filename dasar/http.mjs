import http from 'http';
const url = 'http://localhost:3000';

const request = http.request(
  url,
  {
    method: 'POST',
    headers: {
      'Content-Typere': 'application/json',
      Accept: 'application/json',
    },
  },
  (response) => {
    response.addListener('data', (data) => {
      console.info(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: 'Amrul',
  lastName: 'Izwan',
});

request.write(body);
request.end();
