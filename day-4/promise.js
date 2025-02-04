let users = [
    {name: 'Gunjan', age: 22},
    {name: 'Pranoti', age:19},
    {name: 'Rutuja', age:21}
];

function getUsers() {
    return users.map((user) => user.age + 20);
}
console.log(getUsers());

function add(){
    return users.reduce((acc, curr) =>{
       return acc+curr.age; 
    }, 0)
}
console.log(add());
function avg(){
    return add()/3;
}
console.log(avg());

users.push({name: 'Radha', age: 23, city: 'Pune'});
console.log(users);

let students = [
    {name: 'Gunjan', age: 22},
    {name: 'Pranoti', age:19},
    {name: 'Rutuja', age:21},
    [
        {name: 'Rohit', age:30},
        {name: 'Ram', age:50},
        {name: 'Rohan', age:55},
        [
            {name:'Rohini', age:15},
            {name: 'Diya', age:32},
            [
                {name: 'xyz', age: 23},
                {name: 'dgy', age: 34}
            ]
        ]
    ]
];

async function getstudents(){
    let promise = await getAge();
    return promise;
}
function getAge(){
    let flat = students.flat(Infinity);
    return flat.filter((e) => {
        if(e.age>22)
         return {name: e.name, age: e.age};
    });
}
getstudents().then(
    console.log
)
.catch(
    console.log   
)

