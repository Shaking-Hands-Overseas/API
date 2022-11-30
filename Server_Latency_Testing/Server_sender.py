from requests import get, post
import time
import matplotlib.pyplot as plt
from json import loads
import numpy

PREFERED_ORDER ={
    "F1": "s1",
    "F2": "s2",
    "F3": "s3",
    "F4": "s4",
    "F5": "s5"
}
def jsonify_content(ct):
    return loads(ct.content.decode())


x = []
y = []


def main():
    for i in range(101):
        initial = time.time()
        value = int(numpy.random.rand()*10)
        data = { "s1": value, "s2": value, "s3": value, "s4": value,"s5": value }
        post(url='', json=data)
        post(url='', json=PREFERED_ORDER)
        final = time.time()
        elapsed = final - initial
        print(f'Elapsed time: {elapsed} \n Received Data: {data}')
        y.append(elapsed)
        x.append(i)

    plt.plot(x, y, 'r')
    plt.title("Latency In Sending Data To Our Server")
    plt.xlabel("$n$")
    plt.ylabel("t [s]")
    plt.axis([0, 50, 0, 0.5])
    plt.grid(True)
    plt.show()


if __name__ == '__main__':
    main()
