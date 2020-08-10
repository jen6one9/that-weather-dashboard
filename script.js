var APIKey = "277c25e400c8e8f8bdc2d5b9d65d0ce7";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=277c25e400c8e8f8bdc2d5b9d65d0ce7"


$(document).ready(function () {
    // once the user clicks on search, then call the api for weather data
    $('#userInput').click(function () {
        var city = $('#city').val();
        console.log(city);
        if (city != '') {
            FivedayForecast(city)
            showData(city)
        } else {
            $('#error').html('Field cannot be blank');

        }

    });
    function FivedayForecast(city) {
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&APPID=277c25e400c8e8f8bdc2d5b9d65d0ce7&units=imperial",
            method: "GET",
        }).then(function (apidata) {
            console.log(apidata);
            var block = 1
            for (let i = 0; i < apidata.list.length; i = i + 8) {
                $(`#${block}-weather`).text(apidata.list[i].weather[0].main)
                $(`#${block}-date`).text(apidata.list[i].dt_txt)
                $(`#${block}-temp`).text(apidata.list[i].main.temp)
                $(`#${block}-humidity`).text(apidata.list[i].main.humidity)
                $(`#${block}-speed`).text(apidata.list[i].wind.speed)
                block++
            }
        })

    }



    function showData(city) {
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&APPID=277c25e400c8e8f8bdc2d5b9d65d0ce7&units=imperial",
            method: "GET",
        }).then(function (apidata) {
            console.log(apidata);


            $(`#weather`).text("Weather:" + apidata.weather[0].main)
            $(`#current-date`).text(apidata.dt_txt)
            $(`#temp`).text(apidata.main.temp)
            $(`#humid`).text(apidata.main.humidity)
            $(`#wind`).text(apidata.wind.speed)
            $("#current-weather").text(apidata.name)
            var lat = apidata.coord.lat
            var lon = apidata.coord.lon
            let uv;
            const uvIndex = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=277c25e400c8e8f8bdc2d5b9d65d0ce7`
            $.ajax({
                url: uvIndex,
                method: "GET"
            }).then(function (uvIndex) {
                $("#UV").text(uvIndex.value)
            });

        })

        // $('.city').html("<h1>" + response.name + "Weather Details</h1>");
        // $('.wind').text("Wind Speed: " + response.wind.speed);
        // console.log("Wind Speed: " + response.wind.speed);
        // $('.humidity').text("Humidity: " + response.main.humidity);
        // console.log("Humidity: " + response.main.humidity);

        // var tempF = (response.main.temp - 273.15) * 1.80 + 32

        // $('.temp').text("Temperature (K) " + response.main.temp);
        // $('.tempF').text("Temperature (F) " + tempF.toFixed(2));
        // console.log("Temperature (F): " + tempF);

        // // Need to display the weather icon

        // let weatherIcon = document.querySelector('.weather-icon');
        // const { icon } = data.weather[0];
        // locationIcon.innerHTML = `img src='icons/${icon}.png'`;

        // Need to display the UV index

    }
    // // get the date display from moments.js
    // function displayDate() {
    //     const currentDate = moment().format('dddd, MMMM DD, YYYY')
    //     const today = $("#currentDay");
    //     currentDateEl.text(currentDate)
    //     console.log("currentDate", currentDate)

    //     // get input from the user    
    //     function myFunction() {
    //         var input, filter, ul, li, a, i, txtValue;
    //         input = document.getElementById("userInput");
    //         filter = input.value.toUpperCase();
    //         ul = document.getElementById("searchUL");
    //         li = ul.getElementsByTagName("li");
    //         for (i = 0; i < li.length; i++) {
    //             a = li[i].getElementsByTagName("a")[0];
    //             txtValue = a.textContent || a.innerText;
    //             if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //                 li[i].style.display = "";
    //             } else {
    //                 li[i].style.display = "none";
    //             }
    //         }
    //     

})