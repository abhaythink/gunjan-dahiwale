//undefined
let count;
console.log(typeof(count));

//null
let x = null;
console.log(typeof(x));

//number
let num = 109.1;
console.log(typeof(num));
console.log(Number.MAX_VALUE);

let price = 200.102;
console.log(typeof(price));


//NaN
console.log('a'/8);

//String
let msg = 'I\'m fine';
console.log(msg);

let str = 'strings are';
str = str + " immuatable";
console.log(str);
console.log(str.length);

//Boolean
let flag = true;
console.log(typeof(flag));

//Symbol
let s = Symbol();
console.log(Symbol() == Symbol());

//BigInt
let big = 8899098098098789879n;
console.log(typeof(big));

//Object
let object = {
    name: "Gunjan",
    age: 23,
    address: {
        street: "mercury villa",
        road: "nari road",
        city: "nagpur"
    },
    "building name": 123
};

object.name = "Gunjan";
object.surname = "Dahiwale";
console.log(object);
console.log(object["building name"]);
console.log(object['name']);

delete object.address.road;

console.log(object);
console.log('age' in object);

