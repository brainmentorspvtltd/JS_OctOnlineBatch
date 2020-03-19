const express = require("express")

const app = express()

// app.use((req, res, next) => {
//     console.log("First middleware..")
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Second middleware")
//     res.send("<p>Assignment solved (almost!)</p>")
// })

app.use('/users', (req, res, next) => {
    console.log("users middleware")
    res.send("<p>The middleware that handles just /users</p>")
})

app.use('/', (req, res, next) => {
    console.log("/ middleware");
    res.send("<p>The middleware that handles just /</p>")
})

app.listen(3000)




/*
What and Why?

Server logic is complex!

You want to focus on your Business Logic, not on the nitty gritty Details!

Use a framework for the Heavy Lifting!

Framework : Helper functions, tools * rules that help you build your application!

Alternatives to Express.js - Vanilla Node.js, Adonis.js, Koa, Sails.js, ...
*/