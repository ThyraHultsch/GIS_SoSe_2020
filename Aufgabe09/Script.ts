namespace Aufgabe09 {

    let formData: FormData;
    
    let buttonHTML: HTMLButtonElement = <HTMLButtonElement> document.getElementById("sendenHTML");
    buttonHTML.addEventListener("click", handleClickHtml);

    let buttonJson: HTMLButtonElement = <HTMLButtonElement> document.getElementById("sendenJSON");
    buttonJson.addEventListener("click", handleClickJson);

    
    function handleClickHtml(): void {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://thyra.herokuapp.com/";
        serverURL += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();
        
        communicateHtml(serverURL);
        
    }

    async function communicateHtml(_serverURL: RequestInfo): Promise<void> {
        let response: Response = await fetch(_serverURL);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }

    function handleClickJson(): void {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://thyra.herokuapp.com/";
        serverURL += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        communicateJson(serverURL);

        
    }

    async function communicateJson(_serverURL: RequestInfo): Promise<void> {
        let response: Response = await fetch(_serverURL);
        let responseText: string = await response.json();
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
} 