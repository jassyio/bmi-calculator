const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    
    res.sendFile(__dirname + "/index.html"); 

});

app.post("/", function(req, res) {
    
var weight=Number(req.body.weight);
var height=Number(req.body.height);
var bmi=weight/(height*height);
console.log(bmi);
res.write('<p>Your BMI is:</p>');
    res.write(`<div id="result"><input type="number" name="bmi" readonly value="${bmi.toFixed(2)}"></div>`);
    res.end();
  
})

app.listen(4000, function () {
    console.log("server is up at port 4000");
})

