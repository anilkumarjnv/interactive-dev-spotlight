
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/90 shadow-md backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex justify-between items-center">
        <a href="#" className="text-teal font-mono text-xl font-medium">
          <span className="text-teal">{"<"}</span>
          <span className="text-teal">JD</span>
          <span className="text-teal">{" />"}</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-slate-light hover:text-teal transition-colors font-mono text-sm"
              >
                <span className="text-teal">0{i + 1}.</span> {item.name}
              </a>
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          className="hidden md:block border-teal text-teal hover:bg-navy-light"
        >
          Resume
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-teal hover:bg-navy-light"
        >
          <Menu />
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-navy-light/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {navItems.map((item, i) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-lightest hover:text-teal transition-colors font-mono text-lg"
              >
                <span className="text-teal">0{i + 1}.</span> {item.name}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <Button
              variant="outline"
              className="border-teal text-teal hover:bg-navy-light"
            >
              Resume
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
