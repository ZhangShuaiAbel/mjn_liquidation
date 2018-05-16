var express = require('express');
var router = express.Router();
var http = require('http');  
var url=require('url');  

/* GET users listing. */
router.get('/', function(req, res, next) {
    
  http.createServer(function (request, response) {  
        var pathname = url.parse(request.url).pathname;  
        var content = '';  
        var opt = {  
             host:'192.168.150.95',  
             port:'8080',  
             method:'GET',  
             path:pathname  
        };  
        var req = http.request(opt, function(res) {  
            res.on('data',function(body){  
                console.log('return');  
                content+=body;  
            }).on("end", function () {  
                response.writeHead(200, {'Content-Type': 'text/html'});  
                response.write(content);  
                response.end();  
            });  
        }).on('error', function(e) {  
            console.log("Got error: " + e.message);  
        });  
        req.end();  
    })
});

module.exports = router;
