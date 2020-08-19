let x = 5;
let y = 7;
let z = x;
x = "Hi" ;
y = z;
z = false;
console.log(x); // Hi
console.log(typeof x) // string
console.log(y); // 5
console.log(typeof y); // number
console.log(z); // false
console.log(typeof z); //boolean