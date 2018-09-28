var api = 'https://fcc-weather-api.glitch.me/api/current?';

$(document).ready(function() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = 'lat=' + position.coords.latitude;
            var lon = 'lon=' + position.coords.longitude;
            getWeather(lat, lon);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }

    function getWeather(lat, lon) {
        var urlString = api + lat + '&' + lon;

        $.ajax({
            url: urlString,
            success: function(result) {
                $('.temperature').html((Math.round(result.main.temp * 10) / 10) + '&deg;');
                $('.location').html(result.name + ', ' + result.sys.country);
                $('.climateIco').attr('src', result.weather[0].icon);
                $('.humidity').html(result.main.humidity + '&percnt;');
                $('.windSpeed').html(result.wind.speed + 'km/h');
                console.log(result.weather[0].id);
            }
        });
    }
});
