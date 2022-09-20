const port = 3000;
const http = require('http');

const app = http.createServer((req, res) => {
    console.log('Receive an incoming request');
    res.writeHead(200, {
        "Content-Type": 'text/html'
    });
    let responseMessage = "<h1>Hello, Universe!</h1>";
    res.write(responseMessage);
    res.end();
    console.log(`Send a response : ${responseMessage}`);
});
app.listen(port);
console.log(`The server is started and is listening on port ${port}`);