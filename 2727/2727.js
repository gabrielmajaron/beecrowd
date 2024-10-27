var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2727\\input.txt', 'utf8');
var lines = input.split('\n');

var tabCodigo = {
    ".":"a",
    "..": "b",
    "...": "c",
    ". .": "d",
    ".. ..": "e",
    "... ...": "f",
    ". . .": "g",
    ".. .. ..": "h",
    "... ... ...": "i",
    ". . . .": "j",
    ".. .. .. ..": "k",
    "... ... ... ...": "l",
    ". . . . .": "m",
    ".. .. .. .. ..": "n",
    "... ... ... ... ...": "o",
    ". . . . . .": "p",
    ".. .. .. .. .. ..": "q",
    "... ... ... ... ... ...": "r",
    ". . . . . . .": "s",
    ".. .. .. .. .. .. ..": "t",
    "... ... ... ... ... ... ...": "u",
    ". . . . . . . .": "v",
    ".. .. .. .. .. .. .. ..": "w",
    "... ... ... ... ... ... ... ...": "x",
    ". . . . . . . . .": "y",
    ".. .. .. .. .. .. .. .. ..": "z",
};

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var qtd = parseInt(lines[i++]);

    for(var j=0; j < qtd; j++)
    {
        var codigo = lines[i++].replace("\r", '').replace('\n','');
        console.log(tabCodigo[codigo]);
    }
    i--;
}