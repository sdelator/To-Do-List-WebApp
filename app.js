const express = require("express");
const app = express();

app.set("view engine", "ejs");

//array of things to do
const toDoList = [
    "wash the car",
    "do laundry",
    "make dinner"
]



//express routes here
app.get("/", function (req, res) {
    res.render("index.ejs");
});



//server listening on port 3000
app.listen(3000, function(){
    console.log("server started on port 3000");
})