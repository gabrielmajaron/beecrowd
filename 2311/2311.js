var lines = ["3","Gabriela","2.0","6.0 5.0 5.0 5.0 5.0 5.0 4.0","Marina","1.5","8.5 7.0 8.0 8.0 8.4 7.5 7.7","Mafalda","3.0","6.0 7.0 6.5 6.8 7.9 6.2 6.6"];

var atletas = parseInt(lines[0]);

var size;
var max, min;
var posMax, posMin;

function obtemMaiorMenor(value, index){
    
    value = parseFloat(value);
    if(index === 0)
    {
        posMax = posMin = 0;        
        max = min = value;
        return;
    }

    if(value > max)
    {
        max = value;
        posMax = index;
    }

    if(value < min)
    {
        min = value;
        posMin = index;
    }
    size=index;
}

function soma(pontos){
    var _soma = 0;
    
    pontos.forEach((value, index)=>{
        if(index == posMax || index == posMin)
            return;
        _soma += parseFloat(value);
    });

    return _soma;
}

for(var i=1; i<atletas*3; i+=3)
{
    var nome = lines[i];
    var peso = parseFloat(lines[i+1]);

    var pontos = lines[i+2].split(' ');
    pontos.forEach(obtemMaiorMenor);
    var _soma = soma(pontos);
    
    console.log(nome+" "+ (_soma*peso).toFixed(2));
}





