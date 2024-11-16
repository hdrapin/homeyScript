// Fetch the list of devices and zones using the Homey API
const devices = await Homey.devices.getDevices();
const zones = await Homey.zones.getZones();

// Initialize an object to store temperatures by zone
let temperaturesByZone = {};

// Loop through each device to find those that measure temperature
for (let deviceId in devices) {
  let device = devices[deviceId];

  // Check if the device has a temperature sensor
  if (device.capabilitiesObj && device.capabilitiesObj.measure_temperature) {
    // Retrieve the current temperature
    let temperature = device.capabilitiesObj.measure_temperature.value;

    // Get the zone name
    let zoneName = zones[device.zone]?.name || 'Unknown Zone';

    // Initialize the entry for this zone if necessary
    if (!temperaturesByZone[zoneName]) {
      temperaturesByZone[zoneName] = { temperatures: [], thermostatInfo: '' };
    }

    // Add the temperature to the list of temperatures for this zone
    temperaturesByZone[zoneName].temperatures.push(temperature);

    // If the device is a thermostat, retrieve the target temperature
    if (device.capabilitiesObj.target_temperature) {
      let targetTemperature = device.capabilitiesObj.target_temperature.value;
      temperaturesByZone[zoneName].thermostatInfo += `${device.name} (Thermostat): Current Temperature ${temperature}°C, Target Temperature ${targetTemperature}°C\n`;
    }
  }
}

// Build the result for each zone
let result = 'Temperature list by room:\n';

for (let zoneName in temperaturesByZone) {
  let zoneData = temperaturesByZone[zoneName];
  let temperatures = zoneData.temperatures;

  // Calculate the minimum and maximum temperatures
  let minTemperature = Math.min(...temperatures);
  let maxTemperature = Math.max(...temperatures);

  result += `\n${zoneName}:\n`;

  if (minTemperature === maxTemperature) {
    result += `-  ${minTemperature}°C\n`;
  } else {
    result += `- Temperature ranges from ${minTemperature}°C to ${maxTemperature}°C\n`;
  }

  // Add thermostat information if available
  if (zoneData.thermostatInfo) {
    result += `Thermostat Information:\n${zoneData.thermostatInfo}`;
  }
}

// Return the result or a message if no temperatures are found
return result || 'No temperatures found in the house.';
