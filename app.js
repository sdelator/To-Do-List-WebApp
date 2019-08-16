const express = require("express");
const app = express();
var bodyParse = require("body-parser");
var mongoose = require("mongoose");
//mongoose connection
mongoose.connect("mongodb://localhost/todo");

app.set("view engine", "ejs");
app.use(bodyParse.urlencoded({extended:true}));

//mongoose schema 
var todoSchema = new mongoose.Schema({
    name: String
})

var Todo = mongoose.model("Todo", todoSchema);

// //array of things to do
// var toDoList = [
//     "wash the car",
//     "do laundry",
//     "make dinner"
// ]



//express routes here
//default route
app.get("/", function (req, res) {
    Todo.find({}, function(err, toDoList){
        if(err) console.log(err);
        else{
            res.render("index.ejs", {toDoList: toDoList});
        }
    })

});

//submit button route
app.post("/newtodo", function(req, res){
    console.log("item submitted!");
    var newItem = new Todo({
        name: req.body.item
    });
    Todo.create(newItem, function(err, Todo){
        if(err) console.log(err);
        else{
            console.log("Inserted item: " + newItem)
        }
    })
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