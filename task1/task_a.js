let req = new XMLHttpRequest;
req.open("GET","https://restcountries.com/v2/all");
req.send();

req.onload = function(){
    let result = JSON.parse(req.response);
    let country = result.filter((x) => {
        if(x.region === "Asia"){
            return x.name
        }


    })
    console.log(country);


}