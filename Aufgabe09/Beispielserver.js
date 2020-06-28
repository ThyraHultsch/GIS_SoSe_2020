"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const Url = require("url");
var A09Server;
(function (A09Server) {
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
        //console.log("I hear voices!"); //Konsolenausgabe "I hear voices!"
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //bestimmt einen einzigen Header Wert
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "//html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (path == "//json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        /* _response.write(_request.url); //schreibt URL als Output
        console.log(_request.url); */
        _response.end(); //server soll nachricht als komplett verstehen
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=Beispielserver.js.map