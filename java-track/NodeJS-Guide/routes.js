const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == '/') {
        console.log("Home page route activated...")
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message' placeholder='Enter message'><button type='submit'>Submit</button></form></body>")
        res.write("</html>");
        return res.end();
    }

    if (url == '/message' && method == 'GET') {
        res.statusCode = 405
        res.write("<html>")
        res.write("<head><title>Error</title></head>")
        res.write("<body><h6>You should not be here!!</h6></body>")
        res.write("</html>")
        return res.end()
    }

    if (url == '/message' && method == 'POST') {
        const body = [];
        let email = "";
        req.on("data", chunk => {
            console.log(chunk)
            body.push(chunk)
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString()
            // console.log(parsedBody + " " + email)
            const message = parsedBody.split("=")[1]
            fs.writeFile("message.txt", "modified message is - " + message, err => {
                console.log("file has been written")
                console.log("Response started")
                res.statusCode = 302;
                res.setHeader('Location', '/')
                console.log("response ended " + email)
                return res.end()
            })
        });
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from Node.js</h1></body>")
    res.write("</html");
    res.end();
}

// module.exports = requestHandler
// module.exports.handler = requestHandler;
// exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};