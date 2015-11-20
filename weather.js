$(function()
  {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
var markup = "the temperature is " + data.currently.temperature + " F today" + "<br>" + "Also it's very "
+ data.currently.icon + "<br>" + data.alerts[0].title + "!" + "<br>" + "If you're from " + data.timezone + " then be careful!!!" + "<br>"
+ "Windy city's wind speed is: " + data.currently.windSpeed + " mph :D"
;
    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});