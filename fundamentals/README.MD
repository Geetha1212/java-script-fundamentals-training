
### What is an Object?

 * Object is un-orderd list of primitive data type (and sometimes reference data types) that is stored as a series of name-value pair.
 * Each item in the list is called a property .
 * Functions defined inside the objects are called as methods
 * PropertyName can be String or Number
  ```
     var myfirstObject = {
        "firstName" : "Gauri",
        "secondName": "Shankar",
        "1000": "value of Numeric Key. PropertyName can be Numeric"
      }
  ```  
   #### Accessing objects
   ```
        myfirstObject.firstName ——> Gauri
        myfirstObject["firstName"] ——> Gauri
        myfirstObject["1000"] ——> This is how to access a numeric key
   ```

   Example in [objects.js](objects.js)
   
### Reference Data Type and Primitive Data Type
  * Reference data type’s value is stored as a reference, it is not directly stored on the variable as a value as in the case of primitive data type.

  Example in [data-types.js](data-types.js)


### Creating Objects

 #### Object Literals
   * The most common and easiest way to create object is with object literal
 #### Object Constructor
   * The second most common way to create object is with constructor.
   * Constructor is nothing but a function used for initializing new objects.
   * use `new` keyword to call the constructor

   Example in [object-creation.js](object-creation.js)

### Pass By Value / Pass By Reference
  * In JS primitive values are passed by value and objects are passed by reference.
  * Even in pass by reference, you can just add , modify  a property of object.
  * You cannot replace the object itself completely as shown in the example.

  Example in [pass-by-value-or-reference.js](pass-by-value-or-reference.js)


### Data Types in Javascript
  * There are 6 different types in java script as below.
  * JS being a dynamically typed language, you can reassign data type value.
  * Undefined is for computers / processors null is for humans/ programmers

  <table>
    <tr>
      <td rowspan="5">Pass By Value</td>
      <td>String</td>
    </tr>
    <tr>
      <td>number</td>
    </tr>
    <tr>
      <td>boolean</td>
    </tr>
    <tr>
      <td>null</td>
    </tr>
    <tr>
      <td>undefined</td>
    </tr>
    <tr>
      <td>Pass By Reference</td>
      <td>Object</td>
    </tr>
  </table>
  
  Example in [primitive-data-ype.js](primitive-data-ype.js)
