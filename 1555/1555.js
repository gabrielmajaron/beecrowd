var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1555\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=1; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var x = parseInt(lines[i].split(' ')[0]);
    var y = parseInt(lines[i].split(' ')[1]);

    var r = ((3*x)*(3*x)) + (y*y);
    var b = (2*(x*x))+((5*y)*(5*y));
    var c = (-100*x) + (y*y*y);
    
    if(r > b && r > c)
    {
        console.log("Rafael ganhou");
        continue;
    }

    if(b > r && b > c)
    {
        console.log("Beto ganhou");
        continue;
    }

    console.log("Carlos ganhou");
}
