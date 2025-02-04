let scores = new Array(10, 4, 5, 6, 8, 'red');
scores[5] = 'green';
console.log(scores);
console.log(scores.length);
scores.push('blue');
scores.unshift('gray');
scores.pop();
scores.shift();
console.log(scores);

let index = scores.indexOf(10);
console.log(index);

//map - doesn't change the elements in the original array, creates new array of all elements
let num = scores.map((n) => n*2);
console.log(num);

let arr = [1, 2, 3, 4, 5];
let x = arr.reduce((y, a) => {
    return y*a;
}, 1)
console.log(x);

let student = [
    {
        "name": "XYX",
        "class": "10th",
        "Rollno": 233,
        "age": 16,
        "section": "A"
    },
    {
        "name": "ABC",
        "class": "11th",
        "Rollno": 234,
        "age": 16,
        "section": "B"
    },
    {
        "name": "PQR",
        "class": "10th",
        "Rollno": 235,
        "age": 18,
        "section": "C"
    }
];

let R = student.reduce((acc, curr) => {
    //  acc[curr.class] = acc[curr.class] || [];
     if(!acc[curr.class])
        acc[curr.class] = [];
     acc[curr.class].push(curr);
    //  acc[curr.class].push(curr);
     return acc;
}, {});
console.log(R);

let maxAge = student.reduce((result, stu) => {
    return result.age<stu.age ? stu : result;
})
console.log(maxAge);
