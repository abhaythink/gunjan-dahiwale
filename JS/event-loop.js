function task(msg) {
    let n = 10;
    while (n > 0)
    {
        n--;
        console.log(n);   
    }
    console.log(
        msg
    );
}

setTimeout(() => {
    task('hiiiii')
}, 3000)

console.log('hello');
setTimeout(() => {
    console.log('Welcome');
})
console.log('bye');
