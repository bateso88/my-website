import { useState } from "react";
import Head from "next/head";

import Navbar from "@Components/Navbar";
import Sidebar from "@Components/Sidebar";
import HeroSection from "@Components/HeroSection";
import InfoSection from "@Components/InfoSection";
import ProjectCarousel from "@Components/ProjectCarousel";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Ollie Bates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection id="about" title="About" lightTheme={true} />
      <InfoSection id="projects" title="Projects" lightTheme={false}>
        <ProjectCarousel />
      </InfoSection>
      <InfoSection id="travel" title="Travel" lightTheme={true} />
      <InfoSection id="other" title="Other" lightTheme={false} />
    </>
  );
};

export default Home;
