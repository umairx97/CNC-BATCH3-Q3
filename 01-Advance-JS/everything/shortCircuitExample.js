// SHORT-CIRCUIT EVALUATION && ||

// Change gender value to see the different result
const gender = 'male'

let msg = (gender === 'male') && '&& Short-circuit'
console.log(msg)

msg = (gender === 'female') || '|| Short-circuit'
console.log(msg)
