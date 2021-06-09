const express = require("express");
const logsController = require("./controllers/logsController")

const app = express();

app.get("/", (req, res) => {
    res.send("welcome to the captain's log")
})

app.use("/logs", logsController)

app.get("*", (req, res) => {
    res.status(404).send("Page Not Found!")
})


module.exports = app