"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Logo from "../assets/logo.svg";
gsap.registerPlugin(useGSAP);
export const Navbar = () => {
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".ref", { y: -100 }, { y: 1, duration: 1.2, ease: "bounce.out" });
  }, []);
  return (
    <header
      // ref={headerRef}
      className="flex items-center justify-between py-4 border-b  shadow-md shadow-black/10 ref"
    >
      <nav className="flex items-center justify-between w-full px-32">
        <Logo />
        <div className="flex items-center justify-center gap-8 text-xl font-semibold ">
          <a href="/">Home</a>
          <a href="/">Service</a>
          <a href="/">Agents</a>
          <a href="/">Contact</a>
        </div>
        <div className="flex items-center justify-center gap-6  ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5601 20.4452L19.9149 17.7981C23.3906 13.1533 22.4429 6.57034 17.7981 3.09462C13.1534 -0.381104 6.57037 0.566612 3.09465 5.21139C-0.381073 9.85616 0.566643 16.4392 5.21142 19.9149C8.94248 22.7069 14.067 22.7069 17.7981 19.9149L20.4452 22.562C21.0292 23.146 21.9761 23.146 22.56 22.562C23.144 21.978 23.144 21.0312 22.56 20.4472L22.5601 20.4452ZM11.5435 19.0179C7.41545 19.0179 4.06904 15.6715 4.06904 11.5435C4.06904 7.41542 7.41545 4.06901 11.5435 4.06901C15.6716 4.06901 19.018 7.41542 19.018 11.5435C19.0136 15.6697 15.6697 19.0136 11.5435 19.0179Z"
              fill="#2B1B12"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8315 13.8502C7.92501 14.2033 4.94884 17.5042 5.0007 21.4262V21.6251C5.0007 22.3844 5.61629 23 6.37565 23C7.13502 23 7.75061 22.3844 7.75061 21.6251V21.3712C7.70928 18.9631 9.48641 16.9095 11.8755 16.6047C14.3974 16.3546 16.6445 18.1963 16.8946 20.7182C16.9094 20.8673 16.9168 21.017 16.917 21.1668V21.6251C16.917 22.3844 17.5326 23 18.2919 23C19.0513 23 19.6669 22.3844 19.6669 21.6251V21.1667C19.6624 17.1122 16.3719 13.829 12.3174 13.8335C12.1553 13.8337 11.9933 13.8392 11.8315 13.8502Z"
              fill="#2B1B12"
            />
            <path
              d="M12.3339 11.9996C15.3713 11.9996 17.8337 9.53727 17.8337 6.49982C17.8337 3.46237 15.3713 1 12.3339 1C9.29641 1 6.83403 3.46237 6.83403 6.49982C6.83704 9.53603 9.29765 11.9966 12.3339 11.9996ZM12.3339 3.74991C13.8526 3.74991 15.0838 4.9811 15.0838 6.49982C15.0838 8.01855 13.8526 9.24973 12.3339 9.24973C10.8151 9.24973 9.58394 8.01855 9.58394 6.49982C9.58394 4.9811 10.8151 3.74991 12.3339 3.74991Z"
              fill="#2B1B12"
            />
          </svg>
          <button className="bg-black text-white text-xl px-4 py-2 rounded-l">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};
