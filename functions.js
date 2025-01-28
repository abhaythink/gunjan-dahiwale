
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
