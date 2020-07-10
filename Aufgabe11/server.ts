import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb"; //Imports

export namespace Aufgabe11 {

    let formularData: Mongo.Collection; //Datenbank Mongo Collection 
    let databaseUrl: string;

    let myArgs: string[] = process.argv.slice(2); //abfragen obs lokal oder remote ist und alles was hintendran steht kommt in den Array
    if (myArgs[0] == "local") {
        databaseUrl = "mongodb://localhost:27017";
    } else {
        databaseUrl = "mongodb+srv://Testuser:1234@cluster0.whstr.mongodb.net/Aufgabe11?retryWrites=true&w=majority";
    }


    connectToDatabase(databaseUrl);

    let port: number = Number(process.env.PORT);
    if (!port) {
      port = 8100;
    }

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);    
        await mongoClient.connect();      //Mongoclient connecten
        formularData = mongoClient.db("Aufgabe11").collection("Formular");  //Name Datenbank und Collection Name damit man drauf zugreifen kann
    }
    
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");  
    
        if (_request.url) {   //mitgeschicktes Parsen
          let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
          let path: string | null = url.pathname;
          if (path == "/zeigen") {
            formularData.find({}).toArray(function(err: Mongo.MongoError, result: string[]): void {   //alles was du findest zum Array machen
            if (err)
              throw err;
            
            let resultString: string = "";    //leerer String damit man was reinmachen kann 
            for (let i: number = 0; i < result.length; i++) {
              resultString += JSON.stringify(result[i]) + ",";  
            }
    
            console.log(resultString);
            _response.write(JSON.stringify(resultString));    //wird als json string ausgegeben
            _response.end();
            });
            }
            
          else if (path == "/rein")
            formularData.insertOne(url.query);
        }
    }
    


}
