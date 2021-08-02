var http = require('http');

// http.createServer((request,response) => {
//    console.log(request,response)
//    response.end("welcome")
// }).listen(3000, "localhost")

var server = http.createServer(handle)

function handle(req,res){
    res.end("welcome")
}

server.listen(4000,() => {
    console.log("server listening on port 4000")
})