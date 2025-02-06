let fruits = ['apple', 'mango', 'orange'];

let newA = fruits.slice();

let newB = [...fruits];

let newC = [fruits.slice()];
console.log(newA);
console.log (newB);
console.log(newC);

const [f1, ...f2] = fruits;

console.log(f2);

 function name(...args) {
    return args;
}
console.log(name(1,2,3,4,5));