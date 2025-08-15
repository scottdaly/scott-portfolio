import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const darkBackgrounds = ["/prepro", "/hallpass", "/nevermade"];
  
  // Only show animated logo on homepage
  const isHomepage = location.pathname === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 400; // Pixels to complete the animation (same as App.tsx)
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset scroll progress when navigating to homepage
  useEffect(() => {
    if (isHomepage) {
      setScrollProgress(0);
    }
  }, [location.pathname, isHomepage]);
  
  return (
    <>
      {/* Header background layer - separate from main header to prevent z-index issues */}
      {isHomepage && (
        <div 
          className="fixed w-full h-20 top-0 left-0 z-40 transition-all duration-700 pointer-events-none"
          style={{
            backgroundColor: `rgba(237, 237, 235, ${Math.min(0.95, scrollProgress * 1.2)})`,
            backdropFilter: scrollProgress > 0.2 ? 'blur(8px)' : 'none'
          }}
        />
      )}
      
      {/* Main header content */}
      <div className={`fixed w-full h-20 z-50 text-black/80 flex items-center`}>
        <div className="flex justify-between w-full px-4 md:px-12 max-w-[108rem] mx-auto items-center">
        {/* Logo with fade animation */}
        <Link to="/">
          <motion.div
            className={`transition-all duration-500 newsreader italic cursor-pointer inline-block text-[32px] ${
              darkBackgrounds.includes(location.pathname)
                ? "text-white hover:text-primary bg-zinc-900/40 backdrop-blur-sm rounded-2xl px-4 py-2"
                : location.pathname === "/"
                ? "text-black hover:text-black/70"
                : location.pathname === "/godaddy"
                ? "text-black hover:text-black/70 bg-[#F0F1DC]/40 backdrop-blur-sm rounded-2xl px-4 py-2"
                : location.pathname === "/ads"
                ? "text-black hover:text-black/70 bg-[#eae6e1]/40 backdrop-blur-sm rounded-2xl px-4 py-2"
                : "text-black hover:text-black/70 light-bg backdrop-blur-sm rounded-2xl px-4 py-2"
            }`}
            style={{
              opacity: isHomepage ? (scrollProgress > 0.5 ? Math.min(1, (scrollProgress - 0.5) * 4) : 0) : 1, // Fade in after hero fades out
              pointerEvents: isHomepage && scrollProgress < 0.6 ? 'none' : 'auto',
            }}
          >
            Scott Daly
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex gap-8 font-sans text-xl hover:cursor-pointer ${
            darkBackgrounds.includes(location.pathname)
              ? "bg-zinc-900/40 backdrop-blur-sm rounded-2xl px-4 py-2"
              : location.pathname === "/"
              ? ""
              : location.pathname === "/godaddy"
              ? "bg-[#F0F1DC]/40 backdrop-blur-sm rounded-2xl px-4 py-2"
              : location.pathname === "/ads"
              ? "bg-[#eae6e1]/40 backdrop-blur-sm rounded-2xl px-4 py-2"
              : "light-bg  backdrop-blur-sm rounded-2xl px-4 py-2"
          }`}
        >
          <Link
            className="flex items-center justify-center w-12 text-center"
            to="/"
          >
            <p
              className={`transition-all duration-300 ${
                location.pathname === "/"
                  ? "text-[#1c1c1c] font-bold underline underline-offset-8"
                  : darkBackgrounds.includes(location.pathname)
                  ? "hover:text-white text-gray-200/90 hover:font-bold"
                  : "text-gray-800/90 hover:text-dark-green hover:font-bold"
              }`}
            >
              Work
            </p>
          </Link>
          <Link
            className="flex items-center justify-center w-12 text-center"
            to="/play"
          >
            <p
              className={`transition-all duration-300
              ${
                darkBackgrounds.includes(location.pathname)
                  ? "hover:text-white text-gray-200/90"
                  : "hover:text-dark-green"
              }
                ${
                  location.pathname === "/play"
                    ? "text-[#1c1c1c] hover:text-[#1c1c1c] font-bold underline underline-offset-8"
                    : "hover:font-bold font-light"
                }
                `}
            >
              Play
            </p>
          </Link>
          <Link
            className="flex items-center justify-center w-12 text-center"
            to="/about"
          >
            <p
              className={`transition-all duration-300
              ${
                darkBackgrounds.includes(location.pathname)
                  ? "hover:text-white text-gray-200/90"
                  : "hover:text-dark-green"
              }
                ${
                  location.pathname === "/about"
                    ? "text-[#1c1c1c] hover:text-[#1c1c1c] font-bold underline underline-offset-8"
                    : "hover:font-bold font-light"
                }
                `}
            >
              About
            </p>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 ${
            darkBackgrounds.includes(location.pathname)
              ? "text-white bg-zinc-900/40 backdrop-blur-sm rounded-2xl px-4 py-2"
              : "text-black p-2"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="md:hidden fixed inset-0 bg-black/50 z-[70]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-zinc-900 shadow-lg z-[80]"
            >
              <div className="flex flex-col p-8 gap-8 h-full">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-zinc-300/90"
                    aria-label="Close menu"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-6 w-full">
                  <Link
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-semibold ${
                      location.pathname === "/"
                        ? "text-white font-bold underline underline-offset-8"
                        : "text-zinc-400 hover:text-dark-green"
                    }`}
                  >
                    Work
                  </Link>
                   <Link
                    to="/play"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-semibold ${
                      location.pathname === "/play"
                        ? "text-white font-bold underline underline-offset-8"
                        : "text-zinc-400 hover:text-dark-green"
                    }`}
                  >
                    Play
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-semibold ${
                      location.pathname === "/about"
                        ? "text-white font-bold underline underline-offset-8"
                        : "text-zinc-400 hover:text-dark-green"
                    }`}
                  >
                    About
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </>
  );
}
