import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main className="flex min-h-screen flex-col bg-[#f0f1dc] items-center">
    <div
      className={`flex flex-col w-full justify-center mt-44 md:mt-36 text-5xl md:text-7xl items-center font-semibold font-sans gap-1 md:pb-16 md:pt-8  text-black/70 px-4 xl:px-48 text-center lora-font`}
    >
      <h1 className="">
        Hey, I&apos;m{" "}
        <span className="text-black/90 text-5xl md:text-7xl md:inline block font-bold font-sans">
          Scott Daly,
        </span>
      </h1>
      <h2 className=" leading-tight balance-text">
        a
        <span className="text-black/90 text-5xl md:text-7xl font-bold font-sans">
          {" "}
          Product{" "}
          <span className={"text-black/60 font-normal "}>
            &
          </span>{" "}
          UX Designer
        </span>
      </h2>
      <h2 className="text-5xl md:text-7xl">
        based in
        <span className="text-black/90  block md:inline font-bold font-sans">
          {" "}
          Seattle, WA
        </span>
      </h2>
      {/* <h1 className="font-bold">Scott Daly</h1>
      <h2
        className={
          "text-black/90 font-sans uppercase text-7xl md:text-9xl font-black balance-text " +
          oswald.className
        }
      >
        Product & UX Designer
      </h2>
      <h2 className="text-3xl md:text-5xl font-semibold">
        Based in Seattle, WA
      </h2> */}
    </div>

    <div className="flex flex-col py-24 xl:px-48 px-4 gap-8 w-full">
      <div className="w-full rounded-xl overflow-hidden">
        <Link to="/godaddy">
          {windowSize.width < 800 ? (
            <img
              src="/godaddy-cover.png"
              width="1000"
              height="1000"
              alt="Godaddy cover"
              className="w-full object-cover h-[500px] 3xl:h-[700px] hover:scale-105 transition-all duration-[3000ms]"
              
            />
          ) : (
            <img
              src="/godaddy-cover-wide.png"
              width="1000"
              height="1000"
              alt="Godaddy cover"
              className="w-full object-cover h-[500px] 3xl:h-[700px] hover:scale-105 transition-all duration-[3000ms]"
              
            />
          )}
        </Link>
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <Link to="/prepro">
          <img
            src="/prepro/cover.jpg"
            width="1000"
            height="1000"
            alt="PrePro cover"
            className="w-full object-cover h-[500px] 3xl:h-[700px] hover:scale-105 transition-all duration-[3000ms]"
            
          />
        </Link>
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <Link to="/hallpass">
          <img
            src="/hallpass/cover.jpg"
            width="1000"
            height="1000"
            alt="Hallpass cover"
            className="w-full object-cover h-[500px] 3xl:h-[700px] hover:scale-105 transition-all duration-[3000ms]"
            
          />
        </Link>
      </div>
      <Link to="/ads">
        <div className="w-full rounded-xl overflow-hidden relative group">
          <div className="transition-all duration-[3000ms] hover:scale-105">
            <img
              src="/ads/mitsu-outlander.jpg"
              width="1000"
              height="1000"
              alt="Ads Cover"
              className="w-full object-cover h-[500px] 3xl:h-[700px] group-hover:scale-105 transition-all duration-[3000ms]"
              
            />
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <p className="text-3xl md:text-7xl text-[#f0f1dc] uppercase group-hover:scale-105 transition-all duration-[3000ms]">
              Advertising Work
            </p>
          </div>
        </div>
      </Link>
    </div>
  </main>
  )
}

export default App
