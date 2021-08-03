var http = require('http')

var server = http.createServer(handle);

function handle(req,res){
    console.log(req.headers)
    console.log(req.method , req.url);
    res.end("welcome");
}
server.listen(4000, () => {
    console.log("")
})