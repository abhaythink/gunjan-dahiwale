//why callbacks were introduced
console.log("Task 1: Start");

// Simulating a slow task (e.g., reading a file or processing data)
for (let i = 0; i < 5_000_000_000; i++) {} // This loop takes time

console.log("Task 2: Finished slow task");
console.log("Task 3: End");


//using callback
console.log('Task 1 completed');

function task(fn){
    setTimeout(() => {
        fn();
        console.log("Task2 completed");  
    }, 2000)
}
function fn()
{
    console.log('proceed');
}

task(fn);

console.log('Task 3 completed');



//callbacks

function greet(name, g) {
    console.log("Hello, " + name + "!");
    g(sayhii); 

}

function sayGoodbye(sayhii) {
    console.log("Goodbye!");
    sayhii(sayGm);
}

function sayGm(dontSay)
{
    console.log("GM");  
    dontSay(); 
}
// Call greet function and pass sayGoodbye as a callback
greet("Alice", sayGoodbye);


function sayhii(sayGm)
{
    console.log("hii");
    sayGm(dontSay);
}

function dontSay()
{
    console.log("DOnt say anything");  
}