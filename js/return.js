//var pr;
function mytest()
{
    pr=("Hi, My name is Shawinder Singh");
    
    return pr;
}

rt=mytest();
console.log(rt);

/* ********************************************************** */


function mytest(x,y)
{
    console.log("addition="+ (x+y));
    console.log("multiplication="+ (x*y));
    console.log("Substraction="+ (x-y));
    console.log("Division="+ (x/y));
}

mytest(5,10);

/* ********************************************************** */

function mytest()
{
    //console.log("hello");
    maxValue=arguments[2];
   
   return maxValue
}

hv=mytest(9,7,6);
console.log(hv);


/* ********************************************************** */
