export const courses = [
  {
    id: 'recq0dirEVVZFgmQS',
    fields: {
      name: 'test',
      studentId: 'recq0dirEVVZFgmQT',
      studyGroup: 'recq0dirEVVZFgmQG',
      participationGrades: 'recNYxu4Z8L7IGKOU',
      tutors: [],
      cohorts: ['recgHAwgsPJqDMAUC', 'recHoypx1QJ4yj4ow'],
      updatedAt: '2019-07-25T06:32:30.000Z',
      createdAt: '2019-07-05T00:55:27.000Z',
      id: 'aaaa-bbbb'
    }
  },
  {
    id: 'recq0dirEVVZFgmDS',
    fields: {
      name: 'Calculus 1',
      studentId: 'recq0dirDVVZFgmQT',
      studyGroup: 'recq0dirEVVZFgmQG',
      participationGrades: 'recNYxu4Z8L7IGKOU',
      tutors: [],
      cohorts: ['recHoypx1QJ4yj4ow'],
      updatedAt: '2019-07-25T06:32:30.000Z',
      createdAt: '2019-07-05T00:55:27.000Z',
      id: 'bbbb-cccc'
    }
  }
]

export const participationGrade = [
  {
    id: 'recNYxu4Z8L7IGKOU',
    fields: {
      id: 1,
      course: 'aaaa-bbbb',
      studentId: 'recq0dirEVVZFgmEX',
      grade: 100
    }
  },
  {
    id: 'recNYxu4Z8L7IGKOU',
    fields: {
      id: 1,
      course: 'bbbb-cccc',
      studentId: 'recq0dirEVVZFgmQT',
      grade: 100
    }
  }
]

export const students = [
  {
    id: 'recq0dirEVVZFgmQT',
    fields: {
      email: 'student@test.com',
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel accumsan orci. Fusce interdum ipsum nec neque iaculis congue. Vivamus bibendum quam at sollicitudin vestibulum. Nunc suscipit nisl sit amet enim hendrerit pellentesque. Curabitur non fermentum orci.',
      courseId: 'recq0dirEVVZFgmQS',
      name: 'Test Student Name',
      studyGroupId: 'recq0dirEVVZFgmQG',
      createdAt: '2019-07-06T22:20:36.000Z',
      updatedAt: '2019-07-16T22:48:37.000Z',
      cohortId: 'recgHAwgsPJqDMAUC'
    }
  },
  {
    id: 'recq0dirEVVZFgmEX',
    fields: {
      email: 'student.two@test.com',
      notes: 'Lorem ipsum student two notes',
      courseId: 'yghjtyfETDGTYUhji',
      name: 'Test Student Name-two',
      studyGroupId: 'hjahdyuRTTFHSbagsty',
      createdAt: '2019-09-01T12:20:36.000Z',
      updatedAt: '2019-09-16T22:30:37.000Z',
      cohortId: 'hjhuGHRYUShmsjsgs'
    }
  }
]

export const studyGroup = [
  {
    id: 'recq0dirEVVZFgmQG',
    fields: {
      studentId: 'recq0dirEVVZFgmQT',
      startDate: '2019-09-12',
      tutors: [],
      cohort: '',
      course: 'recq0dirEVVZFgmQS',
      meetingUrl: 'https://meet.google.com/mnh-fhns-zoe',
      meetingTimes: 'Mondays 2-4pm ET & Wednesdays 6-9am ET',
      updatedAt: '2019-07-25T06:32:30.000Z',
      createdAt: '2019-07-05T00:55:27.000Z',
      id: 'SG-bbbb'
    }
  },
  {
    id: 'recq0dirEVVZFgmQF',
    fields: {
      studentId: 'recq0dirDVVZFgmQT',
      startDate: '2019-09-12',
      tutors: [],
      cohort: '',
      course: 'recq0dirEVVZFgmQS',
      meetingUrl: 'https://meet.google.com/mnh-fhns-zoe',
      meetingTimes: 'Mondays 2-4pm ET & Wednesdays 6-9am ET',
      updatedAt: '2019-07-25T06:32:30.000Z',
      createdAt: '2019-07-05T00:55:27.000Z',
      id: 'SG-bbbb'
    }
  }
]

export const cohorts = [
  {
    id: 'recgHAwgsPJqDMAUC',
    fields: {
      courseId: 'aaaa-bbbb',
      name: 'Calculus Alpha',
      startDate: '2019-06-17',
      studyGroupId: 'recVifEbL9cEA9r0x',
      studentId: 'recq0dirEVVZFgmQT',
      updatedAt: '2019-07-06T22:39:14.000Z',
      createdAt: '2019-07-06T22:24:24.000Z'
    }
  }, {
    id: 'recHoypx1QJ4yj4ow',
    fields: {
      courseId: 'bbbb-cccc',
      name: 'Calculus Beta',
      startDate: '2019-06-17',
      studyGroupId: 'recVifEbL9cEA9r0x',
      studentId: 'recq0dirDVVZFgmQT',
      updatedAt: '2019-07-06T22:39:14.000Z',
      createdAt: '2019-07-06T22:24:24.000Z'
    }
  }, {
    id: 'recKQSMS3gWlckjw6',
    fields: {
      courseId: 'cccc-dddd',
      name: 'Psychology Beta',
      startDate: '2019-06-17',
      studyGroupId: 'recVifEbL9cEA9r0x',
      studentId: 'recq0dirEVVZFgmQT',
      updatedAt: '2019-07-06T22:39:14.000Z',
      createdAt: '2019-07-06T22:24:24.000Z'
    }
  }
]
