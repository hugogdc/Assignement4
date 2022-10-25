const express = require('express');
const path = require("path");
const app = express();

function numberOfChar(name){
    return name.length
}

// serve the static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
    console.log();
});
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "style.css"))
});
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "script.js"))
});
app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "video.html"));
    console.log();
});

// serve the json info with the lenght associated to the sent name
app.get('/getLength', function(req, res) {
    console.log(req.query);
    var reqJson = req.query.name;
    var result = JSON.stringify({name:reqJson, lenght:reqJson.length});
    console.log("Sending  : " + result);
    res.send(result);
});


var port = 3000;
app.listen(port, function(){
    console.debug("Server listening in port : " + port);

})

