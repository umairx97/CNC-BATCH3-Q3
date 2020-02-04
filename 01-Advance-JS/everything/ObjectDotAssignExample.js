// Object.assign

/** ************************************************ */
// Try any part one at a time

const obj1 = { fname: 'Umair' }
const obj2 = { lname: 'Ahmed' }

const newObj = Object.assign({}, obj1, obj2)

console.log('obj1', obj1) // RESULT: obj1 {fname: "Umair"}
console.log('obj2', obj2) // RESULT: obj2 {lname: "Ahmed"}
console.log('newObj', newObj) // RESULT: newObj {fname: "Umair", lname: "Ahmed"}

/** ************************************************ */

// let obj1 = {
//     fname: "Irfan",
//     lname: "Ali",
//     degrees: 2,
// }
// let obj2 = {
//     city: "Karachi",
//     country: "Pakistan",
//     gender: "male",
// }
// let obj3 = {
//     fname: "Umair",
//     lname: "Ahmed",
// }

// // first argument is target object and rest are sources
// let newObject = Object.assign(obj1, obj2, obj3)
// console.log("obj1", obj1)
// console.log("obj2", obj2)
// console.log("obj3", obj3)
// console.log("newObject", newObject)

// // RESULT:
// // obj1 {fname: "Umair", lname: "Ahmed", degrees: 2, city: "Karachi", country: "Pakistan", …}
// // obj2 {city: "Karachi", country: "Pakistan", gender: "male"}
// // obj3 {height: "5.9"", wieght: "69kgs"}
// // newObject {fname: "Umair", lname: "Ahmed", degrees: 2, city: "Karachi", country: "Pakistan", …}
