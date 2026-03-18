"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight, Zap, Phone, BarChart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10 w-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel border border-white/5 text-xs font-medium text-electric w-fit mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            Only accepting 3 new clients this quarter
          </div>

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

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2">
                Book a Call <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              See How It Works
            </Button>
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
          <div className="relative z-10 w-40 h-40 flex items-center justify-center rounded-full border border-electric/40 bg-black/60 backdrop-blur-md shadow-[0_0_80px_rgba(0,194,255,0.3)]">
            <div className="absolute inset-0 rounded-full border border-orange/20 animate-[ping_3s_ease-in-out_infinite]" />
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-electric/80 via-electric/20 to-transparent flex items-center justify-center animate-[spin_4s_linear_infinite]">
              <div className="absolute inset-1 rounded-full bg-[#0a0f14] flex items-center justify-center animate-[spin_4s_linear_infinite_reverse]">
                 <Zap className="w-8 h-8 text-electric" />
              </div>
            </div>
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
