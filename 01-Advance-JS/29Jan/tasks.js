// ***********************************
// TASK 1
// write an arrow function that reverses a set of numbers when passed as an argument
// Example x = 123456;
// Expected Output : 654321
// ***********************************

// ***********************************
// TASK 2
// Write an arrow function that takes in an array of country names and returns the name with the equal characters
// give the length yourself

// ***********************************

// ***********************************
// TASK 3
// write an arrow function that takes in two arguments;
// The first argument should be an array  of number if no array is provided default array of numbers can be used by the function itself
// the second argument should be a single digit from within the array
// the function should return the array or print it but it should not contain the number which was passed as a second argument
// ***********************************

// ***********************************
// TASK 4 (HINT: USE MAP ARRAY HELPER)

// const athleteData = [
//     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
//     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
//     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
//     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
//     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
//     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
//     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
//     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
//     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
//     { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
// ];

// Use the array of object given above and print the output as follows
// {athlete} in {team} earned {income} euros

// store the returned data in the variable given below the code should not exceed 4-5 lines
// const athleteIncomeStrings = 'Replace this message with your code!';

// ***********************************

// ***********************************
// TASK 5 (HINT: USE FILTER ARRAY HELPER)

// const athleteData = [
//     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
//     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
//     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
//     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
//     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
//     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
//     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
//     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
//     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
//     { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
// ];

// Use the array of object given above and print the name, team and income of those players
// whose income is greater than 7 digits
// store the returned data in the variable given below the code should not exceed 4-5 lines
// const results = 'Replace this message with your code!';

// ***********************************

// ***********************************
// TASK 6 (HINT: Combine array helpers)

// const athleteData = [
//     { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
//     { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
//     { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
//     { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
//     { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
//     { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
//     { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
//     { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
//     { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
//     { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
// ];
// Use the array of object given above and first check if a player income is greater than 10,000,000 euros
// and then print the following
// {player Name} is a great player

// store the returned data in the variable given below
// const popularPlayer = 'Replace this message with your code!';
// ***********************************

// ***********************************
// TASK 7
// Create an arrow function that takes 2 arguments and returns another arrow function inside an object as a key
// the nested arrow function should also return an object with the parameters as keys
// provided to the first arrow function

// ***********************************

// ***********************************
// TASK 8

// const myFunc = () => {
//   const obj = {
//     name: "umair",
//     age: 22,
//     profession: "Developer"
//   };

//   return obj;
// };

// console.log(myFunc().age);

// Is the above code functional? if yes then explain how

// ***********************************

// ***********************************
// TASK 8

// const arrayOfCourses = [
//   {
//     id: "CNC123",
//     courseName: "Cloud Native Computing"
//   },

//   {
//     id: "IOT123",
//     courseName: "Internet of things"
//   },
//   {
//     id: "AI123",
//     courseName: "Artificial Intelligence"
//   }
// ];

// const passedCourses = ["CNC123", "AI123"];

// use the data structure given above and solve the following scenario

// if id's in the passedcourses array match with any id in the arrayofcourses array then show the output
// at each iteration as follow

// You haved passed {id} {courseName}

// ***********************************

// ***********************************
// TASK 8

// const myFunc = () => {
//   const obj = {
//     name: "umair",
//     age: 22,
//     profession: "Developer"
//   };

//   return obj;
// };

// console.log(myFunc().age);

// Is the above code functional? if yes then explain how

// ***********************************

// ***********************************
// TASK 9

// What is the output of the following code below

// const arr = [
//   { id: 1, name: "umair" },
//   { id: 2, name: "asad" }
// ];

// const index = 2;
// const newObj = { id: 4, name: "shahbaz" };

// arr[index] = { ...newObj };

// console.log(arr);
// ***********************************

// ***********************************
// TASK 10

// const data = [
//   {
//     name: "Umair",
//     Amt: 100
//   },
//   {
//     name: "Asad",
//     Amt: 100
//   }
// ];

// use the array above as the main data structure and solve the following scenarios

/*
1. Create a functionality that adds a new user to our data array
with the default amount as 100 if no amount is explicitly provided

2. create a feature as such it allows us to remove a particular account
from our data just by passing in the account name

3. Create a feature that allows us to search a particular user from our
given array just by giving in the name or amount
*/
// ***********************************

// ***********************************
// TASK 11

// const week = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];
// let a = new Date();
// console.log(week[a.getDay()]);

// what is the ourput of the above code

// ***********************************
