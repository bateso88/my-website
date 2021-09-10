import { useState } from "react";
import Head from "next/head";

import Navbar from "@Components/Navbar";
import { Placeholder } from "@Components/Placeholder";
import Sidebar from "@Components/Sidebar";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Ollie Bates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Placeholder />
      <p>yoyo </p>
    </div>
  );
};

export default Home;
