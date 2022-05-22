import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavbarComponent from "./components/navbar/NavbarComponent";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Header />
      <About />
    </div>
  );
};

export default App;
