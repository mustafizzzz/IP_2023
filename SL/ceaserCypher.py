
# def ceaserCipher(message,shift):
#   encrypted_text=''
#   for char in message:
#     if char.isupper():
#       alphaindex=ord(char)-65
#       shiftindex=(alphaindex+shift)%26
#       shiftcharupper=chr(shiftindex+65)
#       encrypted_text +=shiftcharupper

#     if char.islower():
#       alphaindex=ord(char)-97 //0-25
#       shiftindex=(alphaindex+shift)%26  //new 0-25
#       shiftcharlower=chr(shiftindex+97) //char coversion
#       encrypted_text +=shiftcharlower //added to text
#     else:
#       encrypted_text +=char
#   return encrypted_text


# def decrypt(message,shift):
#   decrypt=''
#   for char in message:
#     if char.isupper():
#       alphaindex=ord(char)-65
#       shiftindex=(alphaindex-shift)%26
#       shiftcharupper=chr(shiftindex+65)
#       decrypt +=shiftcharupper

#     if char.islower():
#       alphaindex=ord(char)-97
#       shiftindex=(alphaindex-shift)%26
#       shiftcharlower=chr(shiftindex+97)
#       decrypt +=shiftcharlower
#     else:
#       decrypt +=char
#   return decrypt
      
   
# message=input('Enter a message: ')
# shift=int(input('Enter a shit < 10 :'))

# asnwerText = ceaserCipher(message,shift)
# asnwerDecrpt = decrypt(asnwerText,shift)
# print('Encrpt message:',asnwerText)
# print('Decrpt message:',asnwerDecrpt)


def caesar_cipher_encrypt(text, shift):
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            shifted_char = chr((ord(char) - 65 + shift) % 26 + 65) if char.isupper() else chr((ord(char) - 97 + shift) % 26 + 97)
            encrypted_text += shifted_char
        else:
            encrypted_text += char
    return encrypted_text

def caesar_cipher_decrypt(ciphertext, shift):
    decrypted_text = ""
    for char in ciphertext:
        if char.isalpha():
            shifted_char = chr((ord(char) - shift - 65) % 26 + 65) if char.isupper() else chr((ord(char) - shift - 97) % 26 + 97)
            decrypted_text += shifted_char
        else:
            decrypted_text += char
    return decrypted_text

# Get user input for encryption
message = input("Enter the message to encrypt: ")
shift = int(input("Enter the shift value: "))

# Encrypt the message using Caesar cipher
encrypted_message = caesar_cipher_encrypt(message, shift)
print("Encrypted message:", encrypted_message)

# Decrypt the message using Caesar cipher
decrypted_message = caesar_cipher_decrypt(encrypted_message, shift)
print("Decrypted message:", decrypted_message)



