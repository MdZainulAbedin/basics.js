const flag = true

if(!flag)

{
    console.log("condtion satisfied")
}
    else
    
{
    console.log("condtion not unsatisfied")
}


let i = 0
while(i>10)
{
i++    
console.log(i)
}

do
{

i++    
} while(i>10);
console.log(i)


for(let k=0;k<=10;k++)
{
    console.log(k)
}


let n= 0

for(let k=1;k<=100;k++)
{
    if(k%2 == 0 || k%5 == 0)
    { 
        n++
        console.log(k)
        if (n ==3)
        break
    }
}

let required = true
while (required)
{
    console.log(required)
    required= false
}
