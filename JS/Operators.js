//Addition
let sum = 10+2345;
console.log(sum);

//Subtraction
let minus = 789-990;
console.log(minus);

//Multiplication
let into = 6*87;
console.log(into);

//Division
let divide = 30/5;
console.log(divide);

//arithmetic operators with objects
let empty = {
    valueOf(){
        return 100;
    }
};
let curr = empty - 34;
console.log(curr);

//objects with stringOf() function
let person = {
    name: "john",
    age: 30,
    toString: function(){
        return '-45';
    }
}

console.log(+person);

//assignment operators
let a=0;
a+=3;
a-=3;
a++;  //post increment
++a;  //pre increment
a--;  //post decrement
--a;  //pre decrement
console.log(a);

//comparison operators
let r = 10<30;
console.log(r);
let n1 = "abc";
let n2 = "ABC";
console.log(n1>n2);

let obj = {
    valueOf: function()
    {
        return 30;
    }
}

console.log(obj==9);

//Logical operators
let not = true;
console.log(!not);  //Not operator

let rr = true;
let pp = false;
console.log(rr && pp,"-AND"); //AND operator

console.log(rr || pp, "-OR"); //OR operator






