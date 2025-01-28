//if else statement
let age = 20;
if(age>=18)
    console.log("You can vote");
else
    console.log("You cannot vote");
    
//if else if statement
let b = 5;
if(b == 1)
    console.log("Monday");
else if(b==2)
    console.log("Tuesday");
else if(b==3)
    console.log("Wednesday");
else if(b==4)
    console.log("Thursday");
else if(b==5)
    console.log("Friday")
else if(b==6)
    console.log("Saturday");
else
    console.log("Sunday");
    
//Ternary operator
let a = 18;
let msg = a>=18 ? "You can vote" : "You cannot vote";
console.log(msg);

//Switch case
let today = 3;
switch(today)
{
    case 1: console.log("Today is Monday"); break;
    case 2: console.log("Today is TUesday"); break;
    case 3: console.log("TOday is Wednesday"); break;
    default: console.log("Today is Sunday");    
}

    
//while loop
let ans = 0;
while(ans < 10)
{
    console.log(ans);
    ans++;
}
    
//do-while loop
let cnt = 0;
do{
    console.log(cnt);
    cnt++;
}while(cnt<5)

//for loop
for(let i=0;i<5;i+=2)
    console.log(i);
    
//break
for(let i=0;i<5;i++)
{
    console.log(i); 
    if(i==2)
        break;
}

//continue
for(let i=0;i<5;i++)
{
    if(i%2==0)
        continue;
    console.log(i);  
}

//comma operator
let x = 3;
let y = (++x, x+3);
console.log((x, y));
