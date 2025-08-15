const GodaddyPro = () => {
  document.body.style.backgroundColor = "#ffffff";
  return (
    <div className="flex flex-col w-full items-center font-sans bg-godaddy-bg overflow-x-hidden">
      <div className="flex flex-col items-center w-full gap-4">
        <div className="flex bg-[#f0f1dc] justify-center scale-150 lg:scale-100">
          <img
            src="/godaddy-pro/header.png"
            height={1800}
            width={1800}
            alt="GoDaddy UX Design Work"
            className=" w-10/12 mt-24 md:mt-0"
          />
        </div>
        <div className="flex flex-col px-8 md:px-0 md:w-7/12 mt-24 md:mt-12 mb-12 md:mb-32 gap-8 md:gap-12">
          
          <p className="text-lg md:text-2xl leading-relaxed font-light">
            At GoDaddy, I have worked on{" "}
            <span className="font-bold">
              building out GoDaddy&apos;s Pro web experience
            </span>
            , doing everything from research to get to know the Website Designer
            and Developer Audience all the way through to working with our
            engineers to implement the designs.
          </p>

          <p className="text-lg md:text-2xl font-light leading-relaxed">
            I also{" "}
            <span className="font-bold">
              lead the UX Design for GoDaddy&apos;s new Academy
            </span>
            , a home for all the resources and tools that GoDaddy offers to help
            small businesses succeed online. I worked with a team of designers,
            researchers, and engineers to build out the Academy from the ground
            up.
          </p>

          <p className="text-lg md:text-2xl font-light leading-relaxed">
            I&apos;ve also{" "}
            <span className="font-bold">
              contributed to building out GoDaddy&apos;s Design System
            </span>
            , including contributing new components such as icons and even a new
            coachmark component, which I designed and built out with the help of
            our engineers.
          </p>

          <p className="text-lg md:text-2xl font-light leading-relaxed">
            If you have more questions about my work at GoDaddy, please feel
            free to reach out to me at{" "}
            <span className="font-bold">rscottdaly@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GodaddyPro;
