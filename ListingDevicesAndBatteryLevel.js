/* 
Listing all devices with Battery and the Battery Level (sorted by battery level)
Version: 1.1
Requirements: Homey Pro
*/

let devices = await Homey.devices.getDevices();
let batteryDevices = [];

// Collect devices with battery levels
_.forEach(devices, device => {
    if (device.capabilitiesObj && device.capabilitiesObj.measure_battery) {
        let batteryLevel = device.capabilitiesObj.measure_battery.value;
        let name = device.name;
        batteryDevices.push({ name, batteryLevel });
    }
});

// Sort devices by battery level (ascending)
batteryDevices.sort((a, b) => a.batteryLevel - b.batteryLevel);

// Display sorted devices
batteryDevices.forEach(device => {
    console.log(`${device.name}: ${device.batteryLevel}%`);
});
