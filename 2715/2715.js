var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2715 - nv7\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    // ------------------------- Limpando entrada -----------------------------------------------
    while((lines[i] === undefined || lines[i] === '' || lines[i] == '\r') && i<lines.length)
        i++;

    if(i == lines.length)
        break;
        
    // ------------------ Lendo primeiro valor da entrada ---------------------------------------
    var qtdTrabalhos = parseInt(lines[i++]);
    
    // ------------------------- Limpando entrada -----------------------------------------------
    while((lines[i] === undefined || lines[i] === '' || lines[i] == '\r') && i<lines.length)
        i++;

    if(i == lines.length)
        break;

    // ------------------------ Limpando e lendo segundo valor da entrada ------------------------
    var line = lines[i++].replace('\r','').replace('\n','').replace('  ',' ');

    if(line[0] === ' ')
        line = line.substring(1, line.length);

    var trabalhos = line.split(' ');

    while(trabalhos.length < qtdTrabalhos && i<lines.length)
    {
        var line = lines[i++].replace('\r','').replace('\n','').replace('  ',' ');

        if(line[0] === ' ')
            line = line.substring(1, line.length);

        trabalhos = trabalhos.concat(line.split(' '));
    }
    // ---------------------------- Resolvendo exercicio ------------------------------------------
    
    var k = qtdTrabalhos-1;
    var j = 0;

    var somaDificuldadesRangel = 0;
    var somaDificuldadesGugu = 0;

    var trabalhos = trabalhos.filter(function (el) {
        return el !== null && el !== undefined && el !== '';
      });

    while(j<=k)
    {
        if(somaDificuldadesRangel <= somaDificuldadesGugu)
            somaDificuldadesRangel += parseInt(trabalhos[j++]);
        else
            somaDificuldadesGugu += parseInt(trabalhos[k--]);
    }

    console.log(Math.abs(somaDificuldadesGugu - somaDificuldadesRangel));

    i--;
}






