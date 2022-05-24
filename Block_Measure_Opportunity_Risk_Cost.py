import os
import numpy as np

#Database imitation
print('Distance, m:')
s = float(input())
print('Payload, kg:')
m = float(input())
print('Product cost, rubles:')
book = float(input())

#Database imitation
f = open('BVS_1.txt')
while True:
    line = f.readline()
    if not line:
        break
    l = line.split(' ')
    if s <= float(l[4]):
        break
f.close()
#print(l)
flag = 1

#Opportunity Quad Force
if int(l[0]) == 1:
    #verical flight
    Tvp = 1.1*(float(l[2])-m)
    #horizontal flight
    Th = np.sqrt((0.1*0.15*1.225*float(l[6])*float(l[6])*0.5*(0.67*0.43*np.cos(25*3.14/180)))*(0.1*0.15*1.225*float(l[6])*float(l[6])*0.5*(0.67*0.43*np.cos(25*3.14/180)))+(1.1*(float(l[2])-m))*(1.1*(float(l[2])-m)))
    if (Tvp > 2.48*4) or (Th > 2.48*4):
        flag *= 0
    #print(Tvp, Th)

#Opportunity Quad LiPo
    Cpotr = ((20/float(l[5]))*17.2 + (s*1000/float(l[6]))*14.0 + (20/float(l[5]))*17.2)/3600
    if Cpotr > 2*float(l[10])/1000:
        flag *= 0
    if flag == 1:
        print('The UAV is able to do it!')
    else:
        print('The UAV delivery is not available :(')
    #print(Cpotr, 2*float(l[10])/1000)

#Opportunity Gibrid Force
else:
    #vertical flight
    Tvp = 1.3*(float(l[2])-m)
    #horizontal flight
    Th = np.sqrt((0.1*0.02*1.225*float(l[6])*float(l[6])*0.5*(0.124*0.062*np.cos(5*3.14/180)))*(0.1*0.02*1.225*float(l[6])*float(l[6])*0.5*(0.124*0.062*np.cos(5*3.14/180)))+(1.3*(float(l[2])-m))*(1.3*(float(l[2])-m)))
    Ttreb = np.sqrt((0.1*0.46*1.225*float(l[6])*float(l[6])*0.5*(0.124*0.062*np.cos(5*3.14/180)))*(0.1*0.02*1.225*float(l[6])*float(l[6])*0.5*(0.124*0.062*np.cos(5*3.14/180)))+(4.62*4)*(4.62*4))
    if (Tvp > 4.62*4) or (Th > Ttreb):
        flag *= 0
    #print(Tvp, Th, Ttreb)

#Opportunity Gibrid LiPo
    Cpotr = ((20/float(l[5]))*17.2 + (s*1000/float(l[6]))*14.0 + (20/float(l[5]))*17.2)/3600
    if Cpotr > 2*float(l[10])/1000:
        flag *= 0
    if flag == 1:
        print('The UAV is able to do it!')
    #print(Cpotr, 2*float(l[10])/1000)

#Risk fail
#Lagrange Method Function
def lagrange(x, y, a):
    ans = 0
    for i in range(len(y)):
        t = y[i]
        for j in range(len(y)):
            if i != j:
                t *= (a - x[j])/(x[i]-x[j])
        ans += t
    return ans

#Meteo provider - imitation
if __name__ == '__main__':
    print('Wind speed, mps:')
    x = float(input())
    veter = [0, 5, 10, 17]
    risk_v = [0, 0.05, 0.15, 0.95]
    Pkr1 = lagrange(veter, risk_v, x)
    #print(x, Pkr1)

#Geo provider - imitation
    print('Average hight, m:')
    x = float(input())
    relief = [0, 10, 50, 80, 100]
    risk_r = [0, 0.02, 0.035, 0.045, 0.05]
    Pkr2 = lagrange(relief, risk_r, x)
    #print(x, Pkr2)

#Summ risk
Prisk = 1-(1 - Pkr1)*(1 - Pkr2)
print('The risk to fail this mission in case of weather and geo conditions:', round(Prisk, 5)*100, '%')

#Cost
# 1 - Energy, 2 - UAV cost per resource, 3 - LiPo cost per resource, 4 - Insurance
Cost = 1.2*(2*float(l[12])*6.17*0.001 + float(l[1])/float(l[3]) + float(l[17])/float(l[18]) + (0.57*Prisk + 0.13)*(float(l[1]) + book)/3000)

print('Drone delivery cost:', round(Cost, 2), 'rubles')
