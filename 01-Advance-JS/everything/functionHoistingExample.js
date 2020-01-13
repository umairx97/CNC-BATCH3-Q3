//FUNCTION HOISTING


let num = myFunction(5)
console.log(num)  // Result: 25

function myFunction(y) {
 return y * y;
}
