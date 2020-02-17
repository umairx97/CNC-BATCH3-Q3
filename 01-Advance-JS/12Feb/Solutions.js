import { cohorts, courses, participationGrade, students, studyGroup } from './data.js'

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
// TASK 7 SOLUTION
// const eligible = eligibleStudents.filter(item => {
//     const skills = item.skills
//     const age = item.age
//     const grade = item.grade
//     return skills.includes('MERN') && age > 20 && grade > 95 && item
//   })

//   console.log(eligible)
