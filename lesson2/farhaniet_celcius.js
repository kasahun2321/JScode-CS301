let prompt = require('prompt-sync')();
let tempInCelsius = prompt('Eneter value in celsius: ')
let tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+32;
console.log(tempInFahrenheit);

//let prompt = require('prompt-sync')();
let Fahrenheit = prompt('Eneter value in fahraaheit: ')
let celcius  = (Fahrenheit-32)/1.8
console.log(celcius);