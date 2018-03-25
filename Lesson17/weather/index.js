//Weather is a module for obtaining weather information.
var weather = require("weather-js");

weather.find({search: "Kyiv, Ukraine", degreeType: "C"}, function(err, result) {

    if (err) { 
		console.log(err) 
    };

    var weatherNow = JSON.parse(JSON.stringify(result, null, 2)); 
          
  	var name = weatherNow[0].location["name"];	
  	var date = weatherNow[0].current["date"]; 
  	var skytext = weatherNow[0].current["skytext"];
    var temperature = weatherNow[0].current["temperature"];
    var observationtime = weatherNow[0].current["observationtime"];
  
  	console.log("City: " +name+ "; Data: " +date+ "; Weather: " +skytext+ "; Temperature: " +temperature+ "°C" + "; Time: " +observationtime+ ";");
});
