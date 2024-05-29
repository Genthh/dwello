import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function ContactUs() {
  const boxes = useRef<(HTMLDivElement | null)[]>([]);
  const header = useRef<HTMLDivElement | null>(null);
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
      refContainer.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.4 }
    );
  }, []);
  return (
    <div
      ref={refContainer}
      className="w-full h-screen flex flex-col justify-center pb-[100px] items-center"
    >
      <h1 ref={header} className="text-4xl font-semibold">
        Do You Have Any Questions? Get Help From Us
      </h1>
      <div className="flex  gap-10  mt-[40px]">
        <p className="text-xl ">Chat live with our support team</p>
        <p className="text-xl">Browse our FAQ</p>
      </div>
      <div className="flex gap-2 mt-[20px]">
        <input
          className="bg-[#DDC7BB] outline-none placeholder-gray-800 text-black py-2 px-2 rounded w-[505px]"
          type="text"
          placeholder="Enter your email address..."
        />
        <button className="bg-[#2B1B12] w-[100px] rounded text-white text-xl">
          Submit
        </button>
      </div>
    </div>
  );
}
