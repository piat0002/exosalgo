#c'est en python python 
x = 0
y = 100
F = [-12, -10, -6, -1, 0, 5, 13]

E = [-10, -5, 2, 5, 10 , 13]


#naive 
def isSumFrom(E , x):
    for i in range(len(E)):
        for j in range(len(E)):
            #print(i + j)
            if(E[i] + E[j] ==  x and i != j):
                return True
    return False


print(isSumFrom(E,x))
print(isSumFrom(F,x))
print(isSumFrom(F,y))

#je bloque
def isSumFrom2(E , x):
    dictionnaire = {}

    for i in range(len(E)):
        dictionnaire[E[i]] = E[i]

    for j in range(len(E)):
        


print(isSumFrom2(E,x))
print(isSumFrom2(F,x))
print(isSumFrom2(F,y))
