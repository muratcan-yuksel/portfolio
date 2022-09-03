import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import NavbarComponent from "./components/navbar/NavbarComponent";
import About from "./components/about/About";
import ProjectsContainer from "./components/projects/ProjectsContainer";

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Header />
      <ProjectsContainer />
      <About />
    </div>
  );
};

export default App;
