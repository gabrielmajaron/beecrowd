var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2231\\input.txt', 'utf8');
var lines = input.split('\n');
var teste = 1;

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var values = lines[i].split(' ').map(e => parseInt(e));
    var n = values[0];
    var m = values[1];

    if(n ==0 && m == 0)
        break;

    var temperaturas = [];
    for(var j=0; j<n; j++)
        temperaturas.push(parseInt(lines[++i]));
    
    var min = 9999, max = -9999;
    for(var j=0; j<n && j+m<=n; j++)
    {
        var sum = 0;
        for(var k=j, interval = 0; k<n && interval<m; k++, interval++)
            sum+=temperaturas[k];
        
        var r = sum/m;

        if(r < min)
            min = r;

        if(r > max)
            max = r;
    }
    
    console.log(`Teste ${teste++}`);
    console.log(`${parseInt(min)} ${parseInt(max)}`);
    console.log();
}