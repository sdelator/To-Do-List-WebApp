const express = require("express");
const app = express();
var bodyParse = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParse.urlencoded({extended:true}));

//array of things to do
var toDoList = [
    "wash the car",
    "do laundry",
    "make dinner"
]



//express routes here
//default route
app.get("/", function (req, res) {
    res.render("index.ejs", {toDoList: toDoList});
});

//submit button route
app.post("/newtodo", function(req, res){
    console.log("item submitted!");
    var item = req.body.item;
    toDoList.push(item);
    res.redirect("/");
});

//catch all other routes
app.get("*", function(req, res){
    res.send("<h1>Invalid Page</h1>")
});

//server listening on port 3000
app.listen(3000, function(){
    console.log("server started on port 3000");
})