const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

console.log(employee)               // {
                                    //   name: 'Raja Rani',
                                    //   designation: 'QA',
                                    //   salary: 20000,
                                    //   experience: 1,
                                    //   age: 22
                                    // }   

delete employee.experience
console.log(employee)               //{ name: 'Raja Rani',
                                    //  designation: 'QA',
                                    //  salary: 20000,
                                    //  age: 22 }

employee.location = 'Dhaka'
console.log(employee)    
                                    // {
                                    //   name: 'Raja Rani',
                                    //   designation: 'QA',
                                    //   salary: 20000,
                                    //   age: 22,
                                    //   location: 'Dhaka'
                                    // }

employee.salary = employee.salary + 5000;
console.log(employee)
                                    // {
                                    //   name: 'Raja Rani',
                                    //   designation: 'QA',
                                    //   salary: 25000,
                                    //   age: 22,
                                    //   location: 'Dhaka'
                                    // }


Object.freeze(employee)     //! existing propery ke modify ba change korte dibena . 

delete employee.salary
employee.salary = employee.salary + 12000;

console.log(employee)

                                    // {
                                    //   name: 'Raja Rani',
                                    //   designation: 'QA',
                                    //   salary: 25000,
                                    //   age: 22,
                                    //   location: 'Dhaka'
                                    // }