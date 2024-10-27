var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2760\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var a = lines[i++].replace('\n', '').replace('\r','');
    var b = lines[i++].replace('\n', '').replace('\r','');   
    var c = lines[i++].replace('\n', '').replace('\r','');

    console.log(`${a}${b}${c}`);
    console.log(`${b}${c}${a}`);
    console.log(`${c}${a}${b}`);
    console.log(`${a.substring(0, 10)}${b.substring(0, 10)}${c.substring(0, 10)}`);

    i--;
}