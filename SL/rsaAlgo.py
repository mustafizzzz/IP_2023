import random
import math

# Key generation
def generateKeys(n,e,phi):
  if math.gcd(phi,e)==1:
    d=pow(e,-1,phi)
    public_key = (n, e)
    private_key = (n, d)
    return public_key,private_key
  else:
    print('inavalid inputs ')
    return None
 

def rsaCipher(message,public_key):
  n,e=public_key
  encrypted_message=pow(message,e,n)
  return encrypted_message

  
 
  

def rsaCipherDecrypt(message,pravte_key):
  n,d=pravte_key
  decrypt_message=pow(message,d,n)
  return decrypt_message

# User input 

p=int(input('Enter a prime number p: '))
q=int(input('Enter a prime number q: '))
e=int(input('Enter a key number e: '))

n=p*q
phi=(p-1)*(q-1)

keys=generateKeys(n,e,phi)
if keys:
  public_key,private_key=keys
  print('Public: ',public_key)
  print('private: ',private_key)
else:
  print('Invalid keys')

message=int(input('Enter a message: '))

cipherText = rsaCipher(message,public_key)
print("Ciphet text: ",cipherText)
plainText = rsaCipherDecrypt(cipherText,private_key)
print("decrypted text: ",plainText)