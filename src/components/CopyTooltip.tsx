import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CopyTooltipProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

type TooltipAlign = "center" | "left" | "right";

export default function CopyTooltip({ text, children, className = "" }: CopyTooltipProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [align, setAlign] = useState<TooltipAlign>("right");
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Preserve scroll position on first click
    if (!hasBeenClicked) {
      const scrollY = window.scrollY;
      setHasBeenClicked(true);
      
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    }
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dynamic positioning - only run after first render
  useEffect(() => {
    if (!(copied || isHovered)) return;
    
    // Small delay to let initial render settle
    const timeoutId = setTimeout(() => {
      const button = buttonRef.current;
      const tooltip = tooltipRef.current;
      if (!button || !tooltip) return;
      
      const buttonRect = button.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      // Check if tooltip would overflow right
      if (buttonRect.left + buttonRect.width / 2 + tooltipRect.width / 2 > viewportWidth - 8) {
        setAlign("right");
      } else if (buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2 < 8) {
        setAlign("left");
      } else {
        setAlign("center");
      }
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [copied, isHovered]);

  let tooltipClass = "absolute bottom-full mb-2 px-2 py-1 bg-zinc-800 text-white text-sm rounded max-w-[90vw] overflow-x-auto whitespace-nowrap z-50 will-change-transform contain-layout";
  if (align === "center") {
    tooltipClass += " left-1/2 -translate-x-1/2";
  } else if (align === "left") {
    tooltipClass += " left-0 translate-x-0";
  } else if (align === "right") {
    tooltipClass += " right-0 translate-x-0";
  }

  return (
    <span 
      className="relative group inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        ref={buttonRef}
        onClick={handleCopy}
        onMouseDown={(e) => e.preventDefault()}
        className={className}
      >
        {children}
      </button>
      <AnimatePresence>
        {(copied || isHovered) && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className={tooltipClass}
          >
            <span className="flex flex-row gap-1 items-center">
              {copied ? (
                <>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check text-green-500">
                      <motion.path
                        d="M20 6 9 17l-5-5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </svg>
                  </span>
                  Copied to clipboard
                </>
              ) : (
                "Copy email"
              )}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
} 