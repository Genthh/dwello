"use client";
import { AboutUs } from "@/components/AboutUs";
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
    </main>
  );
}
