import socket
from app import users


LOCALHOST = "127.0.0.1"
PORT = 8080
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((LOCALHOST, PORT))
server.listen(1)
print("Server started")
print("Waiting for client request..")
clientConnection,clientAddress = server.accept()
print("Connected clinet :" , clientAddress)
msg = ''
while True:
  in_data = clientConnection.recv(1024)
  msg = in_data.decode()
  users("From Client", msg)
  if msg=='bye':
    break
  print("From Client :" , msg)
  out_data = input()
  clientConnection.send(bytes(out_data,'UTF-8'))
print("Client disconnected....")
clientConnection.close()
