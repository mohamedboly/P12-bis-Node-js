import EventEmitter  from "node:events";

const eventEmiiter = new EventEmitter();

eventEmiiter.on("response", function(donnee1, donnee2) {
    console.log("mon premier evenement");
    console.log(donnee1, donnee2);
});

eventEmiiter.emit('response', 'salut', 'Bonjour');