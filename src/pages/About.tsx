import CopyTooltip from "../components/CopyTooltip";
import { motion } from "framer-motion";
export default function About() {
  document.body.style.backgroundColor = "#e0e0dc";

  return (
    <div className="min-h-screen flex flex-col items-center bg-light">
      <div className="flex w-full text-[6rem] lg:text-[12rem] pt-24 lg:pt-16 items-center">
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
      <div className="flex flex-col max-w-[108rem] gap-12 lg:flex-row py-8 px-4 md:px-12 items-center font-sans">
        <img
          src="/scott-2.png"
          width="400"
          height="400"
          alt="Photo of Scott Daly"
          className=" rounded-md"
        />
        <div className="flex flex-col flex-1 md:px-12 my-auto gap-2 md:gap-5 text-left">
          <h2 className="text-2xl md:text-4xl xl:text-5xl eb-garamond-bold">
            Hey there!
          </h2>
          <h2 className="text-4xl md:text-5xl xl:text-7xl eb-garamond-bold">
            I&apos;m Scott Daly*, a product & UX designer.
          </h2>
          <p className="text-xl md:text-2xl xl:text-3xl">
            I tell stories, solve business problems & connect people through
            designing digital products & interactive experiences.
          </p>
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
          <p className="text-lg">
            <span className="font-bold">*</span>My name is legal name
            &quot;Richard Scott Daly&quot;, but I go by my middle name,
            &quot;Scott&quot;. So if you see Richard Daly on something,
            that&apos;s still me!
          </p>
        </div>
      </div>
    </div>
  );
}
