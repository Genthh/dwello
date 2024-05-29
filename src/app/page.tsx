"use client";
import { AboutUs } from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Help from "@/components/Help";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Residences from "@/components/Residences";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Help />
      <AboutUs />
      <Residences />
      {/* <Footer /> */}
    </main>
  );
}
