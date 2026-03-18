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

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Pain Points */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 lg:p-12"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">The Old Way</h3>
            <p className="text-muted">Relying on human effort and fractured tools.</p>
          </div>
          
          <ul className="space-y-6">
            {problems.map((prob, i) => (
              <li key={i} className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-white/80">{prob}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AI Solution */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-electric/5 border border-electric/30 rounded-3xl p-8 lg:p-12 overflow-hidden"
        >
           {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric/20 blur-[100px] pointer-events-none" />

          <div className="mb-8 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">The Vici Way</h3>
            <p className="text-electric">A unified AI growth infrastructure.</p>
          </div>
          
          <ul className="space-y-6 relative z-10">
            {solutions.map((sol, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-electric mt-1 flex-shrink-0" />
                <span className="text-lg text-white">{sol}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
