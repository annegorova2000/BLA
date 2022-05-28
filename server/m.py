import sys
import math

import json

def main(a,b,c,d):
    #print('main')
    a = a.split(',')
    b = b.split(',')
    c = float(c)
    flag = 1
    flag1 = 1  
    if c < 16.5:
        flag *= 1
    else:
        flag1 *=0

    a0 = a[0] 
    a1 = float(a[1])
    
    a2 = float(a[2])
    a3 = float(a[3])
    a4 = float(a[4])
    a5 = float(a[5])
    a6 = float(a[6])
    a7 = float(a[7])
    a8 = float(a[8])
    a9 = float(a[9])
    b0 = float(b[0])
    b1 = float(b[1])
    if a0 == '1':
        #pa0 = 'a1'
        
        Tvp = 1.1*(a1-b0)
        
        Th = ((0.1 * 0.15 * 1.225 *a2*a2)*0.5 *(0.67 * 0.43 * math.cos(25 * 3.14 / 180)))*(0.1 * 0.15 * 1.225 *a2*a2* 0.5 * (0.67 * 0.43 * math.cos(25 * 3.14 / 180)))+(1.1*(a1-b0)*(1.1*(a1-b0)))**1/2
        if (Tvp > 2.48 * 4) or (Th > 2.48 * 4):
            flag *= 0
        Cpotr = ((20/a3)*17.2+(c*1000/a2)*14+(20/a3)*17.2)/3600
        if Cpotr > 2*a4/1000:
            flag *= 0
        if flag == 1:
            print('code_adm:1')
        else:
            print('code_adm:2')       
    else:
        #pa0 = 'a2'
        Tvp = 1.3*(a1-b0)
        # horizontal flight
        Th = ((0.1 * 0.02 * 1.225 * a2 * a2 * 0.5 * (0.124 * 0.062 * math.cos(5 * 3.14 / 180))) * (0.1 * 0.02 * 1.225 * a2 * a2 * 0.5 * (0.124 * 0.062 * math.cos(5 * 3.14 / 180))) + (1.3 * (a1 - b0)) * (1.3 * (a1 - b0)))**(1/2)
        Ttreb = ((0.1 * 0.46 * 1.225 * a2 * a2 * 0.5 * (0.124 * 0.062 * math.cos(5 * 3.14 / 180))) * (0.1 * 0.02 * 1.225 * a2 * a2 * 0.5 * (0.124 * 0.062 * math.cos(5 * 3.14 / 180))) + (4.62 * 4) * (4.62 * 4))**(1/2)
        if (Tvp > 4.62 * 4) or (Th > Ttreb):
            flag *= 0
        Cpotr = ((20 / a3) * 17.2 + (c * 1000 / a2) * 14.0 + (20 / a3) * 17.2) / 3600
        if Cpotr > 2 * a4 / 1000:
            flag *= 0
        if flag == 1:
            print('code_adm:1')
        
    def lagrange(x, y, al):
        ans = 0
        for i in range(len(y)):
            t = y[i]
            for j in range(len(y)):
                if i != j:
                    t *= (al - x[j]) / (x[i] - x[j])
            ans += t
        return ans

    x = float(d)
    veter = [0, 5, 10, 17]
    risk_v = [0, 0.05, 0.15, 0.95]
    Pkr1 = lagrange(veter, risk_v, x)

    x = 10
    relief = [0, 10, 50, 80, 100]
    risk_r = [0, 0.02, 0.035, 0.045, 0.05]
    Pkr2 = lagrange(relief, risk_r, x)
    Prisk = (1 - Pkr1) * (1 - Pkr2)
    print('risk:',round(Prisk,5)*100)

    # Cost
    # 1 - Energy, 2 - UAV cost per resource, 3 - LiPo cost per resource, 4 - Insurance
    Cost = 1.2 * (2 * a5 * 6.17 * 0.001 + a6 / a7 + a8 / a9 + (0.57 * Prisk + 0.13) * (a6 + b1) / 3000)
    print('cost:',round(Cost,2))

    f = open('text.txt','w')
    f.write('py12' + '\n')
    #f.write(a0 + '\n')
    #f.write(pa0 + '\n')
    #f.write(a + '\n')
    #f.write(b + '\n')
    #f.write(c + '\n')
    #f.write(a + '\n')
    f.close()

if __name__ == "__main__":
    a = sys.argv[1]
    b = sys.argv[2]
    c = sys.argv[3]
    d = sys.argv[4]
    main(a,b,c,d)
