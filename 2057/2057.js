
//var lines = ["10 7 3"];
var lines = ["0 3 -4"];

values = lines[0].split(' ');

var r = 0;
for(var i=0; i<values.length; i++)
    r += parseInt(values[i]);

if(r == 24)
    r = 0;

if(r > 24)
    r -= 24;

if(r < 0)
    r += 24;

console.log(r);