
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-navy border-t border-navy-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-teal font-mono mb-2">
              <span className="text-teal">{"<"}</span>
              <span className="text-teal">JD</span>
              <span className="text-teal">{" />"}</span>
            </div>
            <p className="text-slate text-sm">Designed & Built by John Doe</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-slate hover:text-teal transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-slate text-xs">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
