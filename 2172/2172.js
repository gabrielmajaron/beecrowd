var lines = ["1 544768710","2 538533133","3 38884958","0 0"];


for(var i=0; i<lines.length; i++)
{
    var mult = parseInt(lines[i].split(' ')[0]);
    var exp = parseInt(lines[i].split(' ')[1]);

    if(mult === 0 && exp === 0)
        break;

    console.log(mult*exp);
}