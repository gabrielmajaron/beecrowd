var lines = [5];

var n = parseInt(lines[0]);

var p = 0;

for(var i=0; i<n; i++)
{
    p = 1/(2+p);   
}

console.log((1+p).toFixed(10));