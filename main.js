const express = require("express")
const mongoose = require("mongoose")
const routes = require("./internal/route/route.js")
require("dotenv").config()

const uri = process.env.URI
mongoose.connect(uri).then(() => console.log("Successfully Connected to Mongo")).catch((err) => console.log(err))

const app = express()
const port = 3000

app.use(express.json())

app.use("/blog",routes)

app.get("/ping", (req,res) => {
    res.status(200).json({message : "Pong", status : "server is up and running"})
})

app.listen(port, () => console.log("Server is up and running"))