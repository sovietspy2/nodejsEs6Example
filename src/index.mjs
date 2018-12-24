import * as http from "http";
import { hostname } from "os";

const host = '127.0.0.1';
const port = '1234';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello there :)');
});

server.listen(port,host, ()=> {
    console.log('Started');
});

