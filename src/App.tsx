import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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
    <main className="flex min-h-screen flex-col bg-[#e0e0dc] items-center">
      <div className="w-full max-w-[108rem] mx-auto px-4 md:px-12">
    <div
      className={`flex flex-col w-full pt-44 md:pt-36 font-semibold font-sans text-dark`}
    >
      <div className="flex flex-col tracking-tighter">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl md:text-9xl xl:text-[10rem] big-shoulders-black leading-[7.5rem]"
      >
        PRODUCT AND
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-7xl md:text-9xl xl:text-[10rem] big-shoulders-black"
      >
        UX DESIGNER
      </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="flex w-full text-zinc-700 -mt-2 mb-2"
      >
         <div className='text-2xl md:text-3xl xl:text-3xl'>
          <div className='flex flex-row items-center md:gap-1.5'>
            <span className='fill-zinc-700 flex-shrink-0 scale-60 md:scale-85 -translate-x-[2px] translate-y-[2px]'>
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="21" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            </span>
            Seattle, WA
          </div>
          
        </div> 
      </motion.div>
    </div>

    

    <div className="flex flex-col gap-8 w-full py-8">
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
    </div>
  </main>
  )
}

export default App
