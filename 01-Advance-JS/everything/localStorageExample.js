// LOCAL STORAGE

localStorage.setItem('fname', 'Umair')
localStorage.setItem('lname', 'Ahmed')

const abc = localStorage.getItem('fname')

console.log(abc) // RESULT: Umair

localStorage.removeItem('fname')

localStorage.getItem('fname') // RESULT: nothing will be displyed

console.log(localStorage.key(0)) // RESULT: Google_experiment_mod (This value can be different)

console.log(localStorage.length) // RESULT: 4 (This value can be different)

localStorage.clear() // this line will remove all the data from local storage

console.log(localStorage.length) // RESULT: 0 (This value can be different)
