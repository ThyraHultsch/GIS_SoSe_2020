"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server"); //Ausgabe in Konsole: Starting Server
    let port = Number(process.env.PORT); //Variable 'port' vom typ number wird erstellt um dem webserver zu sagen auf welchen Port es hören soll  
    if (!port) //Wenn es keinen Port gibt wird der port auf 8100 gesetzt
        port = 8100;
    let server = Http.createServer(); // Variable Server wird erstellt, ist vom Typ Http.Server, http Server Objekt wird erstellt 
    server.addListener("request", handleRequest); //Eventlistener werden dem Server hinzugefügt, lösen Eventhandler handleRequest und handleListen aus
    server.addListener("listening", handleListen);
    server.listen(port); //server listens auf port, wenn port Netzzugang bekommt 
    function handleListen() {
        console.log("Listening"); //Konsole gibt "Listening" aus 
    }
    function handleRequest(_request, _response) {
        //Parameter ServerResponse repräsentiert beschreibbaren Stream zurück zum client
        console.log("I hear voices!"); //Konsolenausgabe "I hear voices!"
        _response.setHeader("content-type", "text/html; charset=utf-8"); //bestimmt ein einzigen Header Wert
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); //schreibt URL als Output 
        console.log(_request.url);
        _response.end(); //server soll nachricht als komplett verstehen
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=Beispielserver.js.map