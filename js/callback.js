function test()
{
    console.log("This is test function");

}

function test_one( val,callback)
{
    console.log("it is " +val);
    callback();
}

test_one("working",test);



/* ******************************************** */

function test(val,callback)
{
    console.log("this is test working"+val);
}

test('greate',function()
    {
        console.log("inside anonymous function");
    }
)

/* ******************************************** */


function proce()
{
console.log("Processing......"); 
}

function init(){

    console.log("Initialization...." );
}

function starts()
{
    console.log("start.........");
}
 
 // call multiple functions in another function as an arguments
 function worrk(callback_One,callback_two,callback_three ,val)
 {
     callback_One();
     callback_two();
     callback_three();
     console.log(val+"....");
 }

 worrk(proce,init,starts,'working');