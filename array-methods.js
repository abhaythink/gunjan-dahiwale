let array = [
    {name: 'xyz', age: 12},
    {name: 'abc', age: 14},
    {name: 'pqr', age: 15},
    {name: 'efg', age: 16},
    {name: 'mno', age: 17},
    {name: 'stu', age: 12},
    {name: 'uvw', age: 19},
    {name: 'def', age: 18},
];

//filter method
let age = array.filter((e) => {return e.age>18});
console.log(age);

//map method - it creates new array means it does not modify the changes in the original array
let age1 = array.map((e) => {
    return e.age+20;
})
console.log(age1);

//find method - it finds the first element in the array according to the condition
const e = array.find((a) => {
    return a.age === 12;
});
console.log("find method-",e);


//forEach method - performs the specific condition to each element of the array
let each = array.forEach((e, index, array) => {
    if(index == 1)
        console.log(e);          
})  


//some method - return true or false for any item
let has = array.some((e) => {
    return e.age <10;
})
console.log(has);

//every method - return true or false for every item
let every = array.every((e) => {
    return e.age<20;
})
console.log(every);

//reduce method - return a single value for an array according to a condition
let r = array.reduce((sum, e) => {
    return e.age+sum;
}, 0)
console.log(r);


//includes method - returns true or false if that particular element exists in the array
let arr = [1,2,3,4,5]
let q = arr.includes(2)
console.log("Include method", q);


