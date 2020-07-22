"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eis = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Eis;
(function (Eis) {
    let formularData;
    let databaseUrl;
    let myArgs = process.argv.slice(2);
    if (myArgs[0] == "local") {
        databaseUrl = "mongodb://localhost:27017";
    }
    else {
        databaseUrl = "mongodb+srv://Testuser:1234@cluster0.whstr.mongodb.net/Endabgabe?retryWrites=true&w=majority";
    }
    connectToDatabase(databaseUrl);
    let port = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        formularData = mongoClient.db("Endabgabe").collection("Lieferdaten");
    }
    function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/anzeigen") {
                formularData.find({}).toArray(function (err, result) {
                    if (err) {
                        throw err;
                    }
                    let resultString = "";
                    for (let i = 0; i < result.length; i++) {
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
})(Eis = exports.Eis || (exports.Eis = {}));
//# sourceMappingURL=server.js.map