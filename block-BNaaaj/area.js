function getData(){
    console.log(rect(2,3))
    console.log(circle(2))
    console.log(square(2))
}

function rect(len,width){
    return len * width
}
function circle(rad){
    return 3.17 * 2 * rad
}

function square(side){
    return side * side
}
getData()