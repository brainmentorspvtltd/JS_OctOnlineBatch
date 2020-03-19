const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(express.static(path.join(__dirname, 'public')))

// app.use((req, res, next) => {
//     console.log("In the middleware!")
//     next(); //Allows the request to continue to the next middleware in line
// })

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// app.use('/', (req, res, next) => {
//     console.log("This always runs!!")
//     next();
// })

// app.use('/add-product', (req, res, next) => {
//     console.log("In Add Product middleware!")
//     res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>")
// })

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// })

// app.use('/', (req, res, next) => {
//     console.log("In another middleware...")
//     res.send("<h1>Hello from Express.js</h1>")
// })

// const server = http.createServer(app)

app.listen(3000);


//Create a npm project and install Express.js (Nodemon if you want)
//Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and return one response
//Handle requests to "/" and "/users" such that each request only has one handler / middleware that does something with it (e.g. send dummy reponse)