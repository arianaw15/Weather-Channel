var cities= [""]

function renderButtons(){
$(".searchBtn").on("click", function () {
    var cityName = $("#cityName").val().trim();
    alert(cityName);
  console.log(cityName);
$("#search").append("<button>" + cityName);
})
};
renderButtons();
$("button").on("click",function(){
    console.log(this);
})

var queryURl =
  "api.openweathermap.org/data/2.5/forecast?q="+ cities +"&appid=ffb7d89855d02b19a877cab03ce8e95d";


// function renderButtons() {
        
//     for (let index = 0; index < cities.length; index++) {
//       const element = cities[index];
//       $("#search").append("<button>" + element);
//       console.log(element);
//     }
    
//     $(".searchBtn").on("click", function (event) {
//         var cityName = $("#cityName").val().trim();
//         $("#search").push("<button>" + cityName); 
//       });

//         renderButtons();
//       };
//   renderButtons();
