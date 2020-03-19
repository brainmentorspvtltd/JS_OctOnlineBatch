/*
1. Spin up a Node.js server (on port 3000)
2. Handle two routes '/' and '/users'
    Return some greeting text on '/'
    Return a list of dummy users for '/users'
    (e.g. <ul><li>User 1</li></ul>)
3. Add a form with a "username" <input> to the '/' page and submit a POST request to '/create-user' upon a button click
4. Add the '/create-user route and parse the incoming data (i.e. the username) and simply log it to the console
*/

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url == '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Assignment</title></head>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url == '/users'){
        res.setHeader('Content-Type', "text/html")
        res.write('<html>')
        res.write('<head><title>Assignment</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>')
        return res.end();
    }
    if (url == '/create-user' && method == 'GET'){
        res.statusCode = 405
        res.write("<html>")
        res.write("<head><title>Error</title></head>")
        res.write("<body><h4>You should not be here!!</h4></body>")
        res.write("</html>")
        return res.end()
    }
    if(url == '/create-user' && method == "POST"){
        const body = []
        req.on("data", chunk => {
            body.push(chunk)
        })
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split("=")[1])
        })
        res.statusCode = 302
        res.setHeader("Location", '/')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Assignment</title></head>')
    res.write('<body><h1>Hello From Node.Js!</h1></body>')
    res.write('</html>')
    res.end();
})

console.log("Server started...")

server.listen(3000);