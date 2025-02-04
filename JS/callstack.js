function add(a, b){
    return a+b;
}

function avg(a, b)
{
    return add(a, b)/2;
}
console.log(avg(2, 3));

//in stack there is a main function, after calling avg function the avg function will be added in the stack and then add function will be pushed in the stack, after it returns the value the add function will be pop out and then avg function will get pop.
// in javascript there is a single callstack as it is single threaded
// so if it gets overflow then it will show the stack overflow error

setTimeout(
    function(){             //function as argument
        console.log("hii");
    }, 2000
)