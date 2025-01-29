let student = {
    name: "John",
    lastName: "Doe",
    address(){
        console.log("Delhi");
        
    }
}

student.department = function()
{
    console.log("CSE");
}
student.department();
student.address();

//when function is a property of objects, it becomes methods
let patient = {
    id: '001',
    name: "John",
    lastName: "Doe",
    Bill()
    {
        console.log(this.name, "have to give RS.500");
        
    }
}
patient.Bill();
console.log(patient.prototype);
// console.log(patient.greet());

patient.greet = function(){
    console.log("Good morning");  
}
patient.greet(); //shadowing


//constructor
function Person(fname, lname)
{
    this.fname = fname;
    this.lname = lname;
    this.getfullName = function(){
        return this.fname+' '+this.lname;
    }
}
let person1 = new Person('Gunjan', 'Dahiwale');
let person2 = new Person('Pranoti', 'Dahiwale');
console.log(person1.getfullName());


//inheritance
let teacher = Object.create(person1);
teacher.name = "saniya";
teacher.teach = function(subject)
{
    console.log("I can teach " + subject);
}
teacher.teach("maths");

//object properties
let p = {}
p.age = 23;
p.name = "Gunjan";

Object.defineProperty(p, 'ssn', {
    configurable: false,
    value: '234545'
});

for(let property in p)
    console.log(property);
    