// import {PythonShell} from 'python-shell';
//
// alert("y");
//
//
// PythonShell.runString('x=1+1;print(x)', null, function (err) {
//     if (err) throw err;
//     console.log('finished');
//     alert("x");
// });
//import {PythonShell} from 'python-shell';
// let { PythonShell } = require("python-shell");
// PythonShell.defaultOptions = { scriptPath: '.' };
// let shell = new PythonShell('test.py');
//
// PythonShell.run('test.py', null, function (err) {
//     if (err) throw err;
//     console.log('finished');
//     alert("działa! :DDD");
// });
// function onLoad() {
//
//     alert("coś");
//     console.log("looog");
//
//     alert("coś2");
// }


var myPythonScriptPath = 'test.py';
const {PythonShell} = require("python-shell");
let pyshell = new PythonShell(myPythonScriptPath);

var options = {
    mode: 'text',
    args: ['my First Argument', 'My Second Argument', '--option=123']
};

PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});

// pyshell.on('message', function (message) {
//     // received a message sent from the Python script (a simple "print" statement)
//     console.log(message);
// });
//
// pyshell.end(function (err) {
//     if (err){
//         throw err;
//     };
//     console.log('finished');
// });
