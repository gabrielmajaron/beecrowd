var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3162\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var qtdNaves = parseInt(lines[i++]);
    var posNaves = [];

    for(var j=0; j<qtdNaves; j++)
    {
        var line = lines[i++].split(' ');
        var x = parseInt(line[0]);
        var y = parseInt(line[1]);
        var z = parseInt(line[2]);

        posNaves.push([x,y,z]);
    }

    for(var j=0; j<qtdNaves; j++)
    {
        var intensity = "B";
        for(var k=0; k<qtdNaves; k++)
        {
            if(j == k)
                continue;

            var diffX = Math.abs(posNaves[j][0] - posNaves[k][0]);
            var diffY = Math.abs(posNaves[j][1] - posNaves[k][1]);
            var diffZ = Math.abs(posNaves[j][2] - posNaves[k][2]);

            
            // Para calcular a distância (chamada magnitude) entre pontos tridimensionais ou de ainda mais dimensões, pode-se usar o Math.hypot.
            // Originalmente o nome hypot vem de hipotenusa, esse método retorna a raiz quadrada da soma dos quadrados de cada argumento (caso 2 argumentos, seriam os 2 catetos)
            var distance = Math.hypot(diffX, diffY, diffZ);

            if(distance < 20)
                intensity = "A";
            else
            if(intensity != "A" && distance <= 50)
                intensity = "M";
            else
            if(intensity != "A" && intensity != "M")
                intensity = "B";
        }

        console.log(intensity);
    }

    i--;
}

