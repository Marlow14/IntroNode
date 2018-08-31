const http = require('http');

const server = http.createServer();
const port = 3131;

server.on('request', (request, response) => {
    response.end('Hello Planet!');
});

server.listen(3131, (err) => {  
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
    })