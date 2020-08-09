function displayDate() {
    const currentDate = moment().format('dddd, MMMM DD, YYYY')
    const currentDateEl = $("#currentDay");
    currentDateEl.text(currentDate)
    console.log("currentDate", currentDate)

$("#searchBtn").on("click", function () {
    var APIKey = "277c25e400c8e8f8bdc2d5b9d65d0ce7";
    var queryURL = "api.openweathermap.org/data/2.5/forecast?id={city ID}&appid=277c25e400c8e8f8bdc2d5b9d65d0ce7"

    $.ajax({
        url: queryURL,
        method: "GET",
         
    }).then(function (response) {

        console.log(response);

        const results = response.respone.docs;
        const weather = $('#results');
        const temp = (response.main.temp - 273.15) * 1.80 + 32

        $(".city").html("<h1>" + response.name + "Weather Details</h1>"); 
        $(".wind").text("Wind Speed: " + response.wind.speed);
        console.log("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        console.log("Humidity: " + response.main.humidity);

        var tempF = (response.main.temp - 273.15) * 1.80 + 32

        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
        console.log("Temperature (F): " + tempF);
    })