import React from "react";
import "./App.css";
import Logo from "./components/common/Logo";
import Footer from "./components/common/Footer";
import BuildPage from "./components/build/BuildPage";

function App() {
  return (
    <>
      <Logo />
      <BuildPage />
      <Footer />
    </>
  );
}

export default App;
