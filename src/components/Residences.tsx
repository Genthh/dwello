import React, { useRef } from "react";
import imgone from "../assets/imgimg1.png";
import imgtwo from "../assets/imgimg2.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Residences() {
  const boxes = useRef<(HTMLDivElement | null)[]>([]);
  const refContainer = useRef<HTMLDivElement | null>(null);
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
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      }
    );
  }, []);
  const boxContents = [
    {
      Image: imgone,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Consequatur quia accusamus eos et mollitia asperiores quae, excepturi voluptates veritatis at.",
    },
    {
      Image: imgone,

      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Consequatur quia accusamus eos et mollitia asperiores quae, excepturi voluptates veritatis at.",
    },
    {
      Image: imgone,

      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Consequatur quia accusamus eos et mollitia asperiores quae, excepturi voluptates veritatis at.",
    },
  ];
  return (
    <div
      ref={refContainer}
      className="flex h-screen flex-col w-full justify-center items-center mb-10"
    >
      <h1 className="text-3xl font-semibold">Our Popular Residences</h1>
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
            <div className="absolute bottom-0 bg-[#DDC7BB] opacity-85   rounded w-full h-40">
              <p className="text-[18px]  px-4">{content.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
