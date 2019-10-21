/******************Function Hoisting************************* */

test4(); // working fine
function test4()
{
    console.log("working");
}

exp();  // error
var exp=function(){

    console.log("expression function with hoisting");
}




/******************Variable Hoisting************************* */
 

var x=10;
console.log(x);

console.log("working= "+j);
var j=20;

x=30;

myfun();
function myfun()
{
    console.log("value of x= " +x);
}
var x;