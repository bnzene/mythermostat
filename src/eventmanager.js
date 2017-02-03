$(document).ready(function() {
  $('#PSM').text(thermostat.getPSM());
  updateTemperature();
});

$('#up').on("click", function () {
  thermostat.up();
  updateTemperature();
  // $('#usage').text(thermostat.getCurrentUsage())
});

$('#down').on("click", function () {
  thermostat.down()
  updateTemperature();
  // $('#usage').text(thermostat.getCurrentUsage())
});

$('#power-saving').on("click", function () {
  thermostat.powerSavingModeSwitcher()
  $('#PSM').text(thermostat.getPSM())
});

$('#reset').on("click", function () {
  thermostat.reset()
  updateTemperature();
});

function updateTemperature() {
  $('#temperature').text(thermostat.getTemperature());
  $('#usage').text(thermostat.getCurrentUsage())
  $('#usage').attr('class', thermostat.getCurrentUsage());
}
