SHORT-CIRCUIT EVALUATION && ||

Change gender value to see the different result
const gender = 'male'

let msg = (gender === 'female') && '&& Short-circuit'
console.log(msg)

msg = (gender === 'female') || '|| Short-circuit'
console.log(msg)

const value = console.log("working") || 10
console.log(value)

const secondVal = console.log("second console") && 10
console.log(secondVal)

if (console.log("second console") && 10) {
    console.log('yes')
} else {
    console.log('no')
}
