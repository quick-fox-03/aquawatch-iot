# aquawatch-iot
## AquaWatch IoT - Real-time automated temperature monitoring solution.
An advanced automated solution for precise 100-hour boiling test monitoring, utilizing IoT technology to record and graphically display temperature data in real-time. This data, accessible remotely via a web portal or a mobile app, ensures continuous, accurate tracking and post-test verification for enhanced reliability.
## Implementation
- Processor : Raspberry Pi 4 Model B (Quad-coreCortex-A72 64-bit SoC @ 1.5GHz)
- Temperature Sensor: DS18B20 Digital Sensor
- Programming: Python for sensor data collection and cloud communication
- Cloud: Thingspeak Cloud
## Block Diagram
<img src="https://github.com/user-attachments/assets/aec29d42-b6e5-44b7-84a1-54c0eb85b20e" height=300 width=500>

## Circuit Diagram
<img src="https://github.com/user-attachments/assets/1bf27276-cf1b-45b6-83c8-1d3f4cc27cf4" height=300 width=500>

## Enabling One Wire Interfacing on Raspberry Pi
The temperature sensor used here, DS18B20, is a digital temperature sensor that utilizes one-wire communication (allows for 1 wire use in power and data transfer) on Raspberry Pi. Below are the steps for enabling this one wire interfacing on raspberry Pi (provided it's not done already). This step is vital for proper communication between Raspberry Pi and the sensor.
1. At the command prompt, enter `sudo nano /boot/config.txt`, then add this to the bottom of the file: `dtoverlay=w1-gpio`. Note: config.txt file may be named as something else depending on the raspberry Pi OS version, the system will inform in this case about the correct name of that file.
2. Exit Nano, and reboot the Pi with `sudo reboot`
3. Log in to the Pi again, and at the command prompt enter `sudo modprobe w1-gpio`
4. Then enter `sudo modprobe w1-therm`
5. Change directories to the `/sys/bus/w1/devices` directory by entering `cd /sys/bus/w1/devices`
6. Now enter `ls` to list the devices:
7. Now enter `cd 28-XXXXXXXXXXXX` (change the X’s to your own address)
8. Enter `cat w1_slave` which will show the raw temperature reading output by the sensor.
9. Enter `cd` to return to the root directory

## Web based data visualization platform
The web based data visualization platform relies on Thingspeak cloud to fetch data and display it in a tabular format with a graph showcasing its recent trends.

Provides users with a easy remote access to data recorded by the edge device and sent over to Thingspeak cloud as well as allows for easy integration of MATLAB analytics.

Click this [link](https://aquawatch-iot.vercel.app/) to redirect to active deployment via Vercel!
<img src="https://github.com/quick-fox-03/aquawatch-iot/blob/main/public/web%20portaljpg.jpg?raw=true">
