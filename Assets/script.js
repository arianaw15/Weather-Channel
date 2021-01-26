function renderButtons() {
    $(".searchBtn").on("click", function () {
        var cityName = $("#cityName").val().trim();
        var newBtn = document.createElement("button");
        newBtn.textContent = cityName;
        console.log(cityName);
        $("#search").append(newBtn).addClass(".newButton");
        weatherToday();
        storeBtn();

    })
};
renderButtons();

var d = new Date();

function weatherToday() {
    var cityName = $("#cityName").val();
    var APIKey = "14f18f856625e3dcfa23c9ccca5d5d46";
    var queryURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        $("#name").text(response.name);
        $(".date").text("Date: " + d);
        $(".temp").text("Temperature (F): " + response.main.temp);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".weatherEx").text("Current weather conditions: " + response.weather[0].main);
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var queryURL3 = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=current,minutely,hourly,alerts&units=imperial&appid=" + APIKey;
        $.ajax({
            url: queryURL3,
            method: "GET",
        }).then(function (response) {
            console.log(response)
            $(".uv").text("UV: " +response.daily[0].uvi);
            $(".card-head1").text(new Date(response.daily[1].dt));
            $(".temp1").text("Temperature will be " + response.daily[1].temp.day + " degrees.");
            $(".card-head2").text(new Date(response.daily[2].dt));
            $(".temp2").text("Temperature will be " + response.daily[2].temp.day + " degrees.");
            $(".card-head3").text(new Date(response.daily[3].dt));
            $(".temp3").text("Temperature will be " + response.daily[3].temp.day + " degrees.");
            $(".card-head4").text(new Date(response.daily[4].dt));
            $(".temp4").text("Temperature will be " + response.daily[4].temp.day + " degrees.");
            $(".card-head5").text(new Date(response.daily[5].dt));
            $(".temp5").text("Temperature will be " + response.daily[5].temp.day + " degrees.");
var uv= response.daily[0].uvi
            if (uv>5){
                $(".uv").addClass("uvLow")
            }
            else {
                $(".uv").addClass("uvHigh")
            }
        })

    })
};

//Code to select buttons created 
$("document").on("click", ".newButton", function () {
    console.log(cityName);
});

function storeBtn() {
    var cityName = $("#cityName").val().trim();
    localStorage.setItem("Buttons", cityName);
}

function getBtn(){
    var storageItem = localStorage.getItem("Buttons");
    // weatherToday();
    console.log(storageItem);
    var APIKey = "14f18f856625e3dcfa23c9ccca5d5d46";
    var queryURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" + storageItem + "&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        $("#name").text(response.name);
        $(".date").text("Date: " + d);
        $(".temp").text("Temperature (F): " + response.main.temp);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".weatherEx").text("Current weather conditions: " + response.weather[0].main);
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var queryURL3 = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=&units=imperial&appid=" + APIKey;
        $.ajax({
            url: queryURL3,
            method: "GET",
        }).then(function (response) {
            console.log(response)
            $(".uv").text("UV: " +response.daily[0].uvi);
            $(".card-head1").text(new Date(response.daily[1].dt));
            $(".temp1").text("Temperature will be " + response.daily[1].temp.day + " degrees.");
            $(".card-head2").text(new Date(response.daily[2].dt));
            $(".temp2").text("Temperature will be " + response.daily[2].temp.day + " degrees.");
            $(".card-head3").text(new Date(response.daily[3].dt));
            $(".temp3").text("Temperature will be " + response.daily[3].temp.day + " degrees.");
            $(".card-head4").text(new Date(response.daily[4].dt));
            $(".temp4").text("Temperature will be " + response.daily[4].temp.day + " degrees.");
            $(".card-head5").text(new Date(response.daily[5].dt));
            $(".temp5").text("Temperature will be " + response.daily[5].temp.day + " degrees.");
var uv= response.daily[0].uvi
            if (uv>5){
                $(".uv").addClass("uvLow")
            }
            else {
                $(".uv").addClass("uvHigh")
            }
        })

    })

}
getBtn();