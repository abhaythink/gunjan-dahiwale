//array destructuring
let array = ['a', 'b', 'c', 'd', 'e'];
let [a, ,b] =array
console.log(a, b);

let [ p, ...rest] = array
console.log(p);
console.log(rest);

let nums = [2,3,4,5,6,6];
const newA = [...array, ...nums];
console.log(newA);

const newArray = nums.concat(array);
console.log(newArray);

function sumAndsubtract(a, b)
    {
        return [a+b, a-b];
    }
const [ sum, subtract, divide = "No division"] = sumAndsubtract(4, 3)
console.log(sum);
console.log(subtract);
console.log(divide);


//object destructuring
let student = {
    name: 'Gunjan',
    age: 12,
    department: 'Cse',
    address: {
        street: 'Mercury villa',
        city: 'Nagpur'
    }
}

const {name, age, ...remain} = student;
console.log(name);
console.log(remain);
