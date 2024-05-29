import React from "react";
import Logo from "../assets/logo.svg";
export default function Footer() {
  return (
    <div
      className="flex flex-col bg-[#DDC7BB] h-[50vh] px-10 mx-1"
      style={{ borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
    >
      <div className="flex justify-between py-10 pt-32">
        <div>
          <Logo />
          <p className="text-xl pt-5 w-1/2 ">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>
        <div className="flex gap-[120px]">
          <div>
            <h3 className="text-3xl font-bold">About</h3>
            <ul className="text-xl m">
              <li className="mt-2">
                <a href="#">Our Story</a>
              </li>
              <li className="mt-2">
                <a href="#">Careers</a>
              </li>
              <li className="mt-2">
                <a href="#">Our Team</a>
              </li>
              <li className="mt-2">
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Support</h3>
            <ul className="text-xl">
              <li className="mt-2">
                <a href="#">FAQ</a>
              </li>
              <li className="mt-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="mt-2">
                <a href="#">Help Center</a>
              </li>
              <li className="mt-2">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Find Us</h3>
            <ul className="text-xl">
              <li className="mt-2">
                <a href="#">Events</a>
              </li>
              <li className="mt-2">
                <a href="#">Locations</a>
              </li>
              <li className="mt-2">
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Our Social</h3>
            <ul className="text-xl">
              <li className="mt-2">
                <a href="#">Instagram</a>
              </li>
              <li className="mt-2">
                <a href="#">Facebook</a>
              </li>
              <li className="mt-2">
                <a href="#">Twitter (x)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
