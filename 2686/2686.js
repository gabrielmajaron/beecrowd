var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2686\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var angulo = parseFloat(lines[i]);
    
    if(angulo == 360)
    {
        console.log("Bom Dia!!");
        console.log("06:00:00");
        continue;
    }

    if(angulo >= 0 && angulo < 90)
    {
        console.log("Bom Dia!!");
        var time = GetTimeFromDegrees(angulo);
        time[0]+=6;
        PrintTime(time);
    }
    else
    if(angulo >= 90 && angulo < 180)
    {
        angulo-=90;
        console.log("Boa Tarde!!");
        var time = GetTimeFromDegrees(angulo);
        time[0]+=12;
        PrintTime(time);
    }
    else    
    if(angulo >= 180 && angulo < 270)
    {
        angulo-=180;
        console.log("Boa Noite!!");
        var time = GetTimeFromDegrees(angulo);
        time[0]+=18;
        PrintTime(time);
    }
    else
    {
        angulo-=270;
        console.log("De Madrugada!!");
        var time = GetTimeFromDegrees(angulo);
        PrintTime(time);
    }        
}

function GetTimeFromDegrees(angulo)
{
    //90 = 21600
    //angulo = x

    //90x = 21600*angulo
    //x= (21600*angulo)/90

    var totalSegundos = parseFloat((21600*angulo)/90);    

    var horas = parseInt(totalSegundos/60/60);

    var minutosFloat = (totalSegundos - parseFloat(horas)*60*60)/60;

    var minutos = parseInt(minutosFloat);

    var result = parseFloat(minutosFloat - minutos)*60;

    var segundos = parseInt(result);

    var aux = result.toString().split(".")[1];

    if(aux != undefined)
    {
        if(aux.substring(0,3) == '999')
            segundos = Math.round(result);
    }

    return [horas,minutos,segundos];
}

function PrintTime(time)
{
    horas = time[0].toString().padStart(2, '0');
    minutos = time[1].toString().padStart(2, '0');
    segundos = time[2].toString().padStart(2, '0');

    console.log(horas+":"+minutos+":"+segundos);
}



