var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1235\\input.txt', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines[0]);

for(var i=1; i<n+1; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;
    
    var word = lines[i].replace('\n', '').replace('\r','');
    
    var output = "";
    for(var j=parseInt(word.length/2)-1; j>=0; j--)
        output+=word[j];    
    for(var j=word.length-1; j>parseInt(word.length/2)-1; j--)
        output+=word[j];

    console.log(output);
}
