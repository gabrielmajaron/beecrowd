
var line = ["10.00 10.00"];

var values = line[0].split(' ');

var v1 = parseFloat(values[0]);
var v2 = parseFloat(values[1]);

var dif = (v2-v1);
var p = (100*dif)/v1;

console.log(p.toFixed(2)+"%");
    
