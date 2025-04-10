
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Zap, Users, Briefcase, ExternalLink, Calendar, FileWarning, UserPlus, GitFork, Gavel, Languages } from "lucide-react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize particle or other animations here
    const createParticle = () => {
      if (!heroRef.current) return;
      
      const particle = document.createElement("div");
      const size = Math.random() * 15 + 5;
      const speedX = Math.random() * 2 - 1;
      const speedY = Math.random() * -3 - 1;
      const opacity = Math.random() * 0.5 + 0.3;
      
      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 255}, ${opacity})`;
      particle.style.borderRadius = "50%";
      particle.style.filter = "blur(2px)";
      particle.style.boxShadow = `0 0 ${size * 2}px rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 150}, ${Math.random() * 255}, 0.4)`;
      
      const startX = Math.random() * heroRef.current.offsetWidth;
      const startY = heroRef.current.offsetHeight;
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      heroRef.current.appendChild(particle);
      
      let posX = startX;
      let posY = startY;
      
      const animate = () => {
        posX += speedX;
        posY += speedY;
        
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        
        if (posY < -size || posX < -size || posX > (heroRef.current?.offsetWidth ?? 0) + size) {
          if (heroRef.current?.contains(particle)) {
            heroRef.current.removeChild(particle);
          }
        } else {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };
    
    const interval = setInterval(createParticle, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  const prizes = [
    { title: "First Prize", amount: "₹10,000", icon: <Award size={40} className="text-yellow-400" /> },
    { title: "Second Prize", amount: "₹6,000", icon: <Award size={40} className="text-gray-400" /> },
    { title: "Third Prize", amount: "₹4,000", icon: <Award size={40} className="text-amber-700" /> },
  ];
  
  const features = [
    { 
      title: "Industry Exposure", 
      description: "Showcase your innovations to industry experts and potential investors.", 
      icon: <Briefcase size={32} className="text-cyan-400" />
    },
    { 
      title: "Networking", 
      description: "Connect with like-minded innovators and build valuable relationships.", 
      icon: <Users size={32} className="text-violet-400" />
    },
    { 
      title: "Recognition", 
      description: "Gain recognition for your creative solutions and technical expertise.", 
      icon: <Zap size={32} className="text-pink-400" />
    },
  ];

  const rules = [
    "The event is open to all students from any college and academic year.",
    "Participants can register individually or in teams (max 4 members per team).",
    "All projects must be original work. Plagiarism will lead to disqualification.",
    "The official language for presentations and documentation is English.",
    "Teams must consist of 2-4 members.",
    "Participants must bring their own laptops and any hardware required for their project.",
    "Projects must be original and developed during the event period.",
    "The decision of the judges will be final and binding.",
    "Plagiarism or use of pre-built solutions will lead to disqualification.",
    "All teams must present their project to the judges during the evaluation phase.",
    "Registration deadline is April 20, 2025. No late registrations will be accepted."
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0118]">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0118] to-[#1a0b36] px-4"
      >
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-10 bg-repeat"></div>
        
        <div className="z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-400">
              InnovatExpo
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8 leading-tight">
            Where <span className="text-violet-400">Ideas Spark</span>, <span className="text-cyan-400">Innovation Ignites!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://unstop.com" target="_blank" rel="noopener noreferrer">
              <Button 
                className="text-lg px-8 py-6 w-full sm:w-auto rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-lg shadow-violet-500/30 transition-all hover:shadow-violet-500/50 hover:scale-105"
              >
                Register on Unstop
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://forms.office.com/r/MvmPvpnnYY" target="_blank" rel="noopener noreferrer">
              <Button 
                className="text-lg px-8 py-6 w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500 shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:scale-105"
              >
                Microsoft Form
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          
          <p className="mt-6 text-gray-400">April 22, 2025 | Modern Education Society Wadia College of Engineering, Pune</p>
          
          <div className="mt-4 flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5 text-red-400" />
            <p className="text-red-400 font-semibold">Registration closes on April 20, 2025! Don't miss the opportunity!</p>
          </div>
          
          <div className="mt-4">
            <a 
              href="https://chat.whatsapp.com/B9khcm1zUf6DcK8C2GKFur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="mr-2">Join our WhatsApp Community</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        
        {/* Floating tech icons could be added here with absolute positioning */}
      </div>
      
      {/* Rules Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0118] to-[#1a0b36]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <FileWarning className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
              Event Rules
            </h2>
          </div>
          
          <Card className="max-w-3xl mx-auto bg-black bg-opacity-50 border border-violet-700 p-6 rounded-xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="rules" className="border-none">
                <AccordionTrigger className="text-xl font-semibold text-white hover:text-violet-300 py-4">
                  View Complete Rules
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-gray-300">
                    {rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center bg-violet-700 text-white rounded-full w-6 h-6 text-sm mr-3 flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-6 p-4 bg-violet-900 bg-opacity-30 border border-violet-600 rounded-lg">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-red-400 mr-2 flex-shrink-0" />
                <p className="text-red-400 font-semibold">
                  Registration deadline: April 20, 2025. Don't miss the opportunity to participate!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a0b36] to-[#0a0118]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
            Why Participate?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-black bg-opacity-50 border border-violet-700 hover:border-violet-500 p-6 rounded-xl transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20 group"
              >
                <div className="mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Prizes Section */}
      <section className="py-16 bg-gradient-to-b from-[#0a0118] to-[#1a0b36]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
            Prizes Worth ₹20,000
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <Card 
                key={index}
                className="bg-black bg-opacity-50 border border-violet-700 p-6 rounded-xl transition-all hover:transform hover:translate-y-[-10px] hover:shadow-lg hover:shadow-violet-500/20 text-center group"
              >
                <div className="mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:animate-pulse">
                  {prize.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{prize.title}</h3>
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
                  {prize.amount}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Countdown Section */}
      <section className="py-16 bg-gradient-to-b from-[#1a0b36] to-[#0a0118]">
        <div className="container mx-auto px-4 text-center">
          <CountdownTimer />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
