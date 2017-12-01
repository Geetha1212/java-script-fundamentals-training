//Object Literal Example

//let person = {};

let person = {
  "firstName": "Gauri",
  "lastName": "Shankar",
  "dateOfBirth": new Date("1/1/1991"),
  "age": function() {
    let calculatedAge = parseInt((new Date() - this.dateOfBirth) / (1000 * 60 * 60 * 24));
    console.log("age in days is "+calculatedAge)
    return calculatedAge;
  }
}

console.log(person.age())


//Object Constructor Example

var mango =  new Object ();
mango.color = "yellow";
mango.shape= "round";
mango.sweetness = 8;
​
mango.howSweetAmI = function () {
  console.log("Hmm Hmm Good");
}
