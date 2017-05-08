var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

$(document).ready(function () {
  $(".slider").on("click", function () {
   if($("#temp").value() == "C") {
    $("#temp").html = "F";
   }
   else{
       $("#temp").html = "C";
    }
});

   });
