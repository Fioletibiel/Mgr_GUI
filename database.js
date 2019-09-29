let {PythonShell} = require('python-shell')
var path = require("path")


function authorize_person(Name) {

  alert(Name);
  var city = document.getElementById("city").value

  var options = {
    scriptPath : path.join(__dirname, '/engine/'),
    args : [name]
  }

  let pyshell = new PythonShell('test.py', options);


  pyshell.on('message', function(message) {
    swal(message);
  })
  document.getElementById("city").value = "";
}
