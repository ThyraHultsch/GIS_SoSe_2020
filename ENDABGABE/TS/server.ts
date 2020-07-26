import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

//Orientiert am Code von Aufgabe 11

export namespace Eis {

    let formularData: Mongo.Collection;
    let databaseUrl: string;
    
    databaseUrl = "mongodb+srv://Testuser:1234@cluster0.whstr.mongodb.net/Endabgabe?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);

    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        formularData = mongoClient.db("Endabgabe").collection("Lieferdaten");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {
            let resultString: string = "";
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string | null = url.pathname;
            
            if (path == "/anzeigen") {
                formularData.find({}).toArray(function (err: Mongo.MongoError, result: string[]): void {
                    if (err) {
                        throw err;
                    }
                    resultString = resultString + "[";
                    for (let i: number = 0; i < result.length; i++) {
                        resultString += JSON.stringify(result[i]);

                        if (i != result.length - 1) {
                            resultString = resultString + ",";
                        }

                    }
                    resultString = resultString + "]";

                    console.log(resultString);
                    _response.write(JSON.stringify(resultString));
                    _response.end();
                });
            }

            else if (path == "/bestellen") {
                formularData.insertOne(url.query);
                _response.end();
            }

            else if (path == "/loeschen") {
                console.log(url.query.id);
                formularData.deleteOne({"_id": new Mongo.ObjectID(<string>url.query.id)});
                _response.end();
            }
        }
    }

}