// EXEMPLO PARA PEGAR VALORES
/*
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
*/

var str = "602214085774747474747474 1.618033 3.141592 -0.000027 -10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"

var lines = str.split(" ");

var n = parseFloat(lines.shift());

if(n == "-0")
{
    console.log("-0.0000E+00");
    return;
}
else
if (n == "+0" || n == "0")
{
    console.log("+0.0000E+00");
    return;
}

var signal = n >= 0 ? "+" : "";
var expo = n.toExponential(4);
var parteDepoisE = parseFloat(expo.substring(expo.indexOf('e')+2));

if(parteDepoisE<10)
    parteDepoisE = "0".concat(parteDepoisE);

expo = expo.substring(0, expo.indexOf('e')+2);
expo = expo.replace('e','E');
expo += parteDepoisE;
console.log(signal+expo);

