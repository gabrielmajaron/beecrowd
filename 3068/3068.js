var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3068\\input.txt', 'utf8');
var lines = input.split('\n');

var teste = 1;

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');
    var x1 = parseInt(line[0]);
    var y1 = parseInt(line[1]);
    var x2 = parseInt(line[2]);
    var y2 = parseInt(line[3]);

    if(x1 === 0 && x2 === 0 && y1 === 0 && y2 === 0)
        return;

    var minx, maxx, miny, maxy;

    minx = x1 <= x2 ? x1 : x2;
    maxx = x1 >= x2 ? x1 : x2;
    miny = y1 <= y2 ? y1 : y2;
    maxy = y1 >= y2 ? y1 : y2;
    
    var meteoros = parseInt(lines[i++]);
    var entrouTerreno = 0;

    for(var j=0; j<meteoros; j++)
    {
        line = lines[i++].split(' ');
        var mx = parseInt(line[0]);
        var my = parseInt(line[1]);

        if(mx >= minx && mx <= maxx && my >= miny && my <= maxy)
            entrouTerreno++;
    }

    console.log(`Teste ${teste++}`);
    console.log(entrouTerreno);

    i--;
}