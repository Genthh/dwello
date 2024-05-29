import React, { useRef, useEffect } from "react";
import heroimg from "../assets/heroimg.png";
import Image from "next/image";
import { LocationModal } from "./LocationModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { x: "-100vw", opacity: 0 },
      { x: 0, opacity: 1, duration: 2.4, ease: "power2.out" }
    );
    tl.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      modalRef.current,
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: modalRef.current,
          start: "top bottom",
          end: "top 150px",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="flex w-full justify-center items-center px-32 ">
        <div ref={textRef} className="flex flex-col gap-6 w-1/2">
          <h1 className="text-7xl font-semibold w-3/4">Find Your Dream Home</h1>
          <p className="text-2xl w-3/4">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision
          </p>
          <button className="bg-black text-white text-xl px-4 py-2 rounded-l w-32 self-start">
            Sign up
          </button>
        </div>
        <div className="w-1/2" ref={imageRef}>
          <Image src={heroimg} alt="" />
        </div>
      </div>
      <div
        ref={modalRef}
        className="w-full h-full flex justify-center items-center mt-[-12rem]"
      >
        <LocationModal />
      </div>
    </div>
  );
};
