"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, TrendingDown, TrendingUp, AlertTriangle, ShieldCheck } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    { title: "Lost Revenue", desc: "Missed calls and slow follow-ups burn leads immediately.", icon: TrendingDown },
    { title: "Manual Bottlenecks", desc: "Sales teams waste hours on unqualified prospects.", icon: AlertTriangle },
    { title: "Friction", desc: "Leads go cold waiting for responses or complicated setups.", icon: XCircle }
  ];

  const solutions = [
    { title: "Instant AI Response", desc: "Engages and answers prospects 24/7 without fail.", icon: ShieldCheck },
    { title: "Automated Qualification", desc: "Pre-vets leads so your team only talks to buyers.", icon: TrendingUp },
    { title: "Frictionless Booking", desc: "Books appointments directly into your calendar.", icon: CheckCircle2 }
  ];

  return (
    <section className="py-32 relative bg-[#030303]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-[radial-gradient(ellipse,rgba(79,70,229,0.06)_0%,transparent_60%)] pointer-events-none blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Stop losing deals to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">friction.</span> <br className="hidden md:block" />
            Start scaling with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#a855f7]">AI automation.</span>
          </motion.h2>
          <p className="text-[#8b9bb4] text-xl max-w-3xl mx-auto font-light">
            Traditional acquisition models are broken. We replace chaotic human bottlenecks with unified, highly intelligent systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch relative">
          {/* Vs badge */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#030303] border border-[#3b82f6]/30 rounded-full items-center justify-center z-20 shadow-[0_0_30px_rgba(79,70,229,0.2)]">
            <span className="font-black text-xl italic text-transparent bg-clip-text bg-gradient-to-b from-[#00c2ff] to-[#4f46e5]">VS</span>
          </div>

          {/* Problem Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#08080c] border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-6">The Old Way</h3>
            
            <div className="space-y-8 relative z-10">
              {problems.map((prob, i) => (
                <div key={i} className="flex gap-5 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <prob.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white/90 mb-1">{prob.title}</h4>
                    <p className="text-muted leading-relaxed text-sm md:text-base">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-[#0a0a14] to-[#05050a] border border-[#4f46e5]/30 rounded-3xl p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.1)] flex flex-col justify-center"
          >
            {/* Inner Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00c2ff]/10 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#a855f7]/10 blur-[80px] pointer-events-none" />

            {/* Glowing Top Edge */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent opacity-50" />

            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-8 border-b border-white/10 pb-6">The Vici Way</h3>
            
            <div className="space-y-8 relative z-10">
              {solutions.map((sol, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#00c2ff]/20 to-[#4f46e5]/20 border border-[#00c2ff]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(79,70,229,0.2)]">
                    <sol.icon className="w-5 h-5 text-[#00c2ff]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00c2ff] transition-colors">{sol.title}</h4>
                    <p className="text-muted leading-relaxed text-sm md:text-base">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
