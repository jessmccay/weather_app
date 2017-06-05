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
    $('#wind').html("Wind: " + wind + " mph");
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
        if(typeOfWeather === "clear sky"){
          $('body').css(  'background-image', 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURNlGchsvJZEFDq2AQ16Ttk78w1lBUyXemdMyiTdsdhRo93eaNA)');
        }
        else if (typeOfWeather === "few clouds"){
          $('body').css(  'background-image', 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetKEQcauXLHx9pxB0PZWgHFHeNjzTo4WeGcnSOZcXZ-N2kRkn)');
        }
      }
      else if(far<70 && far>60) {
        $('body').css(  'background-image', 'url(https://c2.staticflickr.com/6/5274/5810163712_ac8a7f249e_b.jpg)');
      }
      else if(typeOfWeather === "few clouds"){
          $('body').css(  'background-image', 'url(https://c2.staticflickr.com/6/5274/5810163712_ac8a7f249e_b.jpg)');
      }
      else if(far<60 && far>40){
        $('body').css(  'background-image', 'url(https://cdn.pixabay.com/photo/2014/01/10/17/48/leaves-241701_960_720.jpg)');
      }
      else {
         $('body').css(  'background-image', 'url(http://www.samanthalienhard.com/wp-content/uploads/2013/11/DSCF9037.jpg)');
      }
  })

  // $('#data').html("latitude: " + lat + "<br>longitude: " + long);

  });
});
