import * as Http from "http";
import * as Url from "url";

export namespace A09Server { //Namespace 'A08Server' wird erstellt 
  console.log("Starting server"); //Ausgabe in Konsole: Starting Server
  let port: number = Number(process.env.PORT); //Variable 'port' vom typ number wird erstellt um dem webserver zu sagen auf welchen Port es hören soll  
  if (!port)        //Wenn es keinen Port gibt wird der port auf 8100 gesetzt
    port = 8100;

  let server: Http.Server = Http.createServer();  // Variable Server wird erstellt, ist vom Typ Http.Server, http Server Objekt wird erstellt 
  server.addListener("request", handleRequest);   //Eventlistener werden dem Server hinzugefügt, lösen Eventhandler handleRequest und handleListen aus
  server.addListener("listening", handleListen);  
  server.listen(port); //server listens auf port, wenn port Netzzugang bekommt 

  function handleListen(): void {   // Funktion handleListen wird definiert, hat keinen Rückgabewert 
    console.log("Listening");       //Konsole gibt "Listening" aus 
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Funktion handleRequest wird definiert, ohne Rückgabewert, Parameter request repräsentiert request für den Server, 
    //Parameter ServerResponse repräsentiert beschreibbaren Stream zurück zum client

    //console.log("I hear voices!"); //Konsolenausgabe "I hear voices!"
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
     //bestimmt einen einzigen Header Wert
    

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string | null = url.pathname;
      if (path == "//html") {
        for (let key in url.query) {
          _response.write(key + ": " + url.query[key] + "<br/>");
        }
      }
      else if (path == "//json") {
        let jsonString: string = JSON.stringify(url.query);
        _response.write(jsonString);
      }
      
    }

    /* _response.write(_request.url); //schreibt URL als Output 
    console.log(_request.url); */

    _response.end(); //server soll nachricht als komplett verstehen
  }
}