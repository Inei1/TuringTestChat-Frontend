import React from "react";
import { Features } from "./homepage/Features";
import { Header } from "./Header";
import { Landing } from "./homepage/Landing";
import { Footer } from "./homepage/Footer";

export const Homepage = () => {

  return (
    <React.Fragment>
        <Header />
        <Landing />
        <Features />
        {/* <Demo /> */}
        {/* <DragAndDrop /> */}
        {/* <Documentation /> */}
        {/* <News /> */}
        {/* <Subscribe /> */}
        <Footer />
    </React.Fragment>
  )
}