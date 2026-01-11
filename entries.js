const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: '20000',
    experience: 1
}

const keys = Object.keys(employee)     //! get all the property names as an array
const values = Object.values(employee) //! get all the property values as an array
const entries = Object.entries(employee) //! get all the property [key,value] as an array of arrays

console.log(keys)          // [ 'name', 'designation', 'salary', 'experience' ]
 console.log(values)       // [ 'Raja Rani', 'QA', '20000', 1 ]
 console.log(entries)       // [
                            //   [ 'name', 'Raja Rani' ],
                            //   [ 'designation', 'QA' ],
                            //   [ 'salary', '20000' ],
                            //   [ 'experience', 1 ]
                            // ]


