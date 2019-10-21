
 /*  ******************************************** Js Functions********************************************  */
 /* ******************************************************************************************************* */
// Function declaration 


function mytest(x)
{
    console.log("It is working" + x);
}
mytest(70); // It is working70


// Function Expression

var mytest= function(){

    console.log("This is Expression Function");
}

mytest;  //  function(){ console.log("This is Expression Function");  }
mytest(); // This is Expression Function
rv=mytest();
console.log(rv); // This is Expression Function





