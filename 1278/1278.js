var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1278\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var n = parseInt(lines[i++]);

    if(n === 0)
        break;

    var inputs = [];
    var maxLength = 0;
    for(var j=i; j<n+i; j++)
    {
        var line = lines[j];
        line = line.replace('\r','').split(' ').filter((e)=>e!=='').join(' ');

        inputs.push(line);

        if(line.length > maxLength)
            maxLength = line.length;
    }
    var msg = "";
    for(var j=0; j<inputs.length; j++)
    {
        var line = inputs[j];
        var space = "";

        while(space.length < (maxLength-line.length))
            space+=" ";

        msg+=space+line+'\n';
    }

    i+=n-1;
    if(lines[i+1] === '' || parseInt(lines[i+1]) === 0)
        msg = msg.substring(0, msg.length-1);
    console.log(msg);
}