
const student ={
    name:"sushil",
    roll:500530,
    dept:'compuer',
    institute:'thakurgaon polytechnic institute',
    distric: 'thakurgaon'
}
console.log(student);

// object adding 
student.phone = '01764545456';
console.log(student);
// delete element of object 
delete student.distric;
console.log(student)
// property value see 
let details = student.institute;
console.log(details);

// keys value 
let allValue = Object.values(student);
console.log(allValue);
let allProperty = Object.keys(student);
console.log(allProperty);



