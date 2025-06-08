import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdsPage from './pages/Ads.tsx'
import GodaddyPro from './pages/GodaddyPro.tsx'
import PreproPage from './pages/Prepro.tsx'
import HallpassPage from './pages/Hallpass.tsx'
import AboutPage from './pages/About.tsx'

import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <div className="w-full mx-auto bg-light">
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prepro" element={<PreproPage />} />
        <Route path="/hallpass" element={<HallpassPage />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/godaddy" element={<GodaddyPro />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
