const express = require("express")

const app = express()
const port = 3000

app.get("/ping", (req,res) => {
    res.status(200).json({message : "Pong", status : "server is up and running"})
})

app.listen(port, () => console.log("Server is up and running"))