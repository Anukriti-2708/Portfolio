
import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";


const App = () => {
  return (
    <div>
      
      <Home />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;