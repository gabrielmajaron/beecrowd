var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1222\\input.txt', 'utf8');
var lines = input.split('\n');

// nao pode quebrar metade de uma palavra, tem que dar split e trabalhar com a lista de palavras
for(var i=0; i<lines.length; i++)
{            
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var regras = lines[i++].split(' ').map((x) => {
        return parseInt(x);
    });

    var texto = lines[i++].replace('\r', '').replace('\n', '');

    var linhas = Math.ceil(texto.length/regras[2]);
    var paginas = linhas/regras[1];
    console.log(Math.ceil(paginas));
    i--;
}