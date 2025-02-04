let arr = [10, 34, 23, 87];

let x = arr.filter((ele) => {return ele>15});
console.log(x);

let r = arr.reduce((sum, e) => {
    return (sum+e);   
}, 0)
console.log(r);

let c = arr.find((e) => {
    return e===10;
})
console.log(c);

let add = (function (x, y){
    return x+y;
})(2,3)
console.log(add);


let getStudents = [
    {name: 'xyz', age: 12},
    {name: 'abc', age: 14},
    {name: 'pqr', age: 15},
    {name: 'efg', age: 16},
    {name: 'mno', age: 17},
    {name: 'stu', age: 12},
    {name: 'uvw', age: 19},
    {name: 'def', age: 18},
]
let find;
async function get()
{
     find = await getStudents.forEach(element => {
        return element.age>13;
     });
} 
console.log(get());

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log('10')   
        resolve(10)
    }, 1000)
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('20');   
        resolve(20)
    }, 2000)
})
Promise.all([p1, p2]).then((result) =>
    console.log(result)
)
.catch((error) => (console.log(error)))

