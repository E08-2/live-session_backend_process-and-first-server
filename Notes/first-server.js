// * Let's use Node.js to write our first web server!
// Goal: when we navigate to "localhost:3000" in the browser, we receive a response from the server!

// * 1. Import the "http" core module with "require" - "a Node.js version of ES6 imports"
// This module allows us to create a server!
const http = require("http");

// * 2. The http module has a method called "createServer"
// This method takes one argument - a "request" listener - a function triggered whenever a request is received
// The listener has two arguments - a request and a response object
// (Often shortened to "req" and "res")

const server = http.createServer((req, res) => {
    console.log("Request received!");
    
    // * 3. Use the request object to find out basic info about the request we received...
    // "What HTTP method did it use?"
    console.log(req.method);
    // "What URL did it use?"
    console.log(req.url);

    // * 4. As we saw before when sending fetch requests in React...
    // Every time a server receives a request, it should send back a response to the client!
    // * Now we are in charge of how to respond to a client's HTTP request!

    // * We can use the "res" object to build our response
    // The write() method lets us create the body of our response
    res.write("Hello world!");
    // The end() method says "We have finished making the response - now send it back to the client!"
    res.end();
});

// * 5. To start the server, we must call the "listen" method of the server object.
// This will create an event listener, which will listen for incoming requests
// The first argument is the port number to listen for request on...
// The second argument is a callback function, which logs a message when the server has started.
server.listen(3000, () => {
    console.log("Server has started on port 3000!");
})

// * 6. This will open up a local server on my machine (not exposed to the internet!)
// Now I can send requests to the server, and it can respond to those requests...

// Once you start your server, it will always be "on" - continuously listening for new requests.
// Unless you shut it down yourself, you won't be able to enter new commands in the command line.
// The server can handle multiple requests at the same time - very important for a real server!