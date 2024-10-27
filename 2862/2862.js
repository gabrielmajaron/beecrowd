var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2862\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);

    for(var k=0; k<n; k++)
    {
        var valor = parseInt(lines[i++]);
        console.log(valor > 8000 ? "Mais de 8000!" : "Inseto!");
    }

    i--;
}