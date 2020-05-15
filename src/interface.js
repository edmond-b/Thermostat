'use strict'

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#EnergyUsage').css('color', 'orange');
  $('#temperature').css('color', 'orange');
  $('#up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powermodeoff').click(function(){
      thermostat.switchPowerSavingModeOff();
      $("#PowerMode").text('Off');
  });

  $('#powermodeon').click(function(){
      thermostat.switchPowerSavingModeOn();
      $("#PowerMode").text('On');
  });


  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  };

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
    if(thermostat.energyUsage() === 'Low-Usage') {
      $('#temperature').css('color', 'deepskyblue');
      $('#EnergyUsage').text('Low-Usage');
      $('#EnergyUsage').css('color', 'green');
    } else if(thermostat.energyUsage() === 'Medium-Usage') {
      $('#temperature').css('color', 'orange');
      $('#EnergyUsage').text('Medium-Usage');
      $('#EnergyUsage').css('color', 'orange');
    } else {
      $('#temperature').css('color', 'red');
      $('#EnergyUsage').text('High-Usage');
      $('#EnergyUsage').css('color', 'red')
  };
  };
});
