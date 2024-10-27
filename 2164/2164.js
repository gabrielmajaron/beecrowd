var lines = [1];

var n = parseInt(lines[0]);
var r = parseFloat((Math.pow(((1+Math.sqrt(5))/2), n) - Math.pow(((1-Math.sqrt(5))/2), n))/Math.sqrt(5));
console.log(r.toFixed(1));