var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2334\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined)    
        continue;

    var value = BigInt(lines[i]);
        
    if(value === BigInt(-1))
        return;
        
    if(value === BigInt(0))
    {
        console.log(0);
        continue;
    }

    console.log(value - BigInt(1)+'');
}

