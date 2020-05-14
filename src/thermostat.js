'use strict'

class Thermostat{

  constructor(){
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.DEFULT_TEMPERATURE = 20;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.temperature = this.DEFULT_TEMPERATURE;
    this.powerSavingMode = true;
  };

  getCurrentTemperature(){
    return this.temperature;
  };

  up() {
    if (this.isMaximumTemperature()) {
      return;
    };
    this.temperature += 1;
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
    };
    this.temperature -=1;
  };

  resetTemperature() {
    this.temperature = this.DEFULT_TEMPERATURE;
  };

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  };

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  };

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  };

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'Low-Usage';
    };
    if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
      return 'Medium-Usage';
    };
    return 'High-Usage';
  };
};
