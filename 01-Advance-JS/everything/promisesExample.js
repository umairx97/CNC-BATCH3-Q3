//  PROMISES


/*********************************************** */
// Promises prototype
//
// do not run this
//
//
// new Promise(function (fulfill, reject){
//     // Do something
//     if (success) {
//         resolve()
//     }
//     else if (failure) {
//         reject()
//     }
// }
//
/*********************************************** */


// Run following ONE at a time


const anyFunction = () => {
    return (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
}

const resolveFunction = () => console.log("success")
const rejectFunction = () => console.log("failure")

const result = new Promise((res, rej) => {
    setTimeout(() => (anyFunction() ? res() : rej()), 2000)
})

result.then(resolveFunction).catch(rejectFunction)
console.log("Hello world")

//RESULT:
//Hello world
// success OR failure (this result would depend on the value received from anyFunction result)




/*********************************************** */

// const anyFunction = () => {
//     return (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
// }

// const resolveFunction = () => console.log("success")
// const rejectFunction = () => console.log("failure")

// const result = new Promise((res, rej) => {
//     setTimeout(() => (anyFunction() ? res() : rej()), 2000)
// })

// const resultFromNewPromise = () => new Promise((res, rej) => {
//     console.log("second promise")
//     setTimeout(() => (anyFunction() ? res() : rej()), 2000)
// })

// result.then(resultFromNewPromise).then(resolveFunction).catch(rejectFunction)
// console.log("hello world")


//RESULT:
//Hello world  // first line
// second line of result could be indifferent combination
// if resultFromNewPromise return reject then result will be
// Failure

// if resultFromNewPromise return resolved then result will be
// second promise
// success OR failure (this result would depend on the value received from anyFunction result)