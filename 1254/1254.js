var input = require('fs').readFileSync('C:\\Users\\gabri\\OneDrive\\Área de Trabalho\\Dev\\uri_judge\\1254\\input.txt', 'utf8');
var lines = input.split('\n');

for(var i=0; i<lines.length; i++)
{
    if(lines[i] === undefined || lines[i] === '')
        continue;

    var old = lines[i++].replace('\r','');
    var new_ = lines[i++].replace('\r','');
    var line = lines[i];

    var output = "";
    for(var j=0; j<line.length;j++)
    {
        while(j<line.length && line[j] != '<')
            output += line[j++];
        
        if(line[j] == '<')
        {
            j++;
            var tagText = "";
            while(j<line.length && line[j] != '>')
                tagText += line[j++];

            if(line[j] == '>')
            {
                var re = new RegExp(`${old}`, 'gi');                
                tagText = tagText.replace(re, new_);

                output+="<"+tagText+">";
            }
        }
    }
    console.log(output);

}