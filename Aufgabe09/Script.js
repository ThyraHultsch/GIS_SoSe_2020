"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let buttonHTML = document.getElementById("sendenHTML");
    buttonHTML.addEventListener("click", handleClickHtml);
    let buttonJson = document.getElementById("sendenJSON");
    buttonJson.addEventListener("click", handleClickJson);
    function handleClickHtml() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://thyra.herokuapp.com/";
        serverURL += "/html";
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        communicateHtml(serverURL);
    }
    async function communicateHtml(_serverURL) {
        let response = await fetch(_serverURL);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    function handleClickJson() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://thyra.herokuapp.com/";
        serverURL += "/json";
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        communicateJson(serverURL);
    }
    async function communicateJson(_serverURL) {
        let response = await fetch(_serverURL);
        let responseText = await response.json();
        console.log(responseText);
    }
    /* function handleClick(): void {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://thyra.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        communicate(url);
       
    }
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response =  await fetch(_url);
        let responseText: string = await response.text();
        console.log(responseText);
    }
 */
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=Script.js.map