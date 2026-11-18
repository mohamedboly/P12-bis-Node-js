import http from 'node:http';
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import fs from 'node:fs';



const filename = fileURLToPath(import.meta.url);
const actualDirname = dirname(filename);

const server = http.createServer(function (request, response) {
    const url = new URL(request.url, "http://localhost");
    const page = url.pathname; // recupere la page demandee
    console.log(url.searchParams.get("pays"));
    console.log(url.searchParams.get("continent"));

    if(page === '/') {
        fs.readFile(`${actualDirname}/html/home.html`, function (err, data) {
            if (err) {
                throw err
            }

            response.end(data)
        })
    }else if(page === '/contact') {
        fs.readFile(`${actualDirname}/html/contact.html`, function (err, data) {
            if (err) {
                throw err
            }

            response.end(data)
        })
    } else if(page === '/about') {
        fs.readFile(`${actualDirname}/html/about.html`, function (err, data) {
            if (err) {
                throw err
            }

            response.end(data)
        })
    } else {
        fs.readFile(`${actualDirname}/html/not-found.html`, function (err, data) {
            if (err) {
                throw err
            }

            response.end(data)
        })
    }
})

server.listen(8000, function () {
    console.log('serveur demarre');
});

server.on('close', function() {
    console.log("serveur arrete")
})