console.log("Hello");

console.log(console);  //Diplays the type of object and all its functions

//console.hello();  // error

console.hello = function() {
    console.log("I am hello");;

}
console.log(console);
console.hello();
