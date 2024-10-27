var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2724\\input.txt', 'utf8');
var lines = input.split('\n');

var output = "";
for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var casos = parseInt(lines[i++]);

    for(var j=0; j<casos; j++)
    {
        var qtdCompostosPerigosos = parseInt(lines[i++]);
        var compostosPerigosos = [];

        for(var k=0; k<qtdCompostosPerigosos; k++)
            compostosPerigosos.push(lines[i++].replace("\r",'').replace("\n",''));

        var qtdFormulas = parseInt(lines[i++]);

        for(var k=0; k<qtdFormulas; k++)
        {
            var formula = lines[i++].replace("\r",'').replace("\n",'');

            var exists = false;
            for(var l=0; l<qtdCompostosPerigosos; l++)
            {
                if(verificaComposto(formula, compostosPerigosos[l]))
                {
                    exists = true;
                    break;
                }
            }
            output += exists ? "Abortar" : "Prossiga";
            output+="\n";
        }

        if(j+1 < casos)
            output+="\n";
    }

    i--;
}

process.stdout.write(output);

function verificaComposto(formula, composto) 
{
    if(formula == composto)
        return true;

    if(formula.substring(formula.indexOf(composto), formula.length) == composto)
        return true;
    
    var aux = formula.substring(formula.indexOf(composto),formula.length).split(composto); 

    if(aux.length == 1)
        return false;

    for(var i=0; i<aux.length;i++)
    {
        if(aux[i] === '')
            continue;
            
        if(!isNaN(parseInt(aux[i][0])))
            continue;

        if(/[A-Z]/.test(aux[i][0]) && !/[a-z]/.test(aux[i][0]))
            return true;
    }

    return false;
}
