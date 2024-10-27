var lines = ['3','115380','2819311','23456'];

var n = parseInt(lines[0]);

var leds = {
    '0':6,
    '1':2,
    '2':5,
    '3':5,
    '4':4,
    '5':5,
    '6':6,
    '7':3,
    '8':7,
    '9':6
}

for(var i=0;i<n;i++)
{
    var v = lines[i+1]+'';
    var soma = 0;
    for(var j = 0;j<v.length;j++)
    {
        soma+=leds[v[j]];
    }

    console.log(soma + " leds");
}