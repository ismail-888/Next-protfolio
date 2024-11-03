"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PricingPlans from "@/components/PricingPlans";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import Toggle from "@/components/sub/Toggle";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);
  return (
    <>
    <Toggle>
      <Navbar id={id} />
      <div ref={compsRef} className="w-min">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Reviews />
        <Projects />
        <PricingPlans />
        <Contact />
        <Questions />
      </div>
      </Toggle>
    </>
  );
}
