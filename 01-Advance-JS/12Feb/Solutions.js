// import { cohorts, courses, participationGrade, students, studyGroup } from './data.js'

// **************************************
// TASK 1 SOLUTION
// const studentId = 'recq0dirEVVZFgmQT'

// const studentCourse = courses.filter(item => item.fields.studentId === studentId && item)
// const studentStudyGRP = studyGroup.filter(item => item.fields.studentId === studentId && item)

// const student = {
//   email: students.find(item => item.id === studentId).fields.email,
//   studentCourse,
//   studentStudyGRP
// }

// console.log(student)

// ********************************
// TASK 2 SOLUTION
// const studentId = 'recq0dirEVVZFgmQT'
// const result = cohorts.filter(item => item.fields.studentId === studentId)
// console.log(result)

// *****************************
// TASK 3 SOLUTION
// const cohortId = 'recgHAwgsPJqDMAUC'
// const result = courses.find(item => item.fields.cohorts.includes(cohortId))
// console.log(result)

// ****************************
// TASK 4 SOLUTION
// const cohortId = 'recgHAwgsPJqDMAUC'
// const studentId = 'recq0dirEVVZFgmQT'

// const foundCohort = cohorts.filter(item => item.id === cohortId)
// const result = foundCohort.find(item => {
//   const courseId = item.fields.courseId
//   const course = courses.filter(course => {
//     return course.fields.id === courseId && course.fields.studentId === studentId
//   })
//   return course
// })

// console.log(result)

// ***********************************
// TASK 5 SOLUTION
// const cohortId = 'recgHAwgsPJqDMAUC'
// const courseId = 'aaaa-bbbb'

// const result = cohorts
//   .filter(item => item.id === cohortId)
//   .some(newItem => newItem.fields.courseId === courseId)
// console.log(result)

// **********************************
// TASK 6 SOLUTION
// const studentId = 'recq0dirEVVZFgmQT'

// const result = students
//   .find(item => item.id === studentId).id

// const grades = participationGrade.filter(item => {
//   return item.fields.studentId === result
// })
// console.log(grades)

// *********************************
// TASK 8 SOLUTION
// const eligibleStudents = [
//     {
//       id: 1,
//       name: 'Umair Ahmed',
//       profession: 'Fullstack Developer and DevOps Engineer',
//       grade: 100,
//       age: 22,
//       skills: ['MERN', 'DevOps', 'GraphQL', 'Apollo Client']
//     },
//     {
//       id: 2,
//       name: 'Asad Ikhlas',
//       profession: 'Fullstack Developer and DevOps Engineer',
//       grade: 90,
//       age: 23,
//       skills: ['MERN', 'GraphQL', 'Apollo Client']
//     }
//   ]
// const eligible = eligibleStudents.find(item => item.skills.includes('MERN') && item.age > 20 && item.grade > 95)
// console.log(eligible)

// *********************************
// TASK 9 SOLUTION
// const initialState = {
//     name: "Umair",
//     age: 22
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "USER_LOGIN":
//             return { ...state, name: action.payload.name }
//         default:
//             return state
//     }
// }
// const action = {
//     type: "USER_LOGIN",
//     payload: { name: "Asad", age: 22 }
// }

// console.log(reducer(initialState, action)
