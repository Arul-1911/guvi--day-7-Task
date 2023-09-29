let request = new XMLHttpRequest;
request.open('GET','https://restcountries.com/v2/all');
request.send()


request.onload  = function (){
  let result = JSON.parse(request.response)
  let population = result.reduce((acc,element) => {
    return acc+element.population;
},0)
  console.log(population);
  

  

  

}