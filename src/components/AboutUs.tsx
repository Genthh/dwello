import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const boxes = useRef<(HTMLDivElement | null)[]>([]);
  const refContainer = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const boxContentTitle = useRef<(HTMLDivElement | null)[]>([]);
  const boxContentText = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refContainer.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      boxes.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      }
    );
    tl.fromTo(
      boxContentTitle.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      },
      "-=0.5"
    );
    tl.fromTo(
      boxContentText.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      },
      "-=0.5"
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
          toggleActions: "play reverse play reverse",
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
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  const boxContents = [
    {
      title: "Expert Team",
      description: "Our team consists of industry experts.",
    },
    {
      title: "Personalized Service",
      description: "We tailor our services to meet your needs.",
    },
    {
      title: "Integrity",
      description: "We value honesty and transparency in all our dealings.",
    },
    {
      title: "Experience",
      description: "Years of experience in the home buying process.",
    },
  ];

  return (
    <div
      ref={refContainer}
      className="flex flex-col justify-center items-center w-full pb-[200px]"
    >
      <h1 ref={headingRef} className="text-3xl font-semibold">
        Why Choose Us
      </h1>
      <p ref={textRef} className="text-xl w-[50rem] text-center">
        Elevating Your Home Buying Experience with Expertise, Integrity, and
        Unmatched Personalized Service
      </p>
      <div className="flex px-20 justify-around items-center w-full mt-[70px]">
        {boxContents.map((content, i) => (
          <div
            key={i}
            ref={(el) => {
              boxes.current[i] = el;
            }}
            className="w-[280px] h-[270px] bg-[#DDC7BB] rounded-[8px] flex flex-col justify-center items-center p-4 text-center"
          >
            <h2
              className="text-2xl font-bold self-start"
              ref={(el) => {
                boxContentTitle.current[i] = el;
              }}
            >
              {content.title}
            </h2>
            <p
              ref={(el) => {
                boxContentText.current[i] = el;
              }}
              className="mt-2 self-start text-left"
            >
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
