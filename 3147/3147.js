var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3147\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');

    var b1 = parseInt(line[0]);
    var b2 = parseInt(line[1]);
    var b3 = parseInt(line[2]);
    var m1 = parseInt(line[3]);
    var m2 = parseInt(line[4]);
    var b4 = parseInt(line[5]);

    var r = b1+b2+b3+b4-m1-m2;

    r >= 0 ? console.log("Middle-earth is safe.") : console.log("Sauron has returned.");
    i--;
}