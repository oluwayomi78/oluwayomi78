"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
