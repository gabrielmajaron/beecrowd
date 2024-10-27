var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2718\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].replace('\r','').replace('\n','');

    var qtdGrupos = parseInt(line);
    
    for(var j=0; j<qtdGrupos;j++)
    {
        line = lines[i++].replace('\r','').replace('\n','');

        var grupo = parseInt(line);

        var binary = grupo.toString(2);

        var grupoQueimadas = binary.split('0');

        var maiorQtd = grupoQueimadas[0].length;

        for(var k=1;k<grupoQueimadas.length;k++)
        {
            if(grupoQueimadas[k].length > maiorQtd)
                maiorQtd = grupoQueimadas[k].length;
        }

        console.log(maiorQtd);
    }

    i--;
}
