
 var readline =require('readline');
 var user_input=readline.createInterface( process.stdin, process.stdout);
 user_input.question("enter your value",function(userdata)
 {
     var  data=userdata;

     console.log(`result=${data}`);
     process.exit();

 })