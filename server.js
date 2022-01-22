var http = require('http');


http.createServer(function(req, res) {
    res.end("Hello Node js");
}).listen(3000);