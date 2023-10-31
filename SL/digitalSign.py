import random
import math



# Key generation
def generate_keys(n,e,phi):
  if math.gcd(phi,e)==1:
    d=pow(e,-1,phi)
    public_key=(e,n)
    private_key=(d,n)
    return public_key,private_key
  else:
    return None

def generate_sign(private_key,message):
  d,n=private_key
  encrypt_sign=pow(message,d,n)
  return encrypt_sign

# RSA Algo
def rsaCipher(message,public_key,private_key,sign):
   e,n=public_key
   checkSign=pow(sign,e,n)
   if checkSign==message:
    print('U Are authenticate checked sign is : ',checkSign)
    encrypted_message=pow(message,e,n)
    return encrypted_message
 




# user input

p=int(input('Enter a prime number p: '))
q=int(input('Enter a prime number q: '))
e=int(input('Enter a key number e: '))
n=p*q
phi=(p-1)*(q-1)

keys=generate_keys(n,e,phi)
if keys:
  publicKey,privateKey=keys
  print('Public: ',publicKey)
  print('private: ',privateKey)
else:
  print('Key not generated error')


message=int(input('Enter a message: '))

signDigital=generate_sign(privateKey,message)
print('Sign at sender: ',signDigital)

cipherText=rsaCipher(message,publicKey,privateKey,signDigital)
print('Cipher text: ',cipherText)




