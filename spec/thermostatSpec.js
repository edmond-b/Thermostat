'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('When power saving mode is on', function() {
    it('Has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('When power saving mode if off', function() {
    it('Has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  it('Temperature can be reset to defult', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    };
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('Defults to 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('Power saving is on by defult', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('Can switch off power saving mode', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('Can switch power saving mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('Can turn up the heat', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('Can turn the heat down', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('Has a minimum temp of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    };
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  describe('Displaying usage levels', function() {
    describe('When the temperature is below 18 degrees', function() {
      it('Displays low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        };
        expect(thermostat.energyUsage()).toEqual('Low-Usage');
      });
    });

    describe('When the temperature is between 18 and 25 degrees', function() {
      it('Displays medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('Medium-Usage');
      });
    });

    describe('When the temperature is above 25 degrees', function() {
      it('Displays high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        };
        expect(thermostat.energyUsage()).toEqual('High-Usage');
      });
    });
  });
});
