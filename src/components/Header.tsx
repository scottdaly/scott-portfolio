"use client";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log("location", location);

  const darkBackgrounds = ["/prepro", "/hallpass"];

  return (
    <div className={`absolute w-full py-8 z-50 text-black/80`}>
      <div className="flex justify-between w-full px-4 md:px-12">
        <Link to="/">
          <h2
            className={`text-3xl tracking-wider transition-all duration-300 ${
              location.pathname === "/"
                ? "cursor-default"
                : darkBackgrounds.includes(location.pathname)
                ? "text-white hover:text-primary"
                : "hover:text-dark-green"
            }`}
          >
            SCOTT DALY
          </h2>
        </Link>
        <div className="flex gap-8 font-sans text-xl hover:cursor-pointer">
          <Link to="/">
            <p
              className={`transition-all duration-300 ${
                location.pathname === "/"
                  ? "text-[#1c1c1c] font-bold underline underline-offset-8"
                  : darkBackgrounds.includes(location.pathname)
                  ? "hover:text-primary text-gray-200/90 hover:font-bold"
                  : "text-gray-800/90 hover:text-dark-green hover:font-bold"
              }`}
            >
              Work
            </p>
          </Link>
          <Link to="/about">
            <p
              className={`transition-all duration-300
              ${
                darkBackgrounds.includes(location.pathname)
                  ? "hover:text-primary text-gray-200/90"
                  : "hover:text-dark-green"
              }
                ${
                  location.pathname === "/about"
                    ? "text-[#1c1c1c] hover:text-[#1c1c1c] font-bold underline underline-offset-8"
                    : "hover:font-bold"
                }
                `}
            >
              About
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}