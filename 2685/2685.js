var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2685\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var angulo = parseInt(lines[i]);

    if(angulo== 360 || (angulo >=0 && angulo < 90))
        console.log("Bom Dia!!");
    else
    if(angulo >= 90 && angulo < 180)
        console.log("Boa Tarde!!");
    else    
    if(angulo>=180 && angulo < 270)
        console.log("Boa Noite!!");        
    else
        console.log("De Madrugada!!");        
}



