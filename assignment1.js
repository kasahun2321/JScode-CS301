/*You have been asked to write a program that will read from
the keyboard the radius of a circle and will output to the
monitor the diameter, circumference, and area of the circle.*/
//Name kasahun tehone
//ID =111705



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++      INPUT               ++++++++++   PROCESS        ++++++++         OUTPUT       +++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
++      accept radius from user    ++   diameter= radius * radius    +++  output dependes ++
++      declare const varaible pi  ++   area= pi * (radius * radius) +++   user input of  ++
++      declare let var diameter,  ++   circumfernce= 2*(pi* radius) +++   radius         ++
+++       area and circumference   ++                                                     ++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//let declare variable 
const pi=3.14;
let  area;
let circumference;

var readline =require('readline');
var user_input=readline.createInterface(process.stdin, process.stdout);
user_input.question ("Enter the radius of the circle ", function(radius)
{

    let diameter= radius*radius;
    console.log(`Diameter of the circle is=${diameter}`);
    area= (pi * (radius* radius));
    console.log(`Area of the  circle is=${area}`);
    circumference= 2*(pi * radius);
    console.log(`Circumfreance of  the circle is=${circumference}`);
    process.exit();
})



//console.log(rad);

