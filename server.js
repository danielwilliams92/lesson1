/**
 * Created by ztr on 2016-09-07.
 */
//link to the node http library
var http = require('http');

// use callback to start an http server


//event loop
http.createServer(function(request, response)
    {
        //start the http server with access to the request & response objects
        response.writeHead(200);
        response.end('first node page');
    }
                ) .listen(3000);

console.log('Server is running on port 300');