import React, { useRef, useEffect } from "react";
import imgone from "../assets/imgimg1.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import ContactUs from "./ContactUs";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Residences() {
  const boxes = useRef<(HTMLDivElement | null)[]>([]);
  const header = useRef<HTMLDivElement | null>(null);
  const refContainer = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refContainer.current,
        start: "top 90%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(header.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(
      boxes.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      }
    );

    if (contactUsRef.current) {
      ScrollTrigger.create({
        trigger: refContainer.current,
        start: "bottom center",
        onEnter: () =>
          gsap.to(window, { duration: 1, scrollTo: contactUsRef.current }),
      });
    }
  }, []);

  const boxContents = [
    {
      Image: imgone,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quia accusamus eos et mollitia asperiores quae, excepturi voluptates veritatis at.",
    },
    {
      Image: imgone,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quia accusamus eos et mollitia asperiores quae, excepturi voluptates veritatis at.",
    },
    {
      Image: imgone,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quia accusamus eos et mollitia asperiores quae, excepturi voluptates veritatis at.",
    },
  ];

  return (
    <div>
      <div
        ref={refContainer}
        className="flex h-[80vh] flex-col w-full justify-center items-center mb-10"
      >
        <h1 ref={header} className="text-3xl font-semibold">
          Our Popular Residences
        </h1>
        <div className="flex gap-20">
          {boxContents.map((content, i) => (
            <div
              key={i}
              ref={(el) => {
                boxes.current[i] = el;
              }}
              className="relative rounded-[2rem ]  flex justify-center items-center mt-10"
            >
              <Image
                className="rounded h-[450px] object-cover"
                alt="img"
                src={content.Image}
              />
              <div className="absolute bottom-0 bg-[#DDC7BB] opacity-85 rounded w-full h-40">
                <p className="text-[18px] px-4">{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={contactUsRef}>
        <ContactUs />
      </div>
    </div>
  );
}
