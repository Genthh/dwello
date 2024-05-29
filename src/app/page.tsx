"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { AboutUs } from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Help from "@/components/Help";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Residences from "@/components/Residences";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const residencesRef = useRef(null);

  useEffect(() => {
    if (residencesRef.current) {
      ScrollTrigger.create({
        trigger: residencesRef.current,
        start: "top center",
        onEnter: () => {
          gsap.to(window, {
            scrollTo: {
              y: residencesRef.current.offsetTop + window.innerHeight,
            },
            duration: 1,
          });
        },
      });
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Help />
      <AboutUs />
      <div ref={residencesRef}>
        <Residences />
      </div>
      <ContactUs />
    </main>
  );
}
