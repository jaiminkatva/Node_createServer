// http is a modual of a node js.
var http = require('http');
//craete server
http.createServer(function(req, res) {
    res.end("Hello Node js");
}).listen(3000);
console.log("Server Started http://127.1.0.0:3000");
// 3000 is a port number you can use any port for run this 
// program but you must know which port is availble in you pc.
