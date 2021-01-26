
function renderButtons(){
$(".searchBtn").on("click", function () {
    var cityName = $("#cityName").val().trim();
    var newBtn= document.createElement("button");
    newBtn.textContent= cityName;
  console.log(cityName);
$("#search").append(newBtn).addClass(".newButton");
weatherToday();
weatherForecast();
})
};
renderButtons();

var d = new Date();
function weatherToday(){
var cityName = $("#cityName").val();
      var APIKey = "14f18f856625e3dcfa23c9ccca5d5d46";
      var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKey;
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        $("#name").text(response.name);
        $(".date").text("Date: " + d);
        $(".temp").text("Temperature (Kelvin): "+response.main.temp);
        $(".humidity").text("Humidity: "+ response.main.humidity);
        $(".weatherEx").text("Current weather conditions: "+response.weather[0].main);
        // $(".temp").text(response.list.main.temp);
      })
    }
    ;

    function weatherForecast(){
        var cityName = $("#cityName").val();
        var APIKey = "14f18f856625e3dcfa23c9ccca5d5d46";
        var queryURL2= "https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&cnt=5&appid="+APIKey;
        $.ajax({
            url: queryURL2,
            method: "GET",
          }).then(function (response) {
              console.log(response);
              var nextDay= d.setDate(d.getDate() + 1);
              console.log(nextDay);
              $(".temp1").text("Temperature will be "+response.list[0].main.temp);
              $(".temp2").text("Temperature will be "+response.list[1].main.temp);
              $(".temp3").text("Temperature will be "+response.list[2].main.temp);
              $(".temp4").text("Temperature will be "+response.list[3].main.temp);
              $(".temp5").text("Temperature will be "+response.list[4].main.temp);
              
    })
};

//Code to select buttons created 
$(document).on("click",".newButton",function(){
console.log(cityName)
});
