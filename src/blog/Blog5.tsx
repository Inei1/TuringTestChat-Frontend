import { Box, Container, Link as MuiLink, List, ListItem, Typography } from "@mui/material";
import { Header } from "../Header";
import { Footer } from "../homepage/Footer";
import { Helmet } from "react-helmet-async";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from "react-syntax-highlighter";
import { Link } from "react-router-dom";

export const Blog5 = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Blog 3: ChatGPT in chat | Turing Test Chat</title>
      </Helmet>
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
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat Engineering Blog #3</Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3, fontStyle: "italic" }}>Building the chat application for Turing Test Chat.</Typography>
          <Typography sx={{ fontSize: 18, mt: 5 }}>
            In this engineering blog post, the topics of how to build safeguards into chat and how to add ChatGPT to a chat is covered.
            In Turing Test Chat, users are not supposed to leave a chat in progress.
            To help ensure this doesn't happen by accident, there are several precautions we can take:
            <List>
              <ListItem>
                1. Notify users when they press the back button
              </ListItem>
              <ListItem>
                2. Notify users when they attempt to leave the webpage by closing the tab or using the address bar
              </ListItem>
              <ListItem>
                3. Notify users when they attempt to refresh the webpage
              </ListItem>
            </List>
            To resolve these, we can add custom <MuiLink target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" color="#e9e9e9" fontFamily="monospace" fontSize={18}>event listeners</MuiLink>.
            For #1, we can use the <MuiLink target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event" color="#e9e9e9" fontFamily="monospace" fontSize={18}>popstate</MuiLink> event listener:
            <SyntaxHighlighter language="typescript" style={dark}>
              {`const onPopState = useCallback((e: PopStateEvent) => {
  if (window.confirm("Leaving will cause you to lose 5 detection exp and 5 deception exp. " +
      "Are you sure you want to leave?")) {
    // clean up event listener
    window.removeEventListener("popstate", onPopState);
    props.socket.disconnect();
    // send user back to home
    navigate("/home");
  } else {
    // cancel going back
    window.history.pushState(null, "", null);
  }
}, []);
// In a useEffect():
window.addEventListener("popstate", onPopState);`}
            </SyntaxHighlighter>
            The <MuiLink target="_blank" rel="noreferrer" href="https://react.dev/reference/react/useCallback" color="#e9e9e9" fontFamily="monospace" fontSize={18}>useCallback hook</MuiLink> { }
            is needed for React as a result of its render refreshing.
            If we don't use that hook, attempting to remove the event listener will fail.
            This concept is explained in more detail in this { }
            <MuiLink target="_blank" rel="noreferrer" href="https://dev.to/marcostreng/how-to-really-remove-eventlisteners-in-react-3och" color="#e9e9e9" fontFamily="monospace" fontSize={18}>blog post</MuiLink>. { }
            Pressing the back button will then look like this (browser dependent): <br />
            <Box component="img" alt="Leave back button" src="../b3Popstate.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            To deal with #2 and #3, we can use the same listener for both:
            <SyntaxHighlighter language="typescript" style={dark}>
              {`const onLeave = useCallback((e: BeforeUnloadEvent) => {
  e.preventDefault();
  // You cannot specify a message in modern browsers, so return an empty string.
  e.returnValue = "";
}, []);`}
            </SyntaxHighlighter>
            Which will look like this (also browser dependent):<br />
            <Box component="img" alt="Leave address bar" src="../b3onBeforeUnload.png" sx={{ maxWidth: "100%", color: "#e9e9e9", my: 2 }} /><br />
            <p/>
            To implement ChatGPT in the chat room, there are a few steps required.
            First, you need to create an OpenAI account and generate some API keys for the OpenAI api.
            Then, you can use the OpenAI api by creating it:
            <SyntaxHighlighter language="typescript" style={dark}>
              {`apiKey = process.env.OPENAI_API_KEY;
config = new Configuration({
  apiKey: this.apiKey,
});
openai = new OpenAIApi(this.config);`}
            </SyntaxHighlighter>
            Once you have that API initialized, you can call createChatCompletion to use ChatGPT.
            ChatGPT's API requires you to have all messages in the form
            (role: "Assistant" or "System" or "User", content: "message").
            In this case, assistant is ChatGPT, user is the user, and system is a system message (explained later).
            This is implemented in the following code:
            <SyntaxHighlighter language="typescript" style={dark}>
              {`const convertMessages = (messages: UserMessage[]) => {
  return messages.map((message) => {
    if (message.name === "Bot") {
      return { role: ChatCompletionRequestMessageRoleEnum.Assistant, content: message.message };
    } else if (message.name === "System") {
      return { role: ChatCompletionRequestMessageRoleEnum.System, content: message.message };
    } else {
      return { role: ChatCompletionRequestMessageRoleEnum.User, content: message.message };
    }
  });
}

socket.on("message", async (data) => {
  const convertedMessages = convertMessages(room.messages);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: convertedMessages,
  });
  io.emit("messageResponse", data);
});`}
            </SyntaxHighlighter>
            The system message is used to give ChatGPT specific instructions on how it should word its responses.
            It is one or more words/sentences of instructions which can be generated like this:
            <SyntaxHighlighter language="typescript" style={dark}>
              {`export const generateSystemMessage = () => {
  return "Generate responses to convince the user that you are a human.";
}
messages: [{
  name: "System",
  message: generateSystemMessage()
}],`}
            </SyntaxHighlighter>
            This is all you need to generate responses from ChatGPT.
            To get better results, you can use a different model like GPT-4 and/or fine tune the system message.
            To use GPT-4 you need to apply for access from OpenAI, who are slowly rolling it out.
            <p/>
            This concludes the engineering blog #3 for TuringTestChat.
            If the idea of a game of deception and detection involving ChatGPT sounds interesting, you should sign up for the { }
            <Link to="/waitlist" color="info"
              style={{
                color: "#e9e9e9",
                fontFamily: "monospace",
              }}>waitlist</Link>.
            If you want to learn more about TuringTestChat, you can check out the { }
            <Link to="/blog/6" color="info"
              style={{
                color: "#e9e9e9",
                fontFamily: "monospace",
              }}>developer update</Link> for this blog.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}