const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request received!");
    
    res.write("Hello server!");
    res.end();
})

server.listen(3001, () => {
    console.log("Server has started on port 3001!");
})