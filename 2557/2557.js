var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2557\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i].replace('+', '=').replace('\r','').split('=');

    var a = line[0] == 'R' ? line[0] : parseInt(line[0]);
    var b = line[1] == 'L' ? line[1] : parseInt(line[1]);
    var c = line[2] == 'J' ? line[2] : parseInt(line[2]);
    
    if(a == 'R')
    {
        console.log(c-b);
        continue;
    }
    
    if(b == 'L')
    {
        console.log(c-a);
        continue;
    }

    console.log(a+b);
}
