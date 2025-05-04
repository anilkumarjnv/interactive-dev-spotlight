
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading ? (
        <div className="fixed inset-0 bg-navy flex items-center justify-center z-50">
          <div className="text-teal text-4xl font-mono animate-pulse">Loading...</div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
            {children}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
