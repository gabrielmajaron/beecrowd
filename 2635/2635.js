var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2635\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var nPalavrasDigitadas = parseInt(lines[i++]);
    
    var historico = [];

    for(var j=0;j<nPalavrasDigitadas;j++)
    {
        var palavraDigitada = lines[i++];
        palavraDigitada = palavraDigitada.replace('\r','').replace('\n','');

        historico.push(palavraDigitada);
    }
    
    var nConsultas = parseInt(lines[i++]); 

    for(var j=0;j<nConsultas;j++)
    {
        var consulta = lines[i++];
        consulta = consulta.replace('\r','').replace('\n','');
    
        var qtdeHistorico = 0;
        var maxLength = -1;   
        
        for(var k=0;k<historico.length;k++)
        {
            var palavraHistorico = historico[k];
            if(palavraHistorico.startsWith(consulta))
            {
                qtdeHistorico++;

                if(palavraHistorico.length > maxLength)
                    maxLength = palavraHistorico.length;
            }
        }
        
        if(qtdeHistorico == 0)
        {
            console.log(-1);
            continue;
        }

        console.log(qtdeHistorico+ ' ' + (maxLength));
    }

    i--;
}

