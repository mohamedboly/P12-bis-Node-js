import http from 'http';

const server = http.createServer(function(request, response){
    response.end("Salut GR7 de P13");
});

server.listen(8000);