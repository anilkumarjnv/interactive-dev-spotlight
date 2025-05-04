
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display font-medium text-xl text-slate-900 mb-2">
              John Doe
            </div>
            <p className="text-slate-600 text-sm">Designed & Built with ♥</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
