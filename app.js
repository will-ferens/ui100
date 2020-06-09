const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config()

const directoryPath = path.join(__dirname, 'public');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to read directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // fetching each page from files
        app.get('/', function(req, res) { 
            res.sendFile(file + '/index.html'); 
        })
    });
});

app.listen( 8080, function() {
    console.log('howdy');
});