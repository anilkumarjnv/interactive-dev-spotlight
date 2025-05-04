
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="contact" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-primary font-medium mb-4">Let's Connect</p>
          <h2 className="headline-text text-slate-900 mb-6">Get In Touch</h2>
          <p className="body-text max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. Whether you have a question, 
            a project idea, or just want to say hello, feel free to reach out!
          </p>
        </div>
        
        <div className="fade-in-up" style={{ "--stagger-delay": "0.2s" } as any}>
          <div className="glass-card p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white border-gray-200 focus:border-primary focus:ring-primary text-slate-900 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white border-gray-200 focus:border-primary focus:ring-primary text-slate-900 rounded-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-white border-gray-200 focus:border-primary focus:ring-primary text-slate-900 rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="bg-white border-gray-200 focus:border-primary focus:ring-primary text-slate-900 min-h-32 rounded-lg"
                />
              </div>
              
              <Button
                type="submit"
                className="apple-button w-full"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <div className="text-center mt-8">
              <p className="text-slate-600 mb-2">Or reach out directly:</p>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                hello@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
