import { useState } from "react";

import "./HomePage.css";
import Header from "./mainPage/Header";
import Body from "./mainPage/Body";
import Footer from "./mainPage/Footer"

function HomePage() {
  return (
    <div className="main-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default HomePage;
