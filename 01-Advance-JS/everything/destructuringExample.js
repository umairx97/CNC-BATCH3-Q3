// DESTRUCTURING ARRAY

/** ************************************************ */
// Try any part one at a time

const myArray = ['Umair', 'Ahmed', 2]

const [firstName, lastName, degrees] = myArray

console.log(firstName)
console.log(lastName)
console.log(degrees)

const sentence = `${firstName} ${lastName} has ${degrees} Masters degrees.`

console.log(sentence)
// RESULT:
// Umair
// Ahmed
// 2
// Umair Ahmed has 2 Masters degrees.

// /************************************************** */
// let myArray = ["Umair","Ahmed",2]

// let [firstName, lastName] = myArray

// console.log(firstName)
// console.log(lastName)
// console.log(degrees)

// let sentence = `${firstName} ${lastName} has ${degrees} Masters degrees.`

// console.log(sentence)
// // RESULT:
// // Umair
// // Ahmed
// // degrees is not defined

// /************************************************** */
// DESTRUCTURING OBJECT

// let myObject = {firstName: "Umair", lastName: "Ahmed", degrees: 2}

// console.log(myObject.firstName)
// console.log(myObject.lastName)
// console.log(myObject.degrees)

// let {firstName, lastName, degrees} = myObject

// console.log(firstName)
// console.log(lastName)
// console.log(degrees)

// let sentence = `${firstName} ${lastName} has ${degrees} Masters degrees`

// console.log(sentence)
// Umair
// Ahmed
// 2
// Umair
// Ahmed
// 2
// Umair Ahmed has 2 Masters degrees.

// /************************************************** */

// let myObject = {firstName: "Umair", lastName: "Ahmed", degrees: 2}

// console.log(myObject.firstName)
// console.log(myObject.lastName)
// console.log(myObject.degrees)

// let {firstName, lastName} = myObject

// console.log(firstName)
// console.log(lastName)
// console.log(degrees)

// let sentence = `${firstName} ${lastName} has ${degrees} Masters degrees`

// console.log(sentence)
