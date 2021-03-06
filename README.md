# Golang React Chat App
- Following the tutorial https://tutorialedge.net/projects/chat-system-in-go-and-react/part-2-simple-communication/


## Using WebSockets
- Allows use to use a duplex commuinication system accross non-trusted source that we own. It maintains a TCP socket connection that we can use, this will reduce a lot of network overhead. 
- One note is that in addition to adding state, that's where it can become more complex as your application scales. 
