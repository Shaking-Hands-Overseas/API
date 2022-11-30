from requests import get
import time
import matplotlib.pyplot as plt



x = []
y = []


def main():
    for i in range(101):
        initial = time.time()
        data = get('')
        final = time.time()
        elapsed = final - initial
        print(f'Elapsed time: {elapsed} \n Received Data: {data.content}')
        y.append(elapsed)
        x.append(i)

    plt.plot(x, y, 'r')
    plt.title("Latency In Receiving data from our server")
    plt.xlabel("$n$")
    plt.ylabel("t [s]")
    plt.axis([0, 50, 0, 0.5])
    plt.grid(True)
    plt.show()


if __name__ == '__main__':
    main()
