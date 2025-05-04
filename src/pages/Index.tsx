
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

// Custom hook for fade in animation on scroll
const useFadeInOnScroll = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};

const Index = () => {
  useFadeInOnScroll();

  return (
    <Layout>
      <Hero />
      
      <div className="fade-in-section">
        <About />
      </div>
      
      <div className="fade-in-section">
        <Skills />
      </div>
      
      <div className="fade-in-section">
        <Projects />
      </div>
      
      <div className="fade-in-section">
        <Experience />
      </div>
      
      <div className="fade-in-section">
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
