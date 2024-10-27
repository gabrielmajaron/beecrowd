var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2846\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i]);

    var fibnacci = [1, 1];

    for(var j=0; j<8+n; j++)
    {
        fibnacci.push(fibnacci[fibnacci.length-1]+fibnacci[fibnacci.length-2]);
    }

    var fibnot = [];
    
    for(var j=0; j < fibnacci.length-1 && fibnot.length < n; j++)
    {
        var n1 = fibnacci[j];
        var n2 = fibnacci[j+1];

        for(var k=n1+1; k<n2 && fibnot.length < n; k++)
        {
            fibnot.push(k);
        }
    }
    console.log(fibnot[n-1]);
}
