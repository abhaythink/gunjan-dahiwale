 async function greet()
 {
    console.log("Hii");
 }
 greet();

 let hello = async() => "Hello";
 hello();

 //await keyword waits for the promise for the settlement
 async function show(){
    let total = await hello();
    console.log(total);
 }

//  async function getUser(userId) {
//     throw new Error('Invalid User Id');
// }
// getUser(10);

//Promise.withResolvers()
let resolve, reject;

const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
});

Math.random() > 0.5 ? resolve("Success") : reject("Error");

let resolve1, reject1;

const promise1 = new Promise((res, rej) => {
    resolve1 = res;
    reject1 = rej;
});

Math.random() > 0.5 ? resolve1("Success") : reject1("Error");