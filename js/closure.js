function mytest(){


    return function(){

		console.log("Working");
	}
}

my=mytest();
my();