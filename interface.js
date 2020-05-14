$(document).ready(function() { 
    var thermostat = new Thermostat

    console.log("FUCK JQUERY!");

    $('#up').click(function() {
      console.log("I have clicked the up button");
    });

    $('#powermode').click(function() {
      thermostat.switchPowerSavingModeOn();
      $('#Power_Mode').text('on');
    });
    
    $('#down').click(function() {
      thermostat.down()
      $('#Temperature').text(thermostat.getCurrentTemperature());
    });

    
});