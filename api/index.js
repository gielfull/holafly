const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 2023

app.use(express.static("public"))
app.use(cors())

const kittensJSON = require("./db/kittens.json")

app.get("/", function (req, res) {
    res.send("Kittens API v2.0.2.3")
})

app.get("/api/kittens", function (req, res) {
    res.json(kittensJSON)
})

app.listen(port)
console.log("Server started at :" + port)
