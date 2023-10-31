# Vigenere Ciphers



# repeating the keys
def generateKeyRepeat(message,key):
  message=message.replace(" ","").upper()
  key=key.replace(" ","").upper()
  key_repeated=key
  while len(key_repeated) < len(message):
    key_repeated +=key
  return key_repeated[:len(message)]


def vigenerCipher(message,key):
  message=message.replace(" ","").upper()
  key=key.replace(" ","").upper()
  encryptText=''

  for i in range(len(message)):
    alphaIndex=ord(message[i]) - 65
    shiftValue=ord(key[i])-65
    shiftIndex=(alphaIndex+shiftValue)%26
    toAddText= chr(shiftIndex+65)
    encryptText +=toAddText
  return encryptText

def vigenerDecrypt(message,key):
  message=message.replace(" ","").upper()
  key=key.replace(" ","").upper()
  encryptText=''

  for i in range(len(message)):
    alphaIndex=ord(message[i]) - 65
    shiftValue=ord(key[i])-65
    shiftIndex=(alphaIndex-shiftValue)%26
    if shiftIndex < 0:
      shiftIndex +=26
    toAddText= chr(shiftIndex+65)
    encryptText +=toAddText
  return encryptText


# get input

plainText=input('Enter a plain text: ')
key=input('Enter a key: ')

repeatKey=generateKeyRepeat(plainText,key)
cipherText=vigenerCipher(plainText,repeatKey)
normalText=vigenerDecrypt(cipherText,repeatKey)

print('Encrpted text: ',cipherText)
print('Decrpted text: ',normalText)




