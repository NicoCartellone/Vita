import * as React from "react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./navbar";
import Header from "./header";
import Register from "./register";
import About from "./about";
import Testimonials from "./testimonials";
import Footer from "./footer";

const sections = [
  { title: "Acerca de", url: "#about" },
  { title: "Home", url: "#" },
  { title: "Registrarse", url: "#register" },

];

const theme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar sections={sections} />
      <Container maxWidth="lg" sx={{ backgroundColor: "#d7e8f4" }}>
        {/* NAVBAR COMPONENT - links to various sections*/}

        <main>
          {/* HEADER COMPONENT - image with tagline*/}
          <Header />
          {/* REGISTER COMPONENT - signup/signin for doctor/patient */}
          <Register />
          <br />
          <br />
          {/* ABOUT COMPONENT - about doctors */}
          <About />
          {/* TESTIMONIALS COMPONENT - patient testimonials */}
          <Testimonials />

        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
