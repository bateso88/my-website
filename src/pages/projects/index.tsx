import { useState } from "react";

import Navbar from "@Components/Navbar";
import Sidebar from "@Components/Sidebar";
import HeroSection from "@Components/HeroSection";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection/>
      <p>HI!</p>
      <div>this is a div</div>
    </>
  );
};

export default Projects;
