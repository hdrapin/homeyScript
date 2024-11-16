// This HomeyScript lists all available tags for each accessory connected to Homey, including specific tags for each card

// Main function to list tags
async function listTags() {
  let devices = await Homey.devices.getDevices();
  let result = '';

  for (let deviceId in devices) {
    let device = devices[deviceId];
    result += `Device: ${device.name}\n`;

    // List the device's tags
    if (device.capabilities) {
      for (let capability of device.capabilities) {
        let tagValue = device.capabilitiesObj[capability]?.value;
        result += `  - Capability: ${capability}, Value: ${tagValue}\n`;
      }
    }

    // Retrieve available tags for action cards
    if (device.capabilitiesOptions) {
      for (let capability in device.capabilitiesOptions) {
        if (device.capabilitiesOptions[capability]?.uiComponent === 'tag') {
          let tagName = device.capabilitiesOptions[capability].title;
          result += `  - Tag: ${tagName}\n`;
        }
      }
    }
    result += '\n';
  }

  return result;
}

// Execute the function and display the results
listTags()
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));
