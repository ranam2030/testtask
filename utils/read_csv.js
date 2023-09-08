import path from 'path';
import { readFileSync } from 'fs';

//var csv is the CSV file with headers
function csvJSON(){
    var csv = readFileSync(path.join(process.cwd(),"./data/data.csv"), 'utf8');
    var lines=csv.split("\n");
  
    var result = [];
    var headers=lines[0].split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
 
    var finalJson =  JSON.stringify(result);
    return finalJson;
  }

export default csvJSON;