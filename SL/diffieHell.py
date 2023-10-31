# take user input

q=int(input('Enter q: '))
alpha=int(input('Enter alpha: '))
xa=int(input('Enter xa: '))
xb=int(input('Enter xb: '))


# compute the YA and YB
ya=pow(alpha,xa,q)
yb=pow(alpha,xb,q)

print('public of Ya: ',ya, ' public of Yb: ',yb)

share_secretA=pow(yb,xa,q)
share_secretB=pow(ya,xb,q)

if share_secretA==share_secretB:
  print('Matched')
else:
  print('Try again')
