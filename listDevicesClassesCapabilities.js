// Listing all devices, their respective classes, and capabilities.
// version: 1.0
// requierements: Homey Pro
// HD Rapin @ 2024

let devices = await Homey.devices.getDevices();

_.forEach(devices, (device) => {
    console.log(`Device Name: ${device.name}`);
    console.log(`Class: ${device.class}`);
    
    if (device.capabilitiesObj) {
        console.log('Capabilities:');
        _.forEach(device.capabilitiesObj, (value, key) => {
            console.log(`  - ${key}`);
        });
    }
    console.log('-----------------------------------');
});
