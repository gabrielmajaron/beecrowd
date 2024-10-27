var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2896\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var n = parseInt(lines[i++]);
    for(var k=0;k<n;k++)
    {
        var line = lines[i++].split(' ');
        var cheias = parseInt(line[0]);
        var vaziasPromocao = parseInt(line[1]);

        var resto = cheias % vaziasPromocao;        
        var totalGarrafasAposCompra = parseInt(cheias/vaziasPromocao)+resto;
        
        console.log(totalGarrafasAposCompra);
    }

    i--;
}