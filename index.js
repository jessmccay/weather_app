$(document).ready(function (){
  var long;
  var lat;
  $.getJSON("http://ip-api.com/json", function(data2){
    lat=data2.lat;
    long=data2.lon;
    console.log(lat);
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=dd82da92994f7e7e7c175d467aa1bb78';

  $.getJSON(api, function(data){
   // alert(data.coord.lat);
    // var far;
    // var cel;
    var typeOfWeather = data.weather[0].description;
    kel = data.main.temp;
    var wind = data.wind.speed;
    var city = data.name;
  far = (kel)*(9/5)-459.67;
  cel= kel-273;

     console.log(city);
    $('#city').html(city);
    $('#typeOfWeather').html(typeOfWeather)
$('#far').html(far);

  })

  // $('#data').html("latitude: " + lat + "<br>longitude: " + long);

  });
});
