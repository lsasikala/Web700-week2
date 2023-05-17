console.log("Hello");

console.log(console);  //Diplays the type of object and all its functions

//console.hello();  // error

console.hello = function() {
    console.log("I am hello");;

}
console.log(console);
console.hello();


var add = function(a,b)
{
    return a = b
}

function arithmatic(fn, a, b)
{
    return fn(a,b)
}

var r = arithmatic(add,10,20)

console.log(r)
