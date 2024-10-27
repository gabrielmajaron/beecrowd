var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2554\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var datas = parseInt(lines[i].split(' ')[1]);
    var dataEvento = '';

    var auxPos = i;

    for(var j=0; j<datas; j++)
    {
        auxPos++;
        var line = lines[auxPos].split(' ');
        var totalSim = 0;        

        for(var k=1; k<line.length; k++)
        {
            if(parseInt(line[k]) === 1)
                totalSim++;
        }

        if(totalSim == line.length-1)
        {
            dataEvento = lines[auxPos].split(' ')[0];
            auxPos = i + datas;
            break;
        }
    }   
    i = auxPos;

    dataEvento === '' ? console.log("Pizza antes de FdI") : console.log(dataEvento);
}




