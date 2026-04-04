"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TerminalSection from "@/components/TerminalSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import FloatingParticles from "@/components/FloatingParticles";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      {/* Background effects */}
      <MatrixRain />
      <FloatingParticles />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <TechStack />
        <About />
        <Services />
        <Projects />
        <TerminalSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
