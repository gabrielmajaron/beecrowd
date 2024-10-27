var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2968\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');

    var voltas = parseInt(line[0]);
    var placas = parseInt(line[1]);

    var totalPlacas = voltas * placas;

    var msg = "";
    for(var j=10; j<=90; j+=10)
    {
        var calcPlacas = totalPlacas*j/100;
        msg += Math.ceil(calcPlacas);

        if(j+10<=90)
            msg+=" ";
    }

    console.log(msg);
    
    i--;
}
