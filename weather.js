$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
<body>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <h1>I'm on the left</h1>
      </div>
      <div class="col-sm-4">
        <h1>I'm in the middle!!</h1>
      </div>
      <div class="col-sm-4">
        <h1>I'm on the right</h1> 
      </div>
    </div>
  </div>
</body>


    var markup = "The weather report... " + "is here!";

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