
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Scroll animation handler
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Animate elements as they come into view
      const fadeElements = document.querySelectorAll(".fade-in-up");
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight * 0.8) &&
          rect.bottom >= 0
        );
        
        if (isVisible) {
          el.classList.add("appear");
        }
      });
      
      // Animate skill progress bars when in view
      const progressBars = document.querySelectorAll(".skill-progress");
      progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight * 0.8) &&
          rect.bottom >= 0
        );
        
        if (isVisible && !bar.classList.contains("appear")) {
          bar.classList.add("appear");
          // @ts-ignore
          bar.style.width = bar.dataset.width || "0%";
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading ? (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="text-primary text-4xl font-display animate-pulse">Loading...</div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
