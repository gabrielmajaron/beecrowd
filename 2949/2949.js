var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2949\\input.txt', 'utf8');
var lines = input.split('\n');

var races = {
    "A":{
        name:"Anao",
        pluralChar:"oes",
        amount:0
    },
    "E":{
        name:"Elfo",
        pluralChar:"s",
        amount:0
    },
    "H":{
        name:"Humano",
        pluralChar:"s",
        amount:0
    },
    "M":{
        name:"Mago",
        pluralChar:"s",
        amount:0
    },
    "X":{
        name:"Hobbit",
        pluralChar:"s",
        amount:0
    }
}

for(var i=0; i<lines.length; i++)
{    
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var qtdLinhas = parseInt(lines[i++]);

    for(var j=0; j<qtdLinhas; j++)
    {
        var line = lines[i++].split(' ');
        var charRace = line[1][0];
        var race = races[charRace];
        race.amount++;
    }

    var charRaces = ["X","H","E","A","M"];

    for(var j=0; j<charRaces.length; j++)
    {
        var race = races[charRaces[j]];
        console.log(`${race.amount} ${race.name}(${race.pluralChar})`);
    }

    i--;
}