// CONDITIONAL (TERNARY) OPERATOR


// Change gender value to see the different result
let gender = "male"


if (gender === "male") {
    console.log("Color is blue")
} else {
    console.log("Color is pink")
}

// Above if condition can be written in one line as following
gender === "male" ? console.log("Color is blue") : console.log("Color is pink")


// Above ternary operator can be written as follows
gender === "male"
    ? console.log("Color is blue")
    : console.log("Color is pink")


// Above ternary operator can be written as follows
gender === "male"
    ? console.log("Color is blue")
    : gender === "female"
        ? console.log("Color is pink")
        : console.log("Color is purple")

