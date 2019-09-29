const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use(express.static(__dirname + '/'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/engine'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');
