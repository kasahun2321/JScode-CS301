
let prompt=require('prompt-sync')();
let rad=prompt("enter the radius of the cylinder ");
 rad=parseFloat(rad);
let  heigh=prompt("enter the height of the cylinder ");
heigh=parseFloat(heigh);
let P= Math.PI;
let volume =(P*rad*(2*heigh));

console.log("result="+ volume);


