import * as Http from "http";

export namespace A08Server { //Namespace 'A08Server' wird erstellt 
  console.log("Starting server"); //Ausgabe in Konsole: Starting Server
  let port: number = Number(process.env.PORT); //Variable 'port' vom typ number wird erstellt um dem webserver zu sagen auf welchen Port es hören soll  
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);

    _response.end();
  }
}