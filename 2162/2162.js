//var lines = ["3", "1 2 1"];

var lines = ["6", "100 99 112 -8 -7 -7"];

//var lines =["4", "1 2 2 1"];

var n = parseInt(lines[0]);
var values = lines[1].split(' ');
var listBool = [];

for(var i=1;i<n;i++)
{
    if(parseInt(values[i-1]) == parseInt(values[i]))
    {
        console.log(0);
        return;
    }
    listBool.push(parseInt(values[i-1]) > parseInt(values[i]));
}

var validator = false;
var success = true;

listBool.forEach(element => {
    element != validator ? success = false : validator = !validator;
});

if(!success)
{
    success = true;
    validator = true;
    
    listBool.forEach(element => {
        element != validator ? success = false : validator = !validator;
    });    
}

success ? console.log(1) : console.log(0);










