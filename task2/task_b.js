var request=new XMLHttpRequest();
   request.open('GET','https://restcountries.eu/rest/v2/all');
   request.send();
   request.onload=function (){
   var countryData=JSON.parse(this.response);
   const populate=countryData.filter((element)=>{
        return element.population<200000;
   })
   console.log(populate);}