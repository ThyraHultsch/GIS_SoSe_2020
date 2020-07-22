import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Eis {

    let formularData: Mongo.Collection;
    let databaseUrl: string;

    let myArgs: string[] = process.argv.slice(2);
    if (myArgs[0] == "local") {
        databaseUrl = "mongodb://localhost:27017";
    } else {
        databaseUrl = "mongodb+srv://Testuser:1234@cluster0.whstr.mongodb.net/Endabgabe?retryWrites=true&w=majority";
    }
    connectToDatabase(databaseUrl);

    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);

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
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string | null = url.pathname;
            if (path == "/anzeigen") {
                formularData.find({}).toArray(function (err: Mongo.MongoError, result: string[]): void {
                    if (err) {
                        throw err;
                    }
                    let resultString: string = "";
                    for (let i: number = 0; i < result.length; i++) {
                        resultString += JSON.stringify(result[i]) + ",";

                    }

                    console.log(resultString);
                    _response.write(JSON.stringify(resultString));
                    _response.end();
                });
            }

            else if (path == "/bestellen") {
                formularData.insertOne(url.query);
            }
        }
    }

}