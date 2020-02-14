const express = require("express")
const app = express()
const path = require("path")

//app.use( express.static( __dirname + '/public' ));
app.use(express.static('public'));

app.get("/", (req, res) => {
   res.sendFile("./index.html")
})

app.get("/login", (req, res) => {
    console.log("sending res from", __dirname)
    res.sendFile(path.join(__dirname + '/public/login.html'));
 })

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})