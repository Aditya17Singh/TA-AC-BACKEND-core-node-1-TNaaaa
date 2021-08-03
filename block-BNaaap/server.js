var http = require("http")

var server = http.createServer(handle)

function handle(req,res){
    res.statusCode = 201
    res.setHeader("content-type" , "text/html")
    res.end("<h1>welcome</h1>")
}

server.listen(4000,() => {
    console.log("server listening on post")
})