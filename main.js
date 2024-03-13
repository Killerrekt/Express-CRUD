const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const uri = process.env.URI
mongoose.connect(uri).then(() => console.log("Successfully Connected to Mongo")).catch((err) => console.log(err))

const app = express()
const port = 3000

app.get("/ping", (req,res) => {
    res.status(200).json({message : "Pong", status : "server is up and running"})
})

app.listen(port, () => console.log("Server is up and running"))