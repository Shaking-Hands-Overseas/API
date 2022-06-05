import matplotlib.pyplot as plt
import statistics as st
y = [1.13, 1.19, 1.07, 1, 0.94, 1.13, 1, 1.19, 0.93, 0.87, 0.81, 0.87, 0.81, 1.13, 1.13, 0.87, 1.13, 1, 1, 0.87, 1.14]
x = range(0, 21, 1)
print('Average:')
print(sum(y)/len(y))
plt.plot(x, y, 'r')
plt.title("Latency between sending the information and Perceiving a movement in our hand")
plt.xlabel("$n$")
plt.ylabel("t [s]")
plt.axis([0, 20, 0, 1.5])
plt.xticks(range(0, 21, 1))
plt.grid(True)
plt.show()

