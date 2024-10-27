var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2757\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var a = parseInt(lines[i++]);
    var b = parseInt(lines[i++]);
    var c = parseInt(lines[i++]);

    console.log(`A = ${a}, B = ${b}, C = ${c}`);
    console.log(buildMessage(a,b,c,' ', false));
    console.log(buildMessage(a,b,c,'0', true));
    console.log(buildMessage2(a,b,c,' '));

    i--;
}

function buildMessage(a, b, c, symbol, verifyNegative)
{
    var strA = "", strB = "", strC = "";

    var qtdSymbol = 10-a.toString().length;

    for(var i=0; i<qtdSymbol;i++)
        strA+=symbol;

    strA+=a.toString();

    qtdSymbol = 10-b.toString().length;

    for(var i=0; i<qtdSymbol;i++)
        strB+=symbol;
    
    strB+=b.toString();

    qtdSymbol = 10-c.toString().length;

    for(var i=0; i<qtdSymbol;i++)
        strC+=symbol;

    strC+=c.toString();

    if(verifyNegative)
    {
        if(strA.indexOf('-')>=0)
        {
            strA = strA.replace('-','');
            strA = "-" + strA;
        }
        if(strB.indexOf('-')>=0)
        {
            strB = strB.replace('-','');
            strB = "-" + strB;
        }
        if(strC.indexOf('-')>=0)
        {
            strC = strC.replace('-','');
            strC = "-" + strC;
        }
    }

    return `A = ${strA}, B = ${strB}, C = ${strC}`;
}

function buildMessage2(a, b, c, symbol)
{
    var message = "A = "+a.toString();

    var qtdSymbol = 10-a.toString().length;
    
    for(var i=0; i<qtdSymbol;i++)
        message+=symbol;

    message+=", B = "+b.toString();

    qtdSymbol = 10-b.toString().length;

    for(var i=0; i<qtdSymbol;i++)
        message+=symbol;
    
    message+=", C = "+c.toString();

    qtdSymbol = 10-c.toString().length;

    for(var i=0; i<qtdSymbol;i++)
        message+=symbol;

    return message;
}
