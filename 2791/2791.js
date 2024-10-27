var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2791\\input.txt', 'utf8');
var lines = input.split('\n');

var copos = lines[0].split(' ');

for(var i=0; i<copos.length; i++)
{
    if(parseInt(copos[i]) === 1)
    {
        console.log(i+1);
        break;
    }
}
