import { Box, Container, Typography } from "@mui/material"
import { Header } from "../Header"
import { Footer } from "./Footer"

export const Tos = () => {
  return (
    <Box sx={{ maxWidth: "100vw", minHeight: "100vh", }}>
      <Header />
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        bgcolor: 'inherit',
        mt: 1,
      }}>
        <Typography variant="h4" sx={{ my: 2 }}>Terms of Service</Typography>
        <Typography sx={{ my: 1 }}>Welcome to TuringTestChat! These terms of service ("Terms") govern your use of
          turingtestchat.com. By accessing or using turingtestchat.com, you agree to be bound by these Terms.</Typography>

        <Typography variant="h6" sx={{ my: 1 }}>Use of turingtestchat.com</Typography>
        <Typography sx={{ my: 1 }}>turingtestchat.com is provided for your personal, non-commercial use.
          You agree not to use turingtestchat.com for any illegal or unauthorized purpose.
          You must not use turingtestchat.com in a way that could damage, disable, overburden, or impair ou
          servers or networks.</Typography>

        <Typography variant="h6" sx={{ my: 1 }}>Intellectual property</Typography>
        <Typography sx={{ my: 1 }}>All content on turingtestchat.com, including text, graphics, logos, images, and software,
          is the property of turingtestchat.com or its licensors and is protected by copyright, trademark, and other laws.
          You may not copy, modify, distribute, or otherwise use TuringTestChat's content without TuringTestChat's prior written consent.</Typography>

        <Typography variant="h6" sx={{ my: 1 }}>User content</Typography>
        <Typography sx={{ my: 1 }}>You may submit content to turingtestchat.com, such as chat messages. By submitting content,
          you grant TuringTestChat a non-exclusive, royalty-free, perpetual, irrevocable, and fully sub-licensable right to use,
          reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such
          content throughout the world in any media.</Typography>

        <Typography variant="h6" sx={{ my: 1 }}>Disclaimer of warranties</Typography>
        <Typography sx={{ my: 1 }}>turingtestchat.com is provided "as is" and without warranty of any kind, either express or
          implied, including, but not limited to, the implied warranties of merchantability and fitness for a particular
          purpose. TuringTestChat does not warrant that turingtestchat.com will be uninterrupted or error-free.</Typography>

        <Typography variant="h6" sx={{ my: 1 }}>Limitation of liability</Typography>
        <Typography sx={{ my: 1 }}>In no event shall TuringTestChat be liable for any indirect, incidental, special, consequential,
          or punitive damages arising out of or in connection with your use of turingtestchat.com.</Typography>

        <Typography variant="h6" sx={{ my: 1 }}>Indemnification</Typography>
        <Typography sx={{ my: 1 }}>You agree to indemnify and hold TuringTestChat harmless from any claim or demand,
          including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these
          Terms or your violation of any law or the rights of a third party.</Typography>

        <Typography variant="h6" sx={{ my: 1 }}>Governing law</Typography>
        <Typography sx={{ my: 1 }}>These Terms shall be governed by and construed in accordance with the laws of
          California, without regard to its conflict of law provisions.</Typography>

        <Typography variant="h6" sx={{ my: 1 }}>Changes to these Terms</Typography>
        <Typography sx={{ my: 1 }}>TuringTestChat reserves the right to modify these Terms at any time, without notice.
          By continuing to use turingtestchat.com after changes have been made to these Terms,
          you agree to be bound by the revised Terms.</Typography>

        <Typography sx={{ my: 1 }}>If you have any questions or concerns about these Terms, please send an email to support@turingtestchat.com.</Typography>
      </Container>
      <Footer />
    </Box>
  )
}