var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2867\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var casos = parseInt(lines[i++]);

    for(var j=0; j<casos; j++)
    {
        var line = lines[i++].split(' ');
        
        var n = BigInt(parseInt(line[0]));
        var m = BigInt(parseInt(line[1]));        

        var r = (n**m).toLocaleString('fullwide', {useGrouping:false});

        console.log(r.length);
    }

    i--;
}