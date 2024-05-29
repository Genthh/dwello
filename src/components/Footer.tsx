import React from "react";

export default function Footer() {
  return (
    <div
      className="flex flex-col bg-[#DDC7BB] h-[50vh] px-5 mx-1"
      style={{ borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
    >
      <div className="flex justify-between py-10">
        <div>
          <h2 className="text-2xl font-bold">Dwelle</h2>
          <p>Bringing you closer to your dream home, one click at a time.</p>
        </div>
        <div className="flex space-x-16">
          <div>
            <h3 className="font-bold">About</h3>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Support</h3>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Find Us</h3>
            <ul>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Our Social</h3>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter (x)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
