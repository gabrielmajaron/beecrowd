var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\2377\\input.txt', 'utf8');
var lines = input.split('\n');

var comprimento = parseInt(lines[0].split(' ')[0]);
var distEntrePedagios = parseInt(lines[0].split(' ')[1]);

var custoKm = parseInt(lines[1].split(' ')[0]);
var valorPedagio = parseInt(lines[1].split(' ')[1]);

var custoPercorrido = custoKm * comprimento;
var total = custoPercorrido + (parseInt(comprimento/distEntrePedagios)*valorPedagio);

console.log(total);
