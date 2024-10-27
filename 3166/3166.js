var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\3166\\input.txt', 'utf8');
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

    //diagonal principal
    var msg = "";
    for(var j=0; j<linhas; j++) 
        msg += mat[j][j];

    palavrasMatriz.push({
        "palavras": [msg],
        "localizacao": 1,
        "msg": "na diagonal principal"
    });

    var palavras = [];

    // abaixo diagonal principal
    for(var l=0; l<linhas; l++)
    {
        msg = "";
        for(var laux=l+1, caux = 0; laux<linhas && caux<colunas; laux++)
        {
            msg += mat[laux][caux];
            caux++;
        }
       palavras.push(msg);
    }
    
    palavrasMatriz.push({
        "palavras": palavras,
        "localizacao": 3,
        "msg": "abaixo da diagonal principal"
    });

    
    // acima diagonal principal
    palavras = [];
    for(var c=0; c<colunas; c++)
    {
        msg = "";
        for(var caux=c+1, laux = 0; caux<colunas && laux<linhas; caux++)
        {            
            msg += mat[laux][caux];
            laux++;
        }
        palavras.push(msg);
    }

    palavrasMatriz.push({
        "palavras": palavras,
        "localizacao": 2,
        "msg": "acima da diagonal principal"
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