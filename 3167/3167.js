var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3167\\input.txt', 'utf8');
var lines = input.split('\n');


for(var i=0; i<lines.length; i++)
{   
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var line = lines[i++].split(' ');

    var qtdPalavras = parseInt(line[0]);
    var linhas = parseInt(line[1]);
    var colunas = parseInt(line[2]);

    var palavrasBusca = [];
    for(var j=0; j<qtdPalavras; j++)
        palavrasBusca.push(lines[i++].replace('\r','').replace('\n','').toLowerCase());
    
    var mat = [];
    for(var l=0; l<linhas; l++)
    {
        var palavra = lines[i++];
        var vet = [];
        for(var c =0; c<colunas; c++)
            vet.push(palavra.charAt(c).toLowerCase());

        mat.push(vet);
    }
    var palavrasMatriz = [];    

    //diagonal secundária
    var msg = "";
    for(var l=0, c = colunas-1;l<linhas && c>=0;l++, c--)
        msg += mat[l][c];

    palavrasMatriz.push({
        "palavras": [msg],
        "localizacao": 1,
        "msg": "na diagonal secundaria"
    });

    var palavras = [];
    // abaixo diagonal secundaria
    for(var l=1; l<linhas; l++)
    {
        var msg = "";
        for(var laux=l, c=colunas-1; laux<linhas && c>=0; laux++, c--)
            msg += mat[laux][c];

        palavras.push(msg);
    }
    
    palavrasMatriz.push({
        "palavras": palavras,
        "localizacao": 3,
        "msg": "abaixo da diagonal secundaria"
    });

    
    // acima diagonal secundaria
    palavras = [];
    
    for(var c=colunas-2; c>=0; c--)
    {
        var msg = "";
        for(var l=0, caux = c; caux>=0 && l<linhas; caux--, l++)
            msg += mat[l][caux];
        
        palavras.push(msg);
    }    

    palavrasMatriz.push({
        "palavras": palavras,
        "localizacao": 2,
        "msg": "acima da diagonal secundaria"
    });

    for(var j=0; j<qtdPalavras; j++)
    {
        var deuBom = false;
        for(var k=2; k>=0; k--)
        {
            if(procuraPalavra(palavrasMatriz[k], palavrasBusca[j]))
            {
                console.log(`${palavrasMatriz[k].localizacao} Palavra "${palavrasBusca[j]}" ${palavrasMatriz[k].msg}`);
                deuBom = true;
                break;
            }
        }

        if(!deuBom)
            console.log(`4 Palavra "${palavrasBusca[j]}" inexistente`);
    }

    i--;
}

function procuraPalavra(palavrasMatriz, palavraBusca)
{
    var palavras = palavrasMatriz.palavras;
    for(var i=0; i<palavras.length; i++)
    {
        if(palavras[i].indexOf(palavraBusca) != -1)
            return true;

        if(palavras[i].split('').reverse().join('').indexOf(palavraBusca) != -1)
            return true;
    }
    return false;
}