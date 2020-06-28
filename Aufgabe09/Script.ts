namespace Aufgabe09 {

    let formData: FormData;
    
    let buttonActionHTML: HTMLButtonElement = <HTMLButtonElement> document.getElementById("sendenHTML");
    buttonActionHTML.addEventListener("click", handleClickHtml);

    let buttonActionJson: HTMLButtonElement = <HTMLButtonElement> document.getElementById("sendenJSON");
    buttonActionJson.addEventListener("click", handleClickJson);

    
    async function handleClickHtml(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://thyra.herokuapp.com/";
        serverURL += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();
        
        let response: Response = await fetch(serverURL);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }

    

    async function handleClickJson(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://thyra.herokuapp.com/";
        serverURL += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        let response: Response = await fetch(serverURL);
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