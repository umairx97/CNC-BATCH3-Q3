//SPREAD OPERATOR

/************************************************** */
// Try any part one at a time

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }


console.log(x)  // Result: 1
console.log(y)  // Result: 2
console.log(z)  // Result: {a: 3, b: 4}

let n = { x, y, ...z }

console.log(n)  // Result: {x: 1, y: 2, a: 3, b: 4}

console.log(x) // Result: 1
console.log(y) // Result: 2
console.log(z) // Result: {a: 3, b: 4}





// /************************************************** */
// let { y, x, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x) // Result: 1
// console.log(y) // Result: 2
// console.log(z) // Result: {a: 3, b: 4}



// /************************************************** */
// let { x, newY, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x)      // Result: 1
// console.log(newY)   // Result: undefined    
// console.log(z)      // Result: {y: 2, a: 3, b: 4}

