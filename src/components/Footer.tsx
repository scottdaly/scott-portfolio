import { useNavigate, useLocation } from "react-router-dom";
import { darkBackgrounds } from "../utils/utils";
import CopyTooltip from "./CopyTooltip";

export default function Footer() {
  let year = new Date().getFullYear();
  let navigate = useNavigate();
  let location = useLocation();
  const isDarkBackground = darkBackgrounds.includes(location.pathname);

  return (
    <footer
      className={`flex flex-col w-full pb-4 ${
        location.pathname === "/godaddy"
          ? "bg-godaddy-bg"
          : location.pathname === "/prepro"
          ? "bg-prepro-bg"
          : location.pathname === "/hallpass"
          ? "bg-hallpass-bg"
          : location.pathname === "/nevermade"
          ? "bg-nevermade-bg"
          : ""
      }`}
    >
      <div className="flex flex-col w-full max-w-[108rem] px-4 md:px-12 mx-auto">
        <div
          className={`w-full h-[1px] ${
            isDarkBackground ? "bg-zinc-400/60" : "bg-zinc-500/40"
          }`}
        ></div>
        <div
          className={`flex flex-row gap-4 items-end md:items-center justify-between w-full py-4 ${
            isDarkBackground ? "text-zinc-200/80" : "text-zinc-800/70"
          }`}
        >
          <p className="flex flex-row text-sm font-semibold">© {year}</p>

          {location.pathname === "/" ||
          location.pathname === "/about" ? null : (
            <button
              className={`text-md border border-zinc-400/40 hover:border-zinc-400/60 hover:bg-zinc-400/10 transition-color duration-300 py-2 px-4 rounded-lg cursor-pointer ${
                isDarkBackground ? "text-zinc-200/80" : "text-zinc-800/70"
              }`}
              onClick={() => navigate("/")}
            >
              Return Home
            </button>
          )}

          <div className="relative group flex flex-col md:flex-row gap-2 items-end md:items-start">
            <CopyTooltip
              text="rscottdaly@gmail.com"
              className="border border-zinc-400/40 scale-90 md:scale-100 hover:border-zinc-400/60 hover:bg-zinc-400/10 transition-color duration-300 p-2 rounded-lg cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy-icon lucide-copy"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            </CopyTooltip>
            <div onClick={() => {
              navigator.clipboard.writeText("rscottdaly@gmail.com");

            }} className="text-sm md:text-xl flex flex-col md:flex-row items-end md:items-start">
              rscottdaly<span>@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
