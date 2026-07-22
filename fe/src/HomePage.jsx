import { useState } from "react";

import "./HomePage.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

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
