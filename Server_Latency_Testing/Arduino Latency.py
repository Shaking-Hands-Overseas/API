"""
Author : Joel Garcia (@Newtoniano20 / Newtoniano#1173 on discord)
This code was created for the Project Shaking Hands Overseas with the purpouse of moving a hand from the other side
of the ocean. Any questions feel free to ask.
"""

from serial import Serial
from time import sleep
from requests import get
from json import loads
from time import sleep, time
import matplotlib.pyplot as plt

# Code intro:
print(
    'Arduino Serial Sender \n Author: @Newtoniano20 (Joel Garcia) \n Github: https://github.com/Shaking-Hands-Overseas/Arduino-Serial-Sender \n')

# Global Variables.
# SERIAL PORT: Windows = COM1, COM2,... // Linux = /dev/ttyACM0, /dev/ttyACM1,...
SERIAL_PORT = ['COM1', 'COM2', 'COM3', '/dev/ttyACM0', '/dev/ttyACM1', '/dev/ttyACM2']
# ARDUINO SERIAL BAUDRATE
BAUDRATE = 9600
# API URL FOR RECEIVING DATA
URL = ''


def ask_user():
    print(f"\n[0]'COM1', [1]'COM2', [2]'COM3', \n[3]'/dev/ttyACM0', [4]'/dev/ttyACM1', [5]'/dev/ttyACM2' ")
    return input('Select a Serial Port:')


def arduino_connect(SELECTION):
    print(f'Connecting to Serial Port {SERIAL_PORT[int(SELECTION)]}')
    try:
        ard = Serial(port=SERIAL_PORT[int(SELECTION)], baudrate=BAUDRATE, timeout=.1)
        print(f"Connected with Arduino in serial port: {SERIAL_PORT[int(SELECTION)]}")
        return ard
    except:
        print(f"[ERROR] Arduino not connected to serial port {SERIAL_PORT[int(SELECTION)]}")
        raise Exception('Error while connecting to serial port specified')


SELECTION = ask_user()
i = True

while i:
    try:
        arduino = arduino_connect(int(SELECTION))
        i = False
    except:
        SELECTION = ask_user()


def write_read(x):
    data1 = bytes(x, 'utf-8')
    # print(data1)
    arduino.write(data1)
    sleep(0.05)
    data = arduino.readline()
    return data


x = []
y = []

for i in range(100):
    initial = time()
    ct = {"s1": 200, "s2": 200, "s3": 200, "s4": 200, "s5": 200}
    cnt_index = ["s1", "s2", "s3", "s4", "s5"]  # The indices of your data in the recieved JSON file
    for index in cnt_index:
        if int(ct[index]) < 10:  # If the number is lower than 10
            ct[index] = f"00{ct[index]}"  # We add two zeros to the data

        elif int(ct[index]) < 100:  # If the number is lower than 100
            ct[index] = f"0{ct[index]}"  # We add one zero to the data
    num = str(
        f'{ct["s1"]}{ct["s2"]}{ct["s3"]}{ct["s4"]}{ct["s5"]}')  # The String That will be sent to the arduino with the information
    try:
        value = write_read(num)
        print(value)
    except:
        print(f"[ERROR] Error while sending data to arduino in port {SERIAL_PORT[int(SELECTION)]}")
    final = time()
    elapsed = final - initial
    print(f'Elapsed time: {elapsed}')
    y.append(elapsed)
    x.append(i)

plt.plot(x, y, 'r')
plt.title("Latency In the Connection Between the arduino and computer")
plt.xlabel("$n$")
plt.ylabel("t [s]")
plt.axis([0, 100, 0, 0.2])
plt.grid(True)
plt.show()