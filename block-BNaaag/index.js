var path = require("path")
var os = require("os")

var filePath = path.join(__dirname, "content.md");
console.log(filePath)

function sum(a,b){
    return a + b
}
console.log(sum(10,20))

console.log("first")
function sum1(a,b){
    setTimeout(() => {
        console.log("second")
    },2000)
   return a + b
}
console.log(sum1(10,20))

