var express = require('express');
var app = express();


app.get('/', function(req, res) {
    var os = req.headers['user-agent'].match(/\((.*?)\)/g)[0].slice(1,-1);
    var language = req.headers["accept-language"].match(/.+?(?=,)/)[0];
    var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
    res.json({
      'ipaddress': ip,
      'language': language,
      'software': os
    });
});

var port=Number(process.env.PORT || 3000);
app.listen(port);
console.log("Server is listening");
