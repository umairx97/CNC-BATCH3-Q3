// LET

// Excellent article on LET, CONST, Variable
// https://andy-carter.com/blog/variable-scope-in-modern-javascript

/** ************************************************ */
// Try any part one at a time

var x = 10
console.log(x) // Result: 10
{
  const x = 2
  console.log(x) // Result: 2
}
console.log(x) // Result: 10

/** ************************************************ */

// let myname = "Umair"

// console.log(myname)  //Result: Umair

// function getName() {
//     let myname = "Ahmed"
//     console.log(myname) //Result: Ahmed
// }

// getName()

// console.log(myname)  //Result: Umair

/** ************************************************ */

// let myname          // Declare variable
// myname = 'Umair';   // Initialize variable
// console.log(myname) // result: Umair

/** ************************************************ */

// let myname          // Declare variable
// console.log(myname) // result: Undefined
// myname = 'Umair';   // Initialize variable

/** ************************************************ */

// myname = 'Umair';   // Initialize variable
// console.log(myname) // result: ERROR: myname is not defined
// let myname          // Declare variable

/** ************************************************ */

// myname = 'Umair';   // Initialize variable
// let myname          // Declare variable
// console.log(myname)// result: ERROR: myname is not defined
