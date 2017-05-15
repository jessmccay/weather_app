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
    var wind = data.wind.speed.toFixed(1);
    var city = data.name;
  far = (kel*(9/5)-459.67).toFixed(1);
  cel= (kel-273).toFixed(1);
  var temp = true;
// make sure JSON is getting pulled
     console.log(city);
    $('#city').html(city);
    $('#typeOfWeather').html(typeOfWeather)
    $('#far').html(far + "&#8457");
    wind = (2.237*(wind)).toFixed(1)
    $('#wind').html(wind + " mph");
          $('#far').click(function(){
        if(temp === false){
          $('#far').html(cel + "&#8451;")
          temp = true;
        }
        else {
          $('#far').html(far + "&#8457")
          temp = false;
        }
      });
    if(far>70){
      $('body').css(  'background-image', 'url(https://cdn.pixabay.com/photo/2016/12/17/19/24/weather-1914182_1280.jpg)');
    }
    else if(far>60 && far<70) {
      $('body').css(  'background-image', 'url(https://www.nps.gov/common/uploads/stories/images/nri/20150202/articles/022434C1-F9EC-A94E-0D43FF1D055221DB/022434C1-F9EC-A94E-0D43FF1D055221DB.jpg)');
    }
    else if(far>50 && far<60){
      $('body').css(  'background-image', 'url(https://images.pexels.com/photos/28621/pexels-photo-28621.jpg?w=940&h=650&auto=compress&cs=tinysrgb)');
    }
  })

  // $('#data').html("latitude: " + lat + "<br>longitude: " + long);

  });
});
