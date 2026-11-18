import http from 'node:http';
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const filename = fileURLToPath(import.meta.url);
const actualDirname = dirname(filename);
console.log("----- nom du repertoire -----------")
console.log(actualDirname);

console.log("---- filename -------");

console.log(filename)

const server = http.createServer(function(request, response) {
    response.writeHead(200,  "OK", {"content-type": 'text/html'});
    
      fs.readFile(`${actualDirname}/index.html`, function(err, data) {
        if(err) {
            throw err;
        }
        console.log('le contenu de data')
        console.log(data.toString());
        response.end(data);
      });
   
});

server.listen(8000);