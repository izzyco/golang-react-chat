// api/index.ts
var socket = new WebSocket("ws://localhost:8080/ws")

let connect = () => {
  console.log("Attemting Connection...");

  socket.onopen = () => {
    console.log("Successful Connected");
  }

  socket.onmessage = msg => {
    console.log(msg);
  }

  socket.onclose = event => {
    console.log("Socket Closed Connections: ", event);
  }

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  }
}

let sendMsg = (msg : string) => {
  console.log("Sending message: " + msg);
  socket.send(msg);
}

export { connect, sendMsg }