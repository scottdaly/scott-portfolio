import { Link } from "react-router-dom";

export default function AdsPage() {
  document.body.style.backgroundColor = "#eae6e1";

  return (
    <div className="flex flex-col w-full font-sans bg-advertising-bg text-advertising-text">
      <div className="flex flex-col w-full min-h-screen gap-2 md:gap-4 text-start md:text-center px-8 mt-24 md:mt-36">
        <h3 className="md:text-xl text-balance">
          At the start of my career, I worked as an Advertising Art Director.
        </h3>
        <h2 className="text-3xl md:text-5xl text-balance">
          I&apos;ve worked at agencies including
        </h2>
        <div className="flex flex-wrap w-full gap-3 md:gap-5 text-3xl md:text-5xl py-4 justify-center">
          <Link to="https://www.bssp.com/">
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <img
                src="/ads/bssp.svg"
                width="50"
                height="50"
                alt="BSSP"
                className="h-12 w-12 md:h-12 md:w-12"
              />
              <h1 className="font-bold hover:text-teal-600 transition-all duration-300">
                BSSP,
              </h1>
            </div>
          </Link>

          <div className="flex items-center justify-center gap-2 md:gap-4">
            <Link to="https://www.doner.com/" className="flex gap-2 md:gap-4">
              <img
                src="/ads/doner-logo.png"
                width="50"
                height="50"
                alt="Doner Logo"
                className="rounded-xl flex items-center h-12 w-12 md:h-12 md:w-12"
              />
              <h1 className="flex items-center font-bold hover:text-teal-600 transition-all duration-300">
                Doner,{" "}
              </h1>
            </Link>
            <h2>and</h2>
          </div>
          <Link to="https://mogosme.com/">
            <div className="flex justify-center items-center gap-2 md:gap-4">
              <img
                src="/ads/mogosme-logo.png"
                width="100"
                height="100"
                alt="BSSP"
                className="inline"
              />
              <h1 className="font-bold hover:text-teal-600 transition-all duration-300">
                MogoSME
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col w-full gap-8 text-3xl md:text-5xl py-8 md:py-16 justify-center">
          <h2 className="text-2xl">
            I&apos;ve worked on a variety of brands, including:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 text-5xl py-4 mx-auto">
            <div className="flex items-center justify-center w-50">
              <img
                src="/ads/raos.jpg"
                width="50"
                height="50"
                alt="Rao's Homemade"
                className="rounded-xl w-34"
              />
            </div>
            <div className="flex h-50 w-50 items-center justify-center">
              <img
                src="/ads/mcd.png"
                width="50"
                height="50"
                alt="McDonalds"
                className="w-36"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/ads/mitsu.png"
                width="50"
                height="50"
                alt="Mitsubishi"
                className="md:w-30 w-25"
              />
            </div>
            <div className="flex h-50 w-50 items-center justify-center">
              <img
                src="/ads/jbl.png"
                width="50"
                height="50"
                alt="JBL"
                className="w-34"
              />
            </div>
            <div className="flex items-center justify-center w-50">
              <img
                src="/ads/maserati.png"
                width="50"
                height="50"
                alt="Maserati"
                className="w-38"
              />
            </div>
            <div className="flex items-center justify-center w-50">
              <img
                src="/ads/alfa.png"
                width="50"
                height="50"
                alt="Alfa romeo"
                className="w-34"
              />
            </div>
            <div className="flex items-center justify-center w-50">
              <img
                src="/ads/bushs.png"
                width="50"
                height="50"
                alt="Bush's Baked beans"
                className="w-36"
              />
            </div>
            <div className="flex h-50 w-50 items-center justify-center">
              <img
                src="/ads/nathans.png"
                width="50"
                height="50"
                alt="Nathans Hot Dogs"
                className="w-40"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-8 text-3xl md:text-5xl py-8 md:py-16 justify-center">
          <h2 className="text-2xl">
            Here&apos;s a taste of my work over the years:
          </h2>
          <div className="flex flex-col gap-32 items-center">
            <img
              src="/ads/mitsu-1.jpg"
              width="1000"
              height="1000"
              alt="Mitsubishi"
              className="object-cover"
            />
            <img
              src="/ads/mitsu-2.gif"
              width="800"
              height="800"
              alt="Mitsubishi Social Ad"
              className="object-cover"
            />
            <img
              src="/ads/raos-1.jpg"
              width="1000"
              height="1000"
              alt="Rao's Homemade OOH Ad 2"
              className="object-cover"
            />
            <img
              src="/ads/raos-2.jpg"
              width="1000"
              height="1000"
              alt="Rao's Homemade OOH Ad 2"
              className="object-cover"
            />
            <img
              src="/ads/raos-3.gif"
              width="800"
              height="800"
              alt="Rao's Homemade Social Ad"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
