"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "Missed calls = lost revenue",
    "Slow follow-up kills deals",
    "Leads go cold instantly",
    "Manual systems don't scale"
  ];

  const solutions = [
    "AI responds instantly, every time",
    "Qualifies leads automatically",
    "Books appointments for you",
    "Runs 24/7 without fail or fatigue"
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Replace <span className="text-red-500">Chaos</span> with <span className="text-electric">Control</span>
        </h2>
      </div>

      <div className="max-w-[90rem] mx-auto px-8 grid md:grid-cols-2 gap-16 lg:gap-32 xl:gap-40 relative">
        
        {/* VS Badge (Street Fighter Style) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
          <div className="relative transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
            {/* Massive intense glow */}
            <div className="absolute inset-0 bg-electric blur-[50px] opacity-40 rounded-full" />
            <div className="absolute inset-0 bg-blue-500 blur-[30px] opacity-40 rounded-full mix-blend-screen" />
            
            {/* Outer border gradient wrapper */}
            <div className="relative bg-gradient-to-br from-cyan-300 via-electric to-blue-600 p-1 rounded-2xl shadow-[0_0_40px_rgba(0,194,255,0.4)]">
              {/* Inner dark base */}
              <div className="bg-[#05080a] px-5 py-2 rounded-xl flex items-center justify-center relative overflow-hidden border border-electric/20">
                
                {/* Internal glow top-down */}
                <div className="absolute inset-0 bg-gradient-to-b from-electric/20 to-transparent pointer-events-none" />

                {/* Typography styling */}
                <span 
                  className="relative z-10 text-5xl md:text-6xl font-black italic tracking-tighter pr-4 pb-1 text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-electric drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  style={{
                    WebkitTextStroke: "1px rgba(0,194,255,0.5)"
                  }}
                >
                  VS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Points */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-panel/30 border border-white/5 rounded-3xl p-8 lg:p-12 overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[100px] pointer-events-none" />
          
          <div className="mb-10 relative z-10">
            <h3 className="text-3xl font-bold text-white mb-3">The Old Way</h3>
            <p className="text-muted text-lg">Relying on human effort and fractured tools.</p>
          </div>
          
          <ul className="space-y-6 relative z-10">
            {problems.map((prob, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 bg-red-500/10 p-1.5 rounded-full">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-lg text-white/70 leading-relaxed max-w-sm">{prob}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AI Solution */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-electric/10 to-transparent border border-electric/30 rounded-3xl p-8 lg:p-12 overflow-hidden backdrop-blur-sm shadow-[0_0_40px_rgba(0,194,255,0.1)] hover:border-electric/50 transition-colors duration-500"
        >
           {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

          <div className="mb-10 relative z-10">
            <h3 className="text-3xl font-bold text-white mb-3">The Vici Way</h3>
            <p className="text-electric text-lg font-medium">A unified AI growth infrastructure.</p>
          </div>
          
          <ul className="space-y-6 relative z-10">
            {solutions.map((sol, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 bg-electric/10 p-1.5 rounded-full shadow-[0_0_15px_rgba(0,194,255,0.3)]">
                  <CheckCircle2 className="w-5 h-5 text-electric" />
                </div>
                <span className="text-lg text-white leading-relaxed font-medium max-w-sm">{sol}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
