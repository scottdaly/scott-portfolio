export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f0f1dc]">
      <div className="flex w-full text-[6rem] lg:text-[12rem] pt-24 lg:pt-16 items-center">
        <div className="flex flex-1 justify-start gap-8 px-8 overflow-hidden">
        <h1 className="font-outline-2-gray text-transparent">ABOUT</h1>
        <h1 className="font-outline-2-gray text-transparent">ABOUT</h1>
          <h1 className="flex">ABOUT</h1>
          <h1 className="font-outline-2-gray text-transparent">ABOUT</h1>
          <h1 className="font-outline-2-gray text-transparent">ABOUT</h1>
        </div>
        
      </div>
      <div className="flex flex-col gap-12 lg:flex-row py-8 px-12 items-center font-sans">
        <img
          src="/scott.jpg"
          width="400"
          height="400"
          alt="Photo of Scott Daly"
          className=" rounded-md"
        />
        <div className="flex flex-col flex-1 md:px-12 my-auto gap-5 text-center lg:text-left">
          <h2 className="text-3xl md:text-7xl font-bold">Hi!</h2>
          <h2 className="text-4xl md:text-5xl xl:text-7xl font-serif">
            I&apos;m Scott Daly*, a product & UX designer.
          </h2>
          <p className="text-xl md:text-2xl xl:text-3xl">
            I tell stories, solve business problems & connect people through
            designing digital products & interactive experiences.
          </p>
          <p className="font-bold py-4 text-xl md:text-2xl">
            Feel free to send me an email at{" "}
            <a
              href="mailto:rscottdaly@gmail.com"
              className="text-teal-500 underline"
            >
              rscottdaly@gmail.com
            </a>{" "}
            or find me on{" "}
            <a
              href="https://www.linkedin.com/in/rscottdaly/"
              className="text-teal-500 underline"
            >
              Linkedin.
            </a>
          </p>
          <p className="text-lg">
            <span className="font-bold">*</span>My name is technically &quot;Richard Scott Daly&quot;, but I go
            by my middle name, &quot;Scott&quot;. So if you see Richard Daly on something, that&apos;s still me!
          </p>
        </div>
      </div>
    </div>
  );
}