import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (

    <div>
       <div className="bg-slate-900">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />


    </div>
     
  );
}

export default App;
