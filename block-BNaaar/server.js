var http = require("http");
var url = require('url')

var server = http.createServer(handle);
function handle(req,res){
    var parsedUrl = url.parse(req.url)
    var pathname = parsedUrl.pathname
   if(req.method === "GET" && req.url === "/"){
       res.write("Welcome to index page")
       res.end()
   }else if(req.method === "GET" && pathname === "/about"){
       res.setHeader('Content-Type' , 'text/html')
       res.end('<h1>About Page</h1>')
   }else{
       res.writeHead(404, {'Content-Type' : "text/html"})
       res.end("<h1>Page not Found</h1>")
   }
}

server.listen(3000 , () => {
    console.log("server list port 3000")
})