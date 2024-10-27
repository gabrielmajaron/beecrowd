var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3124\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i].split(' ');
    var garrafasVaziasExistentes = parseInt(line[0]);
    var garrafasVaziasAdicionais = parseInt(line[1]);
    var necessariasPraRefri = parseInt(line[2]);

    var totalGarrafasVazias = garrafasVaziasExistentes + garrafasVaziasAdicionais;
    var r = totalGarrafasVazias/necessariasPraRefri;
    var soma = r>=1 ? r : 0;

    while(r>1)
    {
        r/=necessariasPraRefri;
        soma+=r;
    }
    
    console.log(parseInt(soma));
}