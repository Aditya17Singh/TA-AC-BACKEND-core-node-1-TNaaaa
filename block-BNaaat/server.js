var http = require("http");
var fs = require('fs')

var server = http.createServer(handle);

function handle(req,res){
   if(req.method === "GET" && req.url === "/"){
       res.write("Welcome to index page")
       res.end()
   }if(req.method === "GET" && req.url === "/about"){
       res.setHeader('Content-Type' , 'text/html')
       fs.createReadStream('./about.html').pipe(res)
   }
}

server.listen(3000 , () => {
    console.log("server list port 3000")
})