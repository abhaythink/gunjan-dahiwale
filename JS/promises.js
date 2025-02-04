
function getStudents() {
    return [
        {name: 'Gunjan', age: 19},
        {name: 'John', age: 18}
    ];
}

function findUser(username)  //synchronous and blocking
{
    const students = getStudents();
    const student = students.find((student) => student.name === username);
    return student;
}

console.log(findUser('xyz'));

//promise
let success = true;
function greet()
{
    console.log('hiii');
}
function getUsers()
{
    return new Promise((resolve, reject) => {
        if(success) {
            setTimeout(()=>{
                resolve([
                    {name: 'Gunjan', age:22},
                    {name: 'John', age:22}
                ])
            }, 1000);
        }
        else {
            reject('Failed')
        }
    });
}

function onFulfilled(users)
{
    console.log(users);
    
}

const promise = getUsers();
promise.then(onFulfilled);
// promise.catch((error) => console.log(error));

getUsers()
    .then((users) => {
        console.log(users);
    })
    .catch((error) => {
        console.log(error); 
    })
    .finally(() => {
        greet();
    })

//promise chaining
let Op = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 10 * 100)
});

Op.then(
    (result) => {
        console.log(result*2);  
        return result*3;  
    }
)
.then(
    (result) => {
        console.log(result*3);    
        return result*10;  
    }
);

//promise.all()
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is first");
        resolve(10);
    }, 10*100);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is second");
        resolve(20);
    }, 20*100);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is third");
        resolve(30);
    }, 30*100);
});

Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p,c) => p+c);
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`); 
});


//Promise.race() - who wins first
const l1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First promise resolved");
        resolve(10);
    }, 10*100)
});
const l2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second promise resolved");
        resolve(20);
    }, 2*100)
});
Promise.race([l1, l2])
    .then(value => console.log(`Resolved ${value}`))
    .catch(reason => console.log(`Rejected ${reason}`));

//Promise.any() - any promise which is fulfilled first
const r1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First ----------");
        resolve(10);
    }, 1000)
});
const r2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second..........");
        resolve(20);
    }, 2000)
});
Promise.any([r1, r2])
    .then((value) => console.log("Returned promise"))
//if all promises are rejected then it will give aggregate error



//Promise.allSettled() - shows the array of objects having the outcomes of p1 and p2
const t1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First..........");
        resolve(100);
    }, 2000)
});
const t2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second..........");
        resolve(200);
    }, 2000)
});
Promise.allSettled([t1, t2])
    .then((value) => console.log(value))


//Promise.finally() - schedule a function to execute when the promise is settled, either fulfilled or rejected.


//Promise Error Handling - by try and catch method
let authorized = false;

function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!authorized) {
            throw new Error('Unauthorized');
        }

        resolve({
            id: id,
            username: 'user'
        });
    });
}
try {
    getUserById(10)
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${err}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}
