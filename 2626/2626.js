var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2626\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var jogadas = lines[i].split(' ');

    if(ganhou(jogadas[0], jogadas[1]) && ganhou(jogadas[0], jogadas[2]))
    {
        console.log("Os atributos dos monstros vao ser inteligencia, sabedoria...");
        continue;
    }

    if(ganhou(jogadas[1], jogadas[0]) && ganhou(jogadas[1], jogadas[2]))
    {
        console.log("Iron Maiden's gonna get you, no matter how far!");
        continue;
    }


    if(ganhou(jogadas[2], jogadas[0]) && ganhou(jogadas[2], jogadas[1]))
    {
        console.log("Urano perdeu algo muito precioso...");
        continue;
    }

    console.log("Putz vei, o Leo ta demorando muito pra jogar...");
}

function ganhou(jogador1, jogador2)
{
    jogador1 = jogador1.replace('\n','').replace('\r','');
    jogador2 = jogador2.replace('\n','').replace('\r','');

    if(jogador1 === 'pedra' && jogador2 === 'tesoura')
        return true;

    if(jogador1 === 'tesoura' && jogador2 === 'papel')
        return true;

    if(jogador1 === 'papel' && jogador2 === 'pedra')
        return true;

    return false;
}


