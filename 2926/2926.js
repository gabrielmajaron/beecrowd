var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2926\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i]);

    if(n === 0)
    {
        console.log("Enta eh Natal!");
        continue;
    }

    var msg = "Ent$o eh N$t$l!";
    var msgToReplace = "";

    for(var j=0;j<n;j++)
        msgToReplace+="a";

    msg = msg.replace("$",msgToReplace).replace("$",msgToReplace).replace("$",msgToReplace);
    console.log(msg);
}