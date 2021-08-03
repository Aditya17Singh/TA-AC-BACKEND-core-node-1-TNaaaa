var http = require('http');
var fs = require('fs')
var url = require('url')
var PORT = 2345

var server = http.createServer(handle)
function handle(req,res){
    var parsedUrl=  url.parse(req.url , true)
    console.log(parsedUrl.pathname,req.url)
    res.setHeader('content-type' , "application/json")
    res.end(JSON.stringify(parsedUrl.query))
}

server.listen(PORT , () => {
    console.log("listening port" + PORT)
})




// var http = require('http');

// var server = http.createServer(handle)
// function handle(req,res){
//    res.end("welcome")
// }

// server.listen("5000" , () => {
//     console.log("port 5000")
// })


