// PRIMITIVE DATA TYPE
let person = "Gauri"
let anotherPerson = person;

person = "Shankar"

console.log("anotherPerson --> "+anotherPerson)
console.log("person --> "+person)


// REFERENCE DATA TYPE

let personObject = {"name" : "Gauri"}
let anotherPersonObject = personObject;

personObject.name = "Shankar"

console.log("personObject -- >", personObject)
console.log("anotherPersonObject -- >", anotherPersonObject)

// IN Reference Data type I copied the  personObject into anotherPersonObject, and
// changed the name property in the personObject, this got reflected in anotherPersonObject also, due to reference data type
