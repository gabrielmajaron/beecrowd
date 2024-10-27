var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3065\\input.txt', 'utf8');
var lines = input.split('\n');

var teste = 1;

for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var operandos = parseInt(lines[i++]);

    if(operandos == 0)
        return;

    var line = lines[i++];
    var result = 0;
    var j;

    var numVet = GetNextNum(0, line);    
    
    result = numVet[0];
    j = numVet[1];

    var signal = line[j++];

    while(j<line.length)
    {
        var numVet = GetNextNum(j, line);       
        j = numVet[1];  
        
        result = signal == '-' ? result - numVet[0] : result + numVet[0];
        signal = line[j++];
    }
    console.log(`Teste ${teste}`);
    console.log(result);
    console.log();
    teste++;
    i--;
}

function GetNextNum(pos, line)
{
    var strNum = "";
    var j;
    for(j=pos; j<line.length && line[j] != '-' && line[j] != '+'; j++)
        strNum+=line[j];

    return [parseInt(strNum), j];
}

