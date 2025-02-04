let map = new Map();
console.log(typeof(map));
console.log(map instanceof Map);

map.set({author: 'gunjan'})
    .set({writer: 'john'});
console.log(map);

console.log(map.has('gunjan'));
// console.log(map.values());

console.log(map.size);
map.clear();
console.log(map);

console.log(map.delete());
