// ***********************************************
// TASK 1 SOLUTION

// const getNum = num => {
//   num = num + "";
//   return num
//     .split("")
//     .reverse()
//     .join("");
// };

// console.log(getNum(1234567))

// ***********************************************
// TASK 2 SOLUTION

// const countries = ["Pakistan", "India", "Denmark", "Japan"];

// const getCountry = (country, len) => {
//   const filtered = country.filter(item => item.length === len);

//   console.log(filtered);
// };

// getCountry(countries, 5);

// ***********************************************
// TASK 3 SOLUTION

// const deleteNumber = (arr, digit) => {
//   const filtered = arr.filter(item => {
//     return item !== digit;
//   });

//   console.log(filtered);
// };

// const arr = [1, 2, 3, 4, 5, 6];

// deleteNumber(arr, 5);


// ***********************************************
// TASK 4 SOLUTION

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

// const athleteIncomeStrings = athleteData.map(item => `${item.athlete} in ${item.team} earned ${item.income} euros`);

// console.log(athleteIncomeStrings)

// ***********************************************
// TASK 5 SOLUTION

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

// const results = athleteData.filter(item => item.income.toString().length > 7);

// console.log(results)

// ***********************************************
// TASK 6 SOLUTION

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

// const results = athleteData
//     .filter(item => item.income > 10000000)
//     .map(item => `${item.athlete} is a great player`);

// console.log(results)


// ***********************************************
// TASK 7 SOLUTION

// const upperFunc = (firstVal, secondVal) => {
//     const obj = {
//         myFunc: () => ({
//             name: firstVal,
//             age: secondVal
//         })
//     }

//     return obj
// }

// console.log(upperFunc('Umair', 20).myFunc())

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
// =======> Yes, the function itself is returning an object so i can directly access 
// the key returned from the call of the function

// ***********************************
// TASK 9
// const arrayOfCourses = [
//     { id: "CNC123", courseName: "Cloud Native Computing" },
//     { id: "IOT123", courseName: "Internet of things" },
//     { id: "AI123", courseName: "Artificial Intelligence" }
// ];

// const passedCourses = ["CNC123", "AI123"];

// for (let i = 0; i < passedCourses.length; i++) {
//     for (let j = 0; j < arrayOfCourses.length; j++) {
//         if (passedCourses[i] === arrayOfCourses[j].id) {
//             console.log(
//                 `You have passed in ${arrayOfCourses[j].id} 
//                 ${arrayOfCourses[j].courseName}`
//             )
//         }
//     }
// }

// ***********************************
// TASK 10
// const arr = [
//   { id: 1, name: "umair" },
//   { id: 2, name: "asad" }
// ];

// const index = 2;
// const newObj = { id: 4, name: "shahbaz" };

// arr[index] = { ...newObj };

// console.log(arr);

// ***********************************
// TASK 11
// const data = [
//     { name: "Umair", Amt: 100 },
//     { name: "Asad", Amt: 150 }
// ];

// 1. Create a functionality that adds a new user to our data array
// with the default amount as 100 if no amount is explicitly provided

// const openAccount = (accountName, amount = 100) => data.concat({ name: accountName, Amt: amount })
// console.log(openAccount("Shahbaz", 150))

// 2. create a feature as such it allows us to remove a particular account
// from our data just by passing in the account name

// const removeAccount = (accountName) => data.filter(item => item.name !== accountName)
// console.log(removeAccount("Umair"))

// 3. Create a feature that allows us to search a particular user from our
// given array just by giving in the name or amount

// const searchUser = ({ accountName = "", amount = 0 } = {}) => data.filter(item => item.name === accountName || item.Amt === amount)
// console.log(searchUser({ name: "Umair" }))
