import ScrollObserver from "./ScrollObserver";
import React from "react";
import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import SectionFaq from "./components/SectionFaq";
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
        <SectionContacto />
        <SectionIconGrid />
        <SectionFaq />
      </main>
      <Footer />
    </>
  );
}
