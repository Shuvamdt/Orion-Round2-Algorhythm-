import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Schedule />
      <Speakers />
    </div>
  );
};

export default App;
