// // var http = require('http'),
// //     fs = require('fs');
// //
// //
// // fs.readFile('./index.html', function (err, html) {
// //     if (err) {
// //         throw err;
// //     }
// //     http.createServer(function(request, response) {
// //         response.writeHeader(200, {"Content-Type": "text/html"});
// //         response.write(html);
// //         response.end();
// //     }).listen(8080);
// // });
//
//
// var port = 8080;
// var serverUrl = "localhost";
//
// var http = require("http");
// var path = require("path");
// var fs = require("fs");
//
// console.log("Starting web server at " + serverUrl + ":" + port);
//
// http.createServer( function(req, res) {
//
//     var now = new Date();
//
//     var filename = req.url || "index.html";
//     var ext = path.extname(filename);
//     var localPath = __dirname;
//     var validExtensions = {
//         ".html" : "text/html",
//         ".js": "application/javascript",
//         ".css": "text/css",
//         ".txt": "text/plain",
//         ".jpg": "image/jpeg",
//         ".gif": "image/gif",
//         ".png": "image/png",
//         ".ico": "image/png"
//     };
//     var isValidExt = validExtensions[ext];
//
//     if (isValidExt) {
//         localPath += filename;
//
//         fs.exists(localPath, function(exists) {
//             if(exists) {
//                 console.log("Serving file: " + localPath);
//                 getFile(localPath, res, ext);
//             } else {
//                 console.log("File not found: " + localPath);
//
//                 if(ext === 'text/html'){
//                     getFile(__dirname + '/404.html', res, ext);
//                 }
//             }
//         });
//
//     } else {
//          console.log("Invalid file extension detected: " + ext)
//          getFile(__dirname + '/index.html', res, 'text/html');
//     }
//
// }).listen(port, serverUrl);
//
// function getFile(localPath, res, mimeType) {
//     fs.readFile(localPath, function(err, contents) {
//         if(!err) {
//             res.setHeader("Content-Length", contents.length);
//             res.setHeader("Content-Type", mimeType);
//             res.statusCode = 200;
//             res.end(contents);
//         } else {
//             res.writeHead(500);
//             res.end();
//         }
//     });
// }

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/grid.css'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/engine/Keyboard.css'));
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/engine/Keyboard.js'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/test.js'));
});

//add the router
app.use('/', router);

app.use(express.static(__dirname + '/engine'));
//Store all JS and CSS in Scripts folder.


app.listen(process.env.port || 8080);

console.log('Running at Port 8080');





// var app = require('express');
//
// app.createServer(function (req, res) {
//     fs.readFile(__dirname + '/index.html',
//         function (err, data) {
//             res.writeHead(200);
//             res.end(data);
//         });
// }).listen(8080, '192.168.8.100');
//
// app.get('/script', (req,res) => {
//     res.sendFile("test.js");
// });
//
// app.get('/css', (req, res) => {
//     res.sendFile("grid.css");
// });
