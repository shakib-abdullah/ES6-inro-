const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.seal(employee)        // ! seal korle modify korte parbe kintu new property add ba existing property delete korte parbe na .
// delete employee.salary
delete employee.experience

employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
console.log(employee)
                                        // {
                                        //   name: 'Raja Rani',
                                        //   designation: 'QA',
                                        //   salary: 25000,
                                        //   experience: 1,
                                        //   age: 22
                                        // }

                                        