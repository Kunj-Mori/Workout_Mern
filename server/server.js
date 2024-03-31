// Import module
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/api")
require("dotenv").config()
const PORT = 3000;
const server = express()
const MONG_URI = "mongodb://localhost:27017";

// const { PORT, MONG_URI } = process.env

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(function(req, res, next) {
    console.log(req.path, req.method)
    next()
})

server.use("/api", router)

mongoose.connect(MONG_URI)
    .then(function() {

        server.listen(PORT, function() {
            console.log(`Server is listening on http://localhost:${PORT}`)
        })
    })
    .catch(function(error) {
        console.log(error)
    })
