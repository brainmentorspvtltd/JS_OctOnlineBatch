// fs - file system - used for file handling
// os - operating system - used for os-related tasks
// path - used for constructing absolute and relative paths
// http - hyper text transfer protocol - a protocol for transferring data which understood by browser and server - used for creating server also
// https - hyper text transfer protocol secure - http + data encryption (during transmission)

const fs = require('fs');
const http = require('http');
// const http = require("./http") //to import our local file
// const http = require("/Users/anmolrajarora/Documents/workspace/java-track/http")

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    const url = req.url;
    const method = req.method;

    if (url == '/'){
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message' placeholder='Enter message'><button type='submit'>Submit</button></form></body>")
        res.write("</html>");
        return res.end();
    }

    if (url == '/message' && method == 'GET'){
        res.statusCode = 405
        res.write("<html>")
        res.write("<head><title>Error</title></head>")
        res.write("<body><h6>You should not be here!!</h6></body>")
        res.write("</html>")
        return res.end()
    }

    if (url == '/message' && method == 'POST'){
        const body = [];
        let email = "";
        req.on("data", chunk => {
            console.log(chunk)
            body.push(chunk)
        });
        return req.on("end", () => {
            // const new_buffer = Buffer.concat(body);
            // console.log(new_buffer)
            const parsedBody = Buffer.concat(body).toString()
            // email = "ram@gmail.com"
            console.log(parsedBody + " " + email)
            const message = parsedBody.split("=")[1]
            // fs.writeFileSync("message.txt", message)
            // res.statusCode = 500
            fs.writeFile("message.txt", message, err => {
                // console.log(err)
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
    // res.write();
})

server.listen(3000);