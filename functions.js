
let a = 8, b=9;
function add(){
    return a+b;
}

console.log(add());

function substract(c, d)
{
    return c-d;
}

console.log(substract(30, 10));

//Function hoisting
show();
function show()
{
    console.log("Hello");
}

//passing function to another function - first class citizen
let sum = add;

function avg(a, b, fn)
{
    return fn(a,b)/2;
}

let result = avg(10, 20, sum);
console.log(result);

//anonymous function
(
    function(){
        console.log("hello gunjan");   
    }
)();

let student = {
    name: "Gunjan",
    surname: "Dahiwale"
};

(
    function()
    {
        console.log(student.name+" "+student.surname);
    }
)(student);

//Arrow functions
let arrow = () => console.log("this is a arrow function");
arrow();

//pass by value
function cube(x)
{
    return x*x*x;
}
let y = 2;
console.log(cube(y));

//Recursive function

function sumN(n)
{
    if(n<=0)
        return 0;
    return sumN(n-1)+n;
}
console.log(sumN(4));

//default parameters
function hii(msg = "heloo")
{
    return msg;
}
console.log(hii());

function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); 

function add(x, y = 1, z = 2) {
    console.log( "length",arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3