function greeting(msg)
{
    return function (name)
    {
        return msg + " " + name;
    }
}

let hii = greeting('Hii'); //closure

console.log(hii('Gunjan'));
