//Is JS Pass by Reference or pass by value?
// In JS primitive values are passed by value
//and objects are passed by refernece



//pass by value


let name = "Gauri";

function changeName(name) {
  name = "Shankar"
}

changeName(name);

console.log("name ==> "+name); //notice the name does not get changed


//pass by reference

let person = {};
function changeName(personObject) {
  personObject.name = "Gauri"; // you can only add or remove properties to object. You cannot change the object itself
}
changeName(person);

console.log(person); // notice, the object has changes made


//pass by reference. DOES NOT ALLOW to change the object itself

let anotherPerson = {"name" :"Gauri"}

function modifyPersonObject(anotherPerson) {
  anotherPerson.name = "Shankar"; // you can only add or remove properties to object. You cannot change the object itself
  anotherPerson = {"age": 1001}; // Changing the object itself has no effect as seen in the console output
}
modifyPersonObject(anotherPerson)
console.log(anotherPerson)
