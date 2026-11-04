const http = require('http');
const server = http.createServer(function(request, response) {
    response.writeHead(200);
    response.end('<h1>Salut Groupe 8 PR13</h1>')
})

server.listen(8000);

