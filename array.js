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
