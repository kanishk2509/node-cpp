const addon = require('./build/Release/polynomial');

var poly = new addon.Polynomial(1, 3, 2);

console.log(poly.at(4)); // output 30
console.log(poly.roots()); // outputs roots (-1, -2)
poly.c = 0; // set coeeficient object as 0
console.log(poly.at(4)); // now print new polynomial, Output 28

console.log(poly); // prints current polynomials