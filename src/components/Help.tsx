import React, { useEffect, useRef } from "react";
import hrl from "../assets/hrl.jpeg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Help = () => {
  const imgRef = useRef(null);
  const modalRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      imgRef.current,
      { x: "-50vh", y: 0, opacity: 0 },
      {
        x: 0,
        y: 100,
        opacity: 1,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: modalRef.current,
          start: "top 100%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={modalRef}
      className="flex min-h-screen justify-center items-center px-48 gap-36 my-16 mb-20"
    >
      <div ref={imgRef} className="w-1/2">
        <Image className="rounded w-[700px]" alt="img" src={hrl} />
      </div>
      <div className="flex w-1/2 flex-col gap-10">
        <h1 ref={headingRef} className="text-2xl font-semibold">
          We Help You To Find Your Dream Home
        </h1>
        <p ref={textRef} className="text-xl w-[450px]">
          From cozy cottages to luxurious estates, our dedicated team guides you
          through every step of the journey, ensuring your dream home becomes a
          reality
        </p>
      </div>
    </div>
  );
};

export default Help;
