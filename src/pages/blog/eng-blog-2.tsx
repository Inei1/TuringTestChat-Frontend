import { Box, Container, Link, Typography } from "@mui/material";
import { Header } from "../../Header";
import { Footer } from "../../homepage/Footer";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Head from "next/head";

const EngBlog2 = () => {
  return (
    <>
      <Head>
        <title>Engineering Blog 2: Websocket Chat Application | Turing Test Chat</title>
      </Head>
      <Box sx={{
        backgroundColor: "secondary.main",
        background: "radial-gradient(circle, rgba(19,42,122,1) 0%, rgba(29,29,29,1) 100%)",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        backgroundPositionY: 60,
        maxWidth: "100vw",
        minHeight: "100vh",
      }}>
        <Header />
        <Container component="section">
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat Engineering Blog #2</Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3, fontStyle: "italic" }}>Using WebSockets to create a chat application.</Typography>
          <Typography sx={{ fontStyle: "italic", fontWeight: "bold", fontSize: 20 }}>This blog entry focuses on writing the code for Turing Test Chat.
            If you aren{"\'"}t familiar with coding, it may be difficult to understand.
            Also, this blog covers the topics mentioned in the developer update, so it{"\'"}s recommended to read that first.</Typography>
          <Typography sx={{ mt: 5 }}>
            To create the chat application, WebSockets with { }
            <Link target="_blank" rel="noreferrer" href="https://socket.io/" color="#e9e9e9">socket.io</Link> were used.
            To sum it up, WebSockets allow for low-latency communication between client and server, which is perfect for chat applications.
            At its simplest, socket.io can be used with chat like this:</Typography>
          <SyntaxHighlighter language="typescript" style={dark}>
            {`// server
io.on("connection", (socket) => {
  socket.on("message", async (data) => {
    // TODO: do validation on message (check if sent within the alloted time, etc.)
    io.emit("messageResponse", data);
  });
}
// client
// send message with chat button
const sendMessage = () => {
  if (message.trim() && localStorage.getItem("user")) {
    props.socket.emit("message", {
      name: localStorage.getItem("user"),
      text: message,
    });
  }
  setMessage("");
};

// receive message from backend
useEffect(() => {
  props.socket.on("messageResponse", (data: any) => {
    setMessages([...messages, data]);
  });
}, [props.socket, messages]);`}
          </SyntaxHighlighter>
          <Typography>The workflow here is that the client first calls sendMessage, which then calls the backend code.
            After this, the client receives the message response and displays it on screen.
            Even though it{"\'"}s just an example, this is actually similar to the real code in use.</Typography>
          <Typography>But to start from the beginning, here is what{"\'"}s done upon first clicking {"\""}join chat{"\""}:</Typography>
          <SyntaxHighlighter language="typescript" style={dark}>
            {`
io.on("connection", (socket) => {
  socket.on("startRoom", async (username) => {
    // If we can join an existing room
    if (this.emptyRooms.length > 0) {
      const roomId = this.emptyRooms.pop()!
      socket.join(roomId);
      // socket.emit() sends a message back to the sender; io.emit() sends it to all connected users.
      socket.emit("roomFound", { roomId: roomId });
      // Send a message to everyone in the room.
      io.to(roomId).emit("foundChat");
      // If one or both users haven{"\'"}t accepted after 30 seconds, cancel the chat
      setTimeout(async () => {
        if (!user1.ready) {
          io.to(roomId).emit("readyExpired");
          io.socketsLeave(roomId);
        }
        if (!user2.ready) {
          io.to(roomId).emit("readyExpired");
          io.socketsLeave(roomId);
        }
      }, 30000);
    // If there are no existing rooms, create a new one.
    } else {
      const roomId = randomUUID();
      this.emptyRooms.push(roomId);
      socket.join(roomId);
      socket.emit("roomFound", { roomId: roomId });
      logger.info("Room created: " + roomId);
    }
  });
//...
}`}
          </SyntaxHighlighter>
          <Typography>Of note, this uses socket.io{"\'"}s rooms functionality.
            Clients can connect to these rooms, which then offers functionality to send messages to users in the room.</Typography>
          <Typography>Once an user accepts the chat, the following happens:</Typography>
          <SyntaxHighlighter language="typescript" style={dark}>
            {`
socket.on("readyChat", async (data) => {
    // Set user to ready (not shown here)

    // if both users are now ready
    if ((data.name === user1.name && user2.ready) || (data.name === user2.name && user1.ready)) {
      io.to(data.roomId).emit("startChat");
      setTimeout(() => {
        // At the end of the chat: if one or both users didn't select in time, give them the worst result
        // and the other user the best result.
        if (user1.result === "") {
          io.to(user2.socketId).emit("noResult");
          io.to(user1.socketId).emit("selfResult", {
            points: -3,
            other: user2.bot ? "Bot" : "Human",
            result: "",
          });
        } else {
          io.to(user2.socketId).emit("completeChat");
        }
        if (user2.result === "") {
          io.to(user1.socketId).emit("noResult");
          io.to(user2.socketId).emit("selfResult", {
            points: -3,
            other: user1.bot ? "Bot" : "Human",
            result: "",
          });
        } else {
          io.to(user1.socketId).emit("completeChat");
        }
      }, 150000 + 30000);
      setTimeout(() => io.socketsLeave(data.roomId), 150000 + 31000);
    }`}
          </SyntaxHighlighter>
          <Typography>This code just checks when a user is ready, and implements some timeouts for the end of the chat.
            The timeouts are implemented here to ensure that users are forced to have a result when the time is over.</Typography>
            <Typography>The last bit of backend code is for determining the result when a user clicks on one of the options (such as {"\""}definitely a bot{"\""}):</Typography>
          <SyntaxHighlighter language="typescript" style={dark}>
            {`
socket.on("result", async (data) => {
    // not seen here: authenticate user and socket
    let otherPoints = calculateOtherPoints(data);
    let selfPoints = calculateSelfPoints(data);
    let other = calculateOther(data); // Human or Bot
    socket.broadcast.emit("otherResult", {
      result: data.result,
      points: otherPoints
    });
    socket.emit("selfResult", {
      result: data.result,
      points: selfPoints,
      other: other
    });
  }
});`}
          </SyntaxHighlighter>
          <Typography>When a user makes their selection, it immediately notifies both them and the other user of their selection.
            This is because a selection affects both players at the same time.</Typography>
          <Typography>The frontend code is relatively simple, so an explanation should be enough.
            socket.emit({"\""}startRoom{"\""}) is called when the {"\""}enter chat room{"\""} button is pressed, and it passes the username as data.
            socket.emit({"\""}readyChat{"\""}) is called when clicking on {"\""}go to chat{"\""} after a chat was found.
            socket.emit({"\""}result{"\""}) is called when clicking on an option after a chat is over. </Typography>
          <Typography>If any of this sounds interesting, you should sign up for the Turing Test Chat waitlist.
            If you haven{"\'"}t read the developer update yet, you can find it { }
            <Link href="/blog/dev-update-2"
              style={{
                color: "#e9e9e9",
                fontFamily: "monospace",
              }}>here</Link>.
          </Typography>
        </Container>
      </Box >
      <Footer />
    </>
  );
}

export default EngBlog2;