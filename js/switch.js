var x=10, y=20;
var cal = "*";
switch(cal)
{
   case "+":
   z=x+y;
   console.log("two no. addition is ="+z);
   break;

   case "*":
   z=x*y;
   console.log("two no. multi is ="+z);
   break;

   case "/":
   z=x/y;
   console.log("two no. division is ="+z);
   break;

   case "-":
   z=x-y;
   console.log("two no. sub is ="+z);
   break;
   
   default:
   console.log("wrong key pressed");
}