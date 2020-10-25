var a = prompt("Valor de A");
var b = prompt("valor de B");
var c = prompt("valor de C");

// ax^+bx+c=0
var raiz = (Math.pow(b,2)-(4*a*c));

var partearriba = ((-b)+sqrt(raiz));

var total = (partearriba/(2*a));

document.write(total+" y "+(-total));