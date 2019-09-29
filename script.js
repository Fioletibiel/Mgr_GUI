var canvas, ctx, center_x, center_y, img;

var express = require("express");

var app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

function initPage(){
  // canvas = document.getElementById("renderer");
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  // ctx = canvas.getContext("2d");
  // center_x = canvas.width / 2;
  // center_y = canvas.height / 2;
  //
  // img = new Image();
  // img.src = "images/logo.png";
  // ctx.drawImage(img, center_x-100, center_y-100);
  // window.requestAnimationFrame(initPage);
}

 document.onclick = myClickHandler;

 function myClickHandler() {
   //alert("The document was clicked!");
   window.location.href="database.html";
 }

 document.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    window.location.href="intro.html"
    return false;
}, false);
