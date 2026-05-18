import ScrollObserver from "./ScrollObserver";
import React from "react";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import SectionMediaLeft from "./components/SectionMediaLeft";
import SectionIconGrid from "./components/SectionIconGrid";
import SectionContacto from "./components/SectionContacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <ScrollObserver />
      <Navbar />
      <main>
        <SectionHero />
        <SectionMediaLeft />
        <SectionIconGrid />
        <SectionContacto />
      </main>
      <Footer />
    </>
  );
}
