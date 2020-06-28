"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let buttonActionHTML = document.getElementById("sendenHTML");
    buttonActionHTML.addEventListener("click", handleClickHtml);
    let buttonActionJson = document.getElementById("sendenJSON");
    buttonActionJson.addEventListener("click", handleClickJson);
    async function handleClickHtml() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://thyra.herokuapp.com/";
        serverURL += "/html";
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let response = await fetch(serverURL);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    async function handleClickJson() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://thyra.herokuapp.com/";
        serverURL += "/json";
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let response = await fetch(serverURL);
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