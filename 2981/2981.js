var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2981\\input.txt', 'utf8');
var lines = input.split('\n');

var values = lines[0].split(' ').map(e => parseInt(e));

var days = parseInt(values[0] / values[1]);

var day = days + 21;

if(day > 30)
{
    day -= 30;
    console.log(`A UFSC fecha dia ${day} de outubro.`);
    return;
}

console.log(`A UFSC fecha dia ${day} de setembro.`);