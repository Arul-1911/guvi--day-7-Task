var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/all'); 
request.send();

request.onload = function () {
 
    var data = JSON.parse(request.response);

    for (let i = 0; i < data.length; i++) {
      if (data[i].currencies) { 
        for (let j = 0; j < data[i].currencies.length; j++) {
          if (data[i].currencies[j].code === "USD") {
            console.log("Name:", data[i].name, "==>", "Currency Code:", data[i].currencies[j].code);
          }
        }
      }
    
  }
};
