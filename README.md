# homeyScript
Utilizing JavaScript, I've developed some automation scripts for Homey Pro. 

Requirements

	•	Homey Pro: The script is designed specifically for Homey Pro.
 	•	HomeyScript must be installed on the Homey Pro


## List Devices by Battery Level

This HomeyScript lists all devices connected to a Homey Pro that have a battery level, sorts them by their battery percentage (ascending), and displays the results. It provides an easy way to monitor the battery levels of your devices and prioritize replacements or recharging.

### Notes

	•	The script skips devices that do not have a measure_battery capability.
	•	Battery levels are displayed in ascending order, with the lowest battery percentage shown first.

 ## List Devices with Classes and Capabilities

This HomeyScript retrieves and displays all connected devices along with their respective classes and capabilities. It provides a comprehensive overview of the devices in your Homey Pro setup.

### Features

	•	Device Overview: Lists all devices connected to Homey Pro.
	•	Device Classes: Displays the class of each device.
	•	Device Capabilities: Shows all capabilities associated with each device.


### Notes

	•	Devices without capabilities are displayed without a capabilities list.
	•	The script outputs all results directly to the console for easy viewing.


 ##

