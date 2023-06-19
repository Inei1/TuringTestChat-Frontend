import { Box, Container, Link, Typography } from "@mui/material";

export const Explanations = () => {

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden" }}
    >
      <Container sx={{ mt: 5, mb: 5, }}>
        <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>Can I take the Turing Test online?</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>To take an online Turing Test with ChatGPT, simply go to the website when it releases and interact with the AI.
          The results will be based on whether or not the AI can convince you it is human.
          <b>If it successfully convinces you, it has passed the Turing Test.</b></Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>Originally called the imitation game, the Turing Test is named prominent British mathematician and computer scientist <b>Alan Turing</b>.
          Turing is widely regarded as one of the pioneers of modern computer science and artificial intelligence research.
          Today, the Turing Test is a well-known benchmark in the development of AI.
          While some people claim the Turing Test has already been passed, most people agree that it has not.</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>There are some flaws with the Turing Test.
          One well known thought experiment is the Chinese room argument.
          The argument is that machine intelligence cannot have a consciousness, and it doesn{"\'"}t truly understand what it{"\'"}s saying.
          If the machine receives Chinese characters as input, and outputs other Chinese characters, does it understand Chinese or is it simulating it?
          Another flaw with the Turing Test includes the fact that it only tests whether a machine can behave like a human.
          As we all know, <b>not all human behavior is intelligent</b>, so the Turing Test could be a machine{"\'"}s success in <b>acting unintelligent</b>.
          However, the concept of artificial general intelligence is gaining traction and could potentially address these flaws in the future.</Typography>
        <Typography variant="h2" sx={{ my: 2, fontSize: 25 }}>What is ChatGPT?</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>ChatGPT is a cutting-edge AI chatbot designed by OpenAI that utilizes NLP (Natural Language Processing) technology and is powered by an LLM (Large Language Model).
          The chatbot can converse with humans in a natural, human-like manner and understand the nuances of language.
          Its ability to learn from vast amounts of data enables it to provide accurate responses to user queries.
          ChatGPT represents a significant milestone in AI technology and has the potential to revolutionize the way we interact with machines and machine learning.</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>While GPT-4 (also used by Bing AI and others) is largely considered to be the best chatbot at the moment, there are other alternatives.
          These alternatives include Google Bard (and LaMDA), Jasper, Claude, and many others.
          AI assistants have been around for much longer, although they are much more limited in functionality.
          Siri, Google Assistant, and Alexa serve a similar purpose to ChatGPT, although they don{"\'"}t try to be as thorough in their responses.</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>One question you might have is, will ChatGPT attempt to take over the word?
          The answer is no, there isn{"\'"}t any risk of <i>The Terminator</i>{"\'"}s Skynet showing up.
          ChatGPT is limited to human-like conversation, and it clearly lacks sentience.
          ChatGPT is a very convenient artificial intelligence chatbot that is capable of general conversation, but that{"\'"}s all it is.</Typography>
        <Typography sx={{ fontSize: 18, my: 2 }}>In order to have ChatGPT mimic human-like responses, a <b>system prompt</b> can be used.
          Turing Test Chat{"\'"}s system prompt is highly randomized and strongly optimized to sound as close to a real person as possible.
          No other chatbot in the AI industry is as capable of deception.</Typography>
      </Container>
    </Box>
  );
}