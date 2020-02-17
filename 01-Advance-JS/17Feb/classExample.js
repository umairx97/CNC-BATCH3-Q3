// // CLASS

class Message {
    static flag = "Pakistan"

    constructor(name1, name2) {
        this.flag = false
        this.fname = name1
        this.lname = name2
    }

    printMsg() {
        console.log(`Welcome ${this.fname} ${this.lname} ${this.flag}`)
        this.flag = true
        console.log(`Welcome ${this.fname} ${this.lname} ${this.flag}`)
    }
}

let abc = new Message("Umair", "Ahmed")
abc.printMsg()
console.log(Message.flag)
// xyz.printMsg()

// console.log(msg.flag, abc.flag)
// console.log(msg.fname, msg.lname)

// msg.fname = "Qassim"
// console.log(msg.fname, abc.fname)


// /*************************************************** */
// //
// //  CLASS INHERITANCE
// //
// //  uncomment when you want to run together with above code
// /*************************************************** */

// // class newMsg extends msg {
// //     constructor(fname, lname, city, country) {
// //         super(fname, lname)
// //         this.city = city
// //         this.country = country
// //     }

// //     printNewMsg() {
// //         console.log(`Welcome ${this.fname} ${this.lname} and ${this.city}, ${this.country}`)
// //     }
// // }

// // const newAbc = new newMsg("Zia", "Khan", "karachi", "pakistan")

// // newAbc.printMsg()
// // newAbc.printNewMsg()
