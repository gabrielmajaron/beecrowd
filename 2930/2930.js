var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2930\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');
    var diaEntregue = parseInt(line[0]);
    var prazo = parseInt(line[1]);

    if(diaEntregue > prazo)
        console.log("Eu odeio a professora!");
    else
    if(prazo-diaEntregue >= 3)
        console.log("Muito bem! Apresenta antes do Natal!");
    else
    {
        console.log("Parece o trabalho do meu filho!");

        diaEntregue+=2;

        if(diaEntregue >= 24)
            console.log("Fail! Entao eh nataaaaal!");
        else
            console.log("TCC Apresentado!");
    }

    i--;
}