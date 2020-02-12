// THIS keyword

// Article to read
// https://alligator.io/js/this-keyword/
// https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c

// "this" is the global object in non-strict mode, and undefined in strict mode
// As a side note, variables declared with let or const at the global level are not
// stored in the global object, but instead in an inaccessible declarative environment
// record, so our following example will give us a different result when using
// let name = "Ahmed" instead of var name = "Ahmed"

// try replacing following var name = "Ahmed" with let name = "Ahmed" for differnt result
// make sure you close your browser window after changing var with let
// because when at first you declared "var name" it went to global window object
// and when you changed it to "let name", the "var name" in global window object is already
// present. so same value will produced even after changing var to let.
// So close to browser tab and open a new window for fresh global window object

var name = 'Ahmed'

const abc = {
  name: 'Umair',

  welcomeMsg: function () {
    return 'Welcome ' + this.name
  },
  welcomeMsgArrow: () => {
    return 'Welcome ' + this.name
  }
}
let msg = abc.welcomeMsg()
console.log(msg)

msg = abc.welcomeMsgArrow()
console.log(msg)
