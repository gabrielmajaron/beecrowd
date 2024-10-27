var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2502\\input.txt', 'utf8');
var lines = input.split('\n');

var mapC_1 = {};
var mapC_2 = {};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

for(var i=0; i<lines.length; )
{
    if(lines[i] === undefined || lines[i].split(' ')[1] ==undefined)
    {
        i++;
        continue;
    }
    
    var n = parseInt(lines[i].split(' ')[1].replace(" ",""));
    if(n == 0)
     return;
    var c1 = lines[i+1];
    var c2 = lines[i+2];
    mapC_1 = {};
    mapC_2 = {};

    for(var j=0; j < c1.length; j++)
    {
        mapC_1[c2[j]] = c1[j];
        mapC_2[c1[j]] = c2[j];
    }
    
    i+=3;
    var msg;
    for(var j=i; j<i+n; j++)
    {
        var msgC = lines[j];
        
        msg = "";
        for(var k=0; k<msgC.length; k++)
        {
            if(mapC_1[msgC[k].toUpperCase()] !== undefined)
            {
                if(isLetter(msgC[k]) && msgC[k] == msgC[k].toUpperCase())
                {
                    msg += mapC_1[msgC[k].toUpperCase()];     
                }
                else
                    msg += (mapC_1[msgC[k].toUpperCase()]).toLowerCase();           
            }
            else
            if(mapC_2[msgC[k].toUpperCase()] !== undefined)
            {
                if(isLetter(msgC[k]) && msgC[k] == msgC[k].toUpperCase())
                {
                    msg += mapC_2[msgC[k].toUpperCase()];
                }
                else
                    msg += (mapC_2[msgC[k].toUpperCase()]).toLowerCase();
            }
            else
                msg += msgC[k];
        }
        console.log(msg);
    }
    console.log();
    i+=n;
}
