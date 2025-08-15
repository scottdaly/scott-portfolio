import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Lazy load page components
const AdsPage = lazy(() => import("./pages/Ads.tsx"));
const GodaddyPro = lazy(() => import("./pages/GodaddyPro.tsx"));
const PreproPage = lazy(() => import("./pages/Prepro.tsx"));
const HallpassPage = lazy(() => import("./pages/Hallpass.tsx"));
const AboutPage = lazy(() => import("./pages/About.tsx"));
const NevermadePage = lazy(() => import("./pages/Nevermade.tsx"));
const PlayPage = lazy(() => import("./pages/Play.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <div className="w-full mx-auto bg-light">
        <Header />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/prepro" element={<PreproPage />} />
            <Route path="/hallpass" element={<HallpassPage />} />
            <Route path="/ads" element={<AdsPage />} />
            <Route path="/godaddy" element={<GodaddyPro />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/nevermade" element={<NevermadePage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
