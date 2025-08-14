import CopyTooltip from "../components/CopyTooltip";
import { motion } from "framer-motion";
export default function About() {
  document.body.style.backgroundColor = "#ededeb";

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center bg-light">
      <div className="flex w-full text-[6rem] lg:text-[12rem] pt-16 items-center">
        <div className="flex flex-1 justify-start gap-4 md:gap-8 px-4 md:px-8 overflow-hidden big-shoulders-black">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="font-outline-2-gray text-transparent hidden xl:inline-block"
          >
            ABOUT
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-outline-2-gray text-transparent hidden md:inline-block"
          >
            ABOUT
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex"
          >
            ABOUT
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-outline-2-gray text-transparent"
          >
            ABOUT
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-outline-2-gray text-transparent"
          >
            ABOUT
          </motion.h2>
        </div>
      </div>
      <div className="flex flex-col max-w-[108rem] gap-12 lg:flex-row py-2 md:py-8 px-4 md:px-12 items-center font-sans">
        <img
          src="/scott-2.png"
          width="400"
          height="400"
          alt="Photo of Scott Daly"
          className=" rounded-md"
        />
        <div className="flex flex-col flex-1 md:px-12 my-auto gap-2 md:gap-5 text-left">
          
          <h2 className="text-4xl md:text-5xl xl:text-7xl newsreader font-light">
            Hey, I&apos;m Scott!
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl">
            I'm a product & UX designer who loves technology and design.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl ">Before I was a designer, I was an art director working in advertising, and have been designing things since I discovered Photoshop to design band t-shirts back in the day.</p>
          <p className="text-lg md:text-xl xl:text-2xl">When I'm not working I'm messing around with code (usually javascript / react) and building AI-powered software, playing guitar, or exploring Seattle.</p>
          <p className="font-bold py-4 text-xl md:text-2xl">
            Feel free to send me an email at{" "}
            <CopyTooltip
              text="rscottdaly@gmail.com"
              className="text-teal-600 underline cursor-pointer"
            >
              rscottdaly@gmail.com
            </CopyTooltip>{" "}
            or find me on{" "}
            <a
              href="https://www.linkedin.com/in/rscottdaly/"
              className="text-teal-600 underline"
            >
              Linkedin
            </a>
            .
          </p>
          <p className="text-sm md:text-lg pb-2">
            <span className="font-bold">Note: </span>My name is legal name
            &quot;Richard Scott Daly&quot;, but I go by my middle name,
            &quot;Scott&quot;. So if you see Richard Daly on something,
            that&apos;s still me!
          </p>
        </div>
      </div>
    </div>
  );
}
