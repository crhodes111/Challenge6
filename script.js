var cityInput = document.getElementById("cityInputButton")
var myfunction = function(){
var cityName = document.getElementById("cityInput").value;
console.log(cityName)

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=bf38229c443f86d1aebdddd765b527c1")

    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
         latcoordinate = response.coord.lat
         longcoordinate = response.coord.lon 
         
        return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latcoordinate + "&lon=" + longcoordinate + "&exclude={part}&appid=bf38229c443f86d1aebdddd765b527c1")
         
        .then(function(response1) {
          return response1.json();
        })
        .then(function(response1) {
          console.log(response1);
        
        //current temp variables
        var currentTemp = response1.current.temp;
        var currentHumidity = response1.current.humidity;
        console.log(currentHumidity);
        var currentUV = response1.current.uvi;
        var currentWind = response1.current.wind_speed;
        //5 day variables
        var day1Temp = response1.daily[0].temp.day;
        var day2Temp = response1.daily[1].temp.day;
        var day3Temp = response1.daily[2].temp.day;
        var day4Temp = response1.daily[3].temp.day;
        var day5Temp = response1.daily[4].temp.day;
        var day1Wind = response1.daily[0].wind_speed;
        var day2Wind = response1.daily[1].wind_speed;
        var day3Wind = response1.daily[2].wind_speed;
        var day4Wind = response1.daily[3].wind_speed;
        var day5Wind = response1.daily[4].wind_speed;
        var day1Humidity = response1.daily[0].humidity;
        var day2Humidity = response1.daily[1].humidity;
        var day3Humidity = response1.daily[2].humidity;
        var day4Humidity = response1.daily[3].humidity;
        var day5Humidity = response1.daily[4].humidity;
        console.log(day5Humidity)
        //Document Elements
        

        
        var currentContainer = document.querySelector("#currentconditions")
        var currentTempPEl = document.createElement("p");
        var currentHumidityPEl = document.createElement("p");
        var currentUVPEl = document.createElement("p");
        var currentWindPEl = document.createElement("p");
        currentTempPEl.textContent = "Current Temperature: " + currentTemp;
        currentHumidityPEl.textContent = "Current Humidity: " + currentHumidity;
        currentWindPEl.textContent = "Current Wind Speed: " + currentWind;
        currentUVPEl.textContent = "Current UV Index: " + currentUV;
        currentContainer.appendChild(currentTempPEl); 
        currentContainer.appendChild(currentHumidityPEl);
        currentContainer.appendChild(currentWindPEl);
        currentContainer.appendChild(currentUVPEl) ;
        
        //Document Elements 5 day
        var firstdayContainer = document.querySelector("#firstday");
        var seconddayContainer = document.querySelector("#secondday");
        var thirddayContainer = document.querySelector("#thirdday");
        var fourthdayContainer = document.querySelector("#fourthday");
        var fifthdayContainer = document.querySelector("#fifthday");
        var firstdayTemp = document.createElement("p");
        var seconddayTemp = document.createElement("p");
        var thirddayTemp = document.createElement("p");
        var fourthdayTemp = document.createElement("p");
        var fifthdayTemp = document.createElement("p");
        var firstdayHumidity = document.createElement("p");
        var seconddayHumidity = document.createElement("p");
        var thirddayHumidity = document.createElement("p");
        var fourthdayHumidity = document.createElement("p");
        var fifthdayHumidity = document.createElement("p");
        var firstdayWind = document.createElement("p");
        var seconddayWind = document.createElement("p");
        var thirddayWind = document.createElement("p");
        var fourthdayWind = document.createElement("p");
        var fifthdayWind = document.createElement("p");
        firstdayTemp.textContent = "Temp: " + day1Temp
        seconddayTemp.textContent = "Temp: " + day2Temp
        thirddayTemp.textContent = "Temp: " + day3Temp
        fourthdayTemp.textContent = "Temp: " + day4Temp
        fifthdayTemp.textContent = "Temp: " + day5Temp
        firstdayHumidity.textContent = "Humidity: " + day1Humidity
        seconddayHumidity.textContent = "Humidity: " + day2Humidity
        thirddayHumidity.textContent = "Humidity: " + day3Humidity
        fourthdayHumidity.textContent = "Humidity: " + day4Humidity
        fifthdayHumidity.textContent = "Humidity: " + day5Humidity
        firstdayWind.textContent = "Wind: " + day1Wind
        seconddayWind.textContent = "Wind: " + day2Wind
        thirddayWind.textContent = "Wind: " + day3Wind
        fourthdayWind.textContent = "Wind: " + day4Wind
        fifthdayWind.textContent = "Wind: " + day5Wind
        firstdayContainer.appendChild(firstdayTemp);
        firstdayContainer.appendChild(firstdayHumidity);
        firstdayContainer.appendChild(firstdayWind);
        seconddayContainer.appendChild(seconddayTemp);
        seconddayContainer.appendChild(seconddayHumidity);
        seconddayContainer.appendChild(seconddayWind);
        thirddayContainer.appendChild(thirddayTemp);
        thirddayContainer.appendChild(thirddayHumidity);
        thirddayContainer.appendChild(thirddayWind);
        fourthdayContainer.appendChild(fourthdayTemp);
        fourthdayContainer.appendChild(fourthdayHumidity);
        fourthdayContainer.appendChild(fourthdayWind);
        fifthdayContainer.appendChild(fifthdayTemp);
        fifthdayContainer.appendChild(fifthdayHumidity);
        fifthdayContainer.appendChild(fifthdayWind);

        
})
      })
}
cityInput.addEventListener("click", myfunction);