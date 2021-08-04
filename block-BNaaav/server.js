const { fstat } = require('fs');
var http = require('http')

var server = http.createServer(handle)

function handle(req,res){
    if(req.method === 'GET' && req.url === '/'){
        res.write('Wekcome to Index page')
        res.end()
    }
    if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('Content-Type' , 'text/html');
        fstat.readFile('./about.html' , (err,content) => {
            if(err) console.log(err)
            res.end(content)
        })
    }
}

server.listen(3000, () => {
    console.log('Server listen on port')
})