
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-10">
        <p className="font-mono text-teal mb-4">04. What's Next?</p>
        <h2 className="text-4xl font-semibold text-slate-lightest mb-5">Get In Touch</h2>
        <p className="max-w-md mx-auto text-slate">
          I'm currently looking for new opportunities. Whether you have a question or 
          just want to say hi, I'll try my best to get back to you!
        </p>
      </div>
      
      <div className="max-w-lg mx-auto">
        <form className="space-y-6 bg-navy-light p-8 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-light">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-navy border-navy-lightest text-slate-lightest"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-light">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="bg-navy border-navy-lightest text-slate-lightest"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-slate-light">
              Subject
            </label>
            <Input
              id="subject"
              placeholder="Subject"
              className="bg-navy border-navy-lightest text-slate-lightest"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-light">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="bg-navy border-navy-lightest text-slate-lightest min-h-32"
            />
          </div>
          
          <Button
            type="submit"
            className="bg-transparent hover:bg-navy-light text-teal border border-teal w-full"
          >
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
        
        <div className="text-center mt-8">
          <p className="text-slate mb-2">Or reach out directly:</p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center text-teal hover:text-slate-lightest transition-colors"
          >
            <Mail className="mr-2 h-4 w-4" />
            hello@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
