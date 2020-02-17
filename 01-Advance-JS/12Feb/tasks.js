// import { cohorts, courses, participationGrade, students, studyGroup } from './data.js'
import './Solutions.js'
/* **********************************
            TASK 1
You are given the initial data for courses students and study Groups

List out all the Study groups, courses a particular student has joined
using student id ====> recq0dirEVVZFgmQT

 **********************************/

/* **********************************
            TASK 2
You are given the initial data for courses, students etc

List out all the cohorts a particular student has joined
using student id ====> recq0dirEVVZFgmQT

 **********************************/

/* **********************************
            TASK 3
You are given the initial data for courses, students etc

List out the Course for a specific cohort
cohortId =====> recgHAwgsPJqDMAUC

 **********************************/

/* **********************************
            TASK 4
You are given the initial data for courses, students etc

Find out which cohort has the particular studyGroup
and then check if the student is enrolled in that cohort's course
cohortId =====> recgHAwgsPJqDMAUC
student id ====> recq0dirEVVZFgmQT

 **********************************/

/* **********************************
            TASK 5
You are given the initial data for courses, students etc

Check if a specific Cohort exist in a Course

cohortId = "recgHAwgsPJqDMAUC"
courseId = "aaaa-bbbb"

 **********************************/

/* **********************************
            TASK 6
You are given the initial data for courses, students etc

List out the participation grade for a specific student
studentId = "recq0dirEVVZFgmQT"

 **********************************/

/* **********************************
            TASK 7
What does each of the array helper return

1. Map
2. Filter
3. Some
4. Every
5. Reduce
6. Find
7. forEach

 **********************************/

/* **********************************
            TASK 8
const eligibleStudents = [
  {
    id: 1,
    name: 'Umair Ahmed',
    profession: 'Fullstack Developer and DevOps Engineer',
    grade: 100,
    age: 22,
    skills: ['MERN', 'DevOps', 'GraphQL', 'Apollo Client']
  },
  {
    id: 2,
    name: 'Asad Ikhlas',
    profession: 'Fullstack Developer and DevOps Engineer',
    grade: 90,
    age: 23,
    skills: ['MERN', 'GraphQL', 'Apollo Client']
  }
]

Use the Data given above and find the eligible students based on criteria

Criteria ====> Students grade must be above 95, should have atleast MERN in skills, and age must be above 20
 **********************************/

/* **********************************
            TASK 9
create an arrow function that takes in two arguments
1. State Object
2. Action

1. State object can include any property such as name age etc
but if no state is passed as an argument default state should be used
e.g const state = {
    name: "umair",
    age: 22
}

2. Action can be a simple object as well It should contain 2 properties
    a. Type
    b. data

e.g const action ={
    type: "UPDATE_USER_NAME",
    data: {
        name: "Asad"
    }
}

The arrow function's job is to take the state and check the action's type
and change the state based on action if any case matches (use switch statement)

HINT =====> Reducers in Redux

 **********************************/
