    var APIKey = "277c25e400c8e8f8bdc2d5b9d65d0ce7";
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=277c25e400c8e8f8bdc2d5b9d65d0ce7"

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response {
        console.log(queryURL);
        console.log(resonse);
        const temp = (response.main.temp-273.15)*1.80+32
        console.logIte

        $(".city").html("<h1>" + resonse.name + "Weather Details</h1>");
        $(".wind").text("Wind Speed: " + resonse.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);

        var tempF = (resonse.main.temp-273.15)*1.80+32

        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        console.log("Wind Speed: "+ response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
    }

    
