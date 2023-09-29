let request = new XMLHttpRequest;
request.open('GET','https://restcountries.com/v2/all');
request.send();


request.onload = function (){
   let result = JSON.parse(request.response);
   result.forEach(element => {
    console.log(element.name,element.capital,element.flag);
    
   });
   };
   








