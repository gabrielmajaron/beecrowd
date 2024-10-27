var lines = [1];

var n = parseInt(lines[0]);

var p = 0;

for(var i=0; i<n; i++)
{
    p = 1/(6+p);   
}

console.log((3+p).toFixed(10));
