var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2927\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var inputs = lines[i].replace('\r', '').split(' ').map(elem => parseInt(elem));
    // para computadores funcionais >= alunos+1(1 sendo o professor): Igor feliz!
    // para computadores funcionais < alunos+1 E computadores queimados <= (computadores/2): Igor bolado!
    // último caso: Caio, a culpa eh sua!

    var alunos = inputs[0];
    var computadores = inputs[1];
    var queimados = inputs[2];
    var semCompilador = inputs[3];

    var computadoresFuncionais = computadores - queimados - semCompilador;
    var caioCulpado = queimados > semCompilador/2;

    if(computadoresFuncionais >= alunos+1)
    {
        console.log("Igor feliz!");
        continue;
    }

    if(computadoresFuncionais < alunos+1 && caioCulpado)
    {
        console.log("Caio, a culpa eh sua!");
        continue;
    }

    console.log("Igor bolado!");
}