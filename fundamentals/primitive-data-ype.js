
var a = "gauri"
var b = 10
var c = true
var d;
var e = null;

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e));// notice that typeof null is always an object with single propery null and value as null


// JS is dynamically typed language unlike Java,
//where you have define the data type in first place
//and cannot change the value stored later

console.log("Dynamically typed Language")

var f = "String"
console.log(typeof(f))
f = 10
console.log(typeof(f))
f = false
console.log(typeof(f))
f = null;
console.log(typeof(f))


// Why the heck do we have null & undefined
// undefined is for computer to tell that this variable has not been defined yet
// null is for humans/ programmers to tell that this variable has no value at present

console.log("null === undefined")
var g = undefined

console.log(typeof(g))
var h = null;
console.log(typeof(h))
