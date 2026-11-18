import http from 'node:http';

const server = http.createServer(function (request, response) {
    // response.writeHead(200,  "L'operation a ete un echec", {"content-type": 'text/html', "mon-header": 'mon entete personnalisee'});
    response.setHeader('content-type', 'text/html');
    response.setHeader('mon-header', 'mon entete personnalisee');
    response.statusCode = 200;
    response.statusMessage = "L'operation a ete un succes"

    response.writeHead(200,  "L'operation a ete un success", {"content-type": 'text/html', "mon-header": 'mon entete personnalisee'});
    
    response.write("<h1 style='color: red'>Introduction a node js</h1>");
    response.write("<h1> un autre titre de type h1 <h1/>")
    response.end("text");
   
});

server.listen(8000);

