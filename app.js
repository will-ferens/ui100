const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        app.get('/', function(req, res) { 

            res.sendFile(file + '/index.html'); 
        })
    });
});

