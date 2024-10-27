//var lines = ["5","100 199 199 198 0"];
//var lines = ["3","1 4 2"];
var lines = ["4","1 2 2 2"];

var n = parseInt(lines[0]);
var values = lines[1].split(' ');
var index = 0;

for(var i=1; i<n; i++)
{
    if(parseInt(values[i-1]) > parseInt(values[i]))
    {
        index = (i+1);
        break;
    }
}

console.log(index);


