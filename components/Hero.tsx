"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { ArrowRight, Zap, Phone, BarChart } from "lucide-react";

export function Hero() {
  const [clicks, setClicks] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const router = useRouter();
  const MAX_CLICKS = 7;

  const handleNodeClick = () => {
    const newClicks = Math.min(clicks + 1, MAX_CLICKS);
    setClicks(newClicks);

    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 800);

    if (newClicks >= MAX_CLICKS) {
      setTimeout(() => {
        router.push("/secret-discount");
      }, 1000);
    }
  };

  const peakScale = (clicks / MAX_CLICKS) * 2;
  const currentScale = isPulsing ? peakScale : 0;
  const currentOpacity = isPulsing ? 0.6 : 0;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Light Blue Flare Blooms */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden mix-blend-screen">
        <div 
          className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_top_left,rgba(0,194,255,1)_0%,rgba(0,194,255,0.4)_40%,transparent_70%)] transition-all duration-1000 ease-in-out origin-top-left"
          style={{ transform: `scale(${currentScale})`, opacity: currentOpacity }}
        />
        <div 
          className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,1)_0%,rgba(0,194,255,0.4)_40%,transparent_70%)] transition-all duration-1000 ease-in-out origin-top-right"
          style={{ transform: `scale(${currentScale})`, opacity: currentOpacity }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,194,255,1)_0%,rgba(0,194,255,0.4)_40%,transparent_70%)] transition-all duration-1000 ease-in-out origin-bottom-left"
          style={{ transform: `scale(${currentScale})`, opacity: currentOpacity }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,194,255,1)_0%,rgba(0,194,255,0.4)_40%,transparent_70%)] transition-all duration-1000 ease-in-out origin-bottom-right"
          style={{ transform: `scale(${currentScale})`, opacity: currentOpacity }}
        />
      </div>

      {/* Screen flash on fully overtake */}
      <AnimatePresence>
        {clicks >= MAX_CLICKS && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-white z-[200] pointer-events-none mix-blend-screen"
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10 w-full mt-4">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Your Business Should Never Miss <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange text-glow">Another Lead</span>
          </h1>

          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
            We build AI-powered growth systems that capture, qualify, and close leads automatically — 24/7.
          </p>

          <ul className="flex flex-col gap-4 text-sm md:text-base font-medium">
            {[
              { text: "Instant AI call within 60 seconds", icon: Zap },
              { text: "Never miss inbound calls again", icon: Phone },
              { text: "Fully automated pipeline", icon: BarChart },
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3 text-white"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-electric/10 text-electric">
                  <item.icon className="w-3.5 h-3.5" />
                </div>
                {item.text}
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-2 mt-6 mb-3 ml-1 text-sm font-medium text-electric">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric"></span>
            </span>
            Only accepting 3 new clients this quarter
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2">
                Book a Call <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/process" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full">
                See How It Works
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Advanced 3D / Node visualization mockup */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative h-[600px] rounded-2xl border border-white/10 bg-panel/30 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(0,194,255,0.05)]"
        >
          {/* Faux Data Lines & Nodes Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.05)_0,transparent_100%)]" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

          {/* Lines */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-electric/30 to-transparent" />
          <div className="absolute inset-x-0 top-1/3 h-[1px] bg-gradient-to-r from-transparent via-orange/20 to-transparent rotate-45 transform origin-center" />
          <div className="absolute inset-x-0 top-1/3 h-[1px] bg-gradient-to-r from-transparent via-electric/20 to-transparent -rotate-45 transform origin-center" />

          {/* Central AI Node */}
          <div 
            onClick={handleNodeClick}
            className={`relative z-10 w-44 h-44 flex items-center justify-center rounded-full border border-electric/40 bg-black/60 backdrop-blur-md shadow-[0_0_80px_rgba(0,194,255,0.3)] transition-all duration-300 ${isPulsing ? 'scale-90 brightness-150' : ''}`}
          >
            <div className={`absolute inset-0 rounded-full border border-orange/40 ${isPulsing ? 'animate-ping' : 'animate-[ping_3s_ease-in-out_infinite]'}`} />
            
            {/* Added details around node */}
            <div className="absolute inset-[-20px] rounded-full border border-dashed border-electric/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-[-40px] rounded-full border-t border-r border-electric/10 animate-[spin_15s_linear_infinite_reverse]" />

            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-electric/90 via-electric/30 to-transparent flex items-center justify-center animate-[spin_4s_linear_infinite]">
              <div className="absolute inset-1 rounded-full bg-[#0a0f14] flex items-center justify-center animate-[spin_4s_linear_infinite_reverse]">
                 <Zap className={`w-10 h-10 text-electric transition-transform ${isPulsing ? 'scale-125' : ''}`} />
              </div>
            </div>
            
            {/* Click Count Energy Rings */}
            {Array.from({ length: clicks }).map((_, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1 + i * 0.15, opacity: 0.8 - i * 0.1 }}
                className="absolute inset-0 rounded-full border border-electric/50 pointer-events-none"
              />
            ))}
          </div>
          
          {/* Floating Data Pulses */}
          <motion.div 
            animate={{ x: [-200, 200], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-white/80 rounded-full shadow-[0_0_15px_#ffffff] -translate-y-1/2 blur-[1px]"
          />
          <motion.div 
            animate={{ y: [-200, 200], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, delay: 1, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-electric rounded-full shadow-[0_0_15px_#00c2ff] -translate-x-1/2 blur-[1px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
