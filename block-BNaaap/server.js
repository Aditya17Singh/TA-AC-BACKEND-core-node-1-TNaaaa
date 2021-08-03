var http = require("http")

var server = http.createServer(handle)

function handle(req,res){
    console.log(req.method)
    res.statusCode = 201
    res.setHeader("Content-type" , "text/html")
    res.end("<h1>welcome</h1>")
}

server.listen(4444,() => {
    console.log("server listening on post")
})