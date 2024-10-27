var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2826\\input.txt', 'utf8');
var lines = input.split('\n');

var words = [];
for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    words.push(lines[i].replace('\r','').replace('\n',''));

}

words.sort();

for(var i=0;i<words.length;i++)
    console.log(words[i]);