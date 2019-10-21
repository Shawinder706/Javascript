var x=90;
function mytset()
{
    var x=200;
    console.log(x);

}

mytset();
console.log("differnce");
console.log(x);


/* ***************************************** */


var x=90;
function pass()
{
    console.log(x);
}

// pass();
// console.log("diff");
// console.log(x);


function test()
{
    var x=90;
    console.log(x);
}
test();
console.log("dif");
console.log(x);


/* ***************************************** */

var x=90;
function print()
{
    x=100;
    console.log(x);
}

print();
console.log("diff");
console.log(x);


/* ***************************************** */

function test()
{
    var x=90;
    console.log(x);
}
test();
console.log("dif");
console.log(x);


/* ***************************************** */


function parent()
{
    var x=100;
    function childOne()
    {
       var y=30;
       console.log("addition is= "+(x+y));
    }    
    childOne();   
}
parent();

