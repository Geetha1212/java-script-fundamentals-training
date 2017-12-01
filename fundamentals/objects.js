let myfirstObject = {
  "firstName" : "Gauri",
  "secondName": "Shankar",
  "1000": "value of Numeric Key. PropertyName can be Numeric"
}


console.log(myfirstObject.firstName)
console.log(myfirstObject["firstName"])
console.log(myfirstObject["1000"])
//will give error
//console.log(myfirstObject.1000)
