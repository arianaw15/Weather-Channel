var cityName = $("#cityName").val().trim();
var queryURl = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=ffb7d89855d02b19a877cab03ce8e95d"
$(".searchBtn").on("click", function () {
    alert(cityName);
})

function cityBtn() {

}