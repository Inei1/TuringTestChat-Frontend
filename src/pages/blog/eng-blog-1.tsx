import { Box, Container, Typography } from "@mui/material";
import Header from "../../Header";
import { Footer } from "../../homepage/Footer";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Head from "next/head";
import { useEffect } from "react";

const EngBlog1 = () => {

  useEffect(() => {
    if (globalThis.ezstandalone) {
      if (!ezstandalone.enabled) {
        ezstandalone.enable();
        ezstandalone.display();
      } else {
        ezstandalone.refresh();
      }
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Engineering Blog 1: UI and Authentication | Turing Test Chat</title>
        <meta name="description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:title" content="Engineering Blog 1: UI and Authentication | Turing Test Chat" />
        <meta property="og:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
        <meta property="og:url" content="https://www.turingtestchat.com" />

        <meta name="twitter:title" content="Engineering Blog 1: UI and Authentication | Turing Test Chat" />
        <meta name="twitter:description" content="Perform the Turing Test in a chat with ChatGPT. In this game of deception and detection, distinguishing between ChatGPT and humans is not easy." />
        <meta name="twitter:image" content="https://www.turingtestchat.com/TTCLogov2.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://www.turingtestchat.com/" />
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
        <Container component="section" maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: 40, mt: 5 }}>Turing Test Chat Engineering Blog #1</Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 3, fontStyle: "italic", fontSize: 22 }}>Diving into the code behind the early UI and authentication.</Typography>
          <Typography sx={{ fontStyle: "italic", fontWeight: "bold", fontSize: 20 }}>This blog entry focuses on writing the code for Turing Test Chat.
            If you aren't familiar with coding, it may be difficult to understand.
            Also, this blog covers the topics mentioned in the developer update, so it's recommended to read that first.</Typography>
          <Typography sx={{ fontSize: 18, mt: 5 }}>As the first entry, there is a lot to cover, so I'll briefly go over what's already in place.
            Turing Test Chat is built by one person using a MERN (MongoDB, Express, React, Node) stack and runs on AWS.
            Some AWS services used are EC2 (backend hosting), S3 (frontend static site hosting), SES (emails), and CodeDeploy (CI/CD).
            The emails use a validator service to avoid SES sending hard bounced emails.
            On the frontend, MUI is used with React and TypeScript.
            (Update July 2 2023: I'm using two GCP compute instances for frontend and backend, and I changed from React to NextJS.)
            The backend uses Express, Node, and OvernightJS with TypeScript to communicate with a MongoDB database.
            With that overview done, the next topic is the recently added UI for chat and the backend authentication.
            <br />
            Starting with the login, on the backend, passport.js is used for authentication.
            Passport is an authentication framework that makes it easier and safer to code an authentication system.
            You can use it to authenticate with many different "strategies," or ways to log in.
            For now, the password login strategy is the only one in use, AKA LocalStrategy.
            The code looks like this:</Typography>
          <SyntaxHighlighter language="typescript" style={dark}>
            {`passport.serializeUser((user, done) => {
  done(undefined, user);
});

passport.deserializeUser((id: ObjectId, done) => {
  try {
    globalThis.collections.users?.findOne({ _id: id }).then((user) => {
      done(undefined, user);
    });
  } catch (err) {
    done(err, undefined);
  }
});

passport.use(new LocalStrategy({ usernameField: "username", passwordField: "password" }, (username, password, done) => {
  try {
    globalThis.collections.users?.findOne({ username: username.toLowerCase() }).then((user) => {
      if (!user) {
        return done(undefined, false, { message: \`User \${username} not found\` });
      }
      bcrypt.compare(password, user.password).then((valid) => {
        if (valid) {
           return done(undefined, user);
        } else {
          return done(undefined, false, { message: "Invalid username or password" });
        }
      })
    });
  } catch (err) {
    return done(err);
  }
}));

this.app.use(passport.initialize());
this.app.use(passport.session());`}</SyntaxHighlighter>
          <Typography sx={{ fontSize: 18 }}>
            You must put first three methods listed before the app.use() statements, or it won't work.
            With these in place, it's very easy to authenticate:
          </Typography>
          <SyntaxHighlighter language="typescript" style={dark}>
            {`@Post("password")
@Middleware(passport.authenticate("local"))
private async loginPassword(req: Request, res: Response) {
  if (req.user) {
    return res.status(200).json({
    username: req.user,
    });
  }
}`}
          </SyntaxHighlighter>
          <Typography sx={{ fontSize: 18 }}>It's simple to call the above code:</Typography>
          <SyntaxHighlighter language="typescript" style={dark}>
            {`const result = await fetch("https://www.turingtestchat.com/login/password", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username: name, password: password }),
});`}
          </SyntaxHighlighter>
          <Typography sx={{ fontSize: 18 }}>
            The login page is some standard React with MUI code.
            It uses MUI Tabs and FormControl with TextField inputs.
            These TextFields update email, username, and password inputs, which are then passed to the backend.
            The frontend does some simple validation for the inputs, while the backend does more advanced checks to avoid processing and receiving bad data.
            It's always important to NEVER put critical validation in the frontend, since it's always possible to access the backend without the frontend.</Typography>
          <Typography>Enter chat room is currently just some simple text and a simple button. The header's changes are a bit more involved.
            The username is stored in LocalStorage upon logging in and cleared upon logging out, and if it's present the header changes from a login button to a user home button:
          </Typography>
          <SyntaxHighlighter language="javascript" style={dark}>{`{localStorage.getItem("user") === null && <Box sx={{ display: { xs: "none", md: "flex" } }}>
  <Link to="/login">
    <Button
      color="info"
      variant="contained">Log in/Sign up</Button>
  </Link>
</Box>}
{localStorage.getItem("user") && <User />}`}</SyntaxHighlighter>
          <Typography sx={{ fontSize: 18 }}>The user component is a custom component which contains the (unimplemented as of now) credit, points, and user settings.
            Lastly, this blog was coded up and the components for it were created.
            It's a simple custom made system coded up in an hour, but it's functional.</Typography>
          <Typography>Does the coding of the blog sound interesting?
            Have you ever wanted to play a social deduction game centered around the difference between humans and AI?
            You should sign up for Turing Test Chat.
            Progress and engineering updates similar to this one will happen somewhat frequently.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default EngBlog1;