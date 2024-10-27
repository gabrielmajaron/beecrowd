var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2813\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var dias = parseInt(lines[i++]);
    var vet = [];
    for(var j=0; j<dias; j++)
    {
        var line = lines[i++].split(' ');
        var ida = line[0].replace('\r','').replace('\n','');
        var volta = line[1].replace('\r','').replace('\n','');
        vet.push(ida);
        vet.push(volta);
    }

    var gcCasa = 0, gcEscritorio = 0, compradosCasa = 0, compradosEscritorio = 0;
    var casa = true;
    for(var j=0; j<vet.length; j++)
    {
        if(casa)
        {
            if(vet[j] === 'chuva')
            {
                gcCasa === 0 ? compradosCasa++ : gcCasa--;
                
                gcEscritorio++;
            }
        }
        else
        {
            if(vet[j] === 'chuva')
            {
                gcEscritorio === 0 ? compradosEscritorio++ : gcEscritorio--;

                gcCasa++;
            }            
        }

        casa = !casa;
    }

    console.log(compradosCasa + " " + compradosEscritorio);
    i--;
}