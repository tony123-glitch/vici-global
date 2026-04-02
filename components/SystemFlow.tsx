"use client";

import { motion } from "framer-motion";
import { Target, Cpu, PhoneCall, CalendarCheck } from "lucide-react";

const flowSteps = [
  { icon: Target, title: "Target & Capture", desc: "Data-driven campaigns capture high-intent prospects across Meta & LinkedIn." },
  { icon: Cpu, title: "AI Qualification", desc: "Our system interacts dynamically to filter out the noise and qualify the best leads." },
  { icon: PhoneCall, title: "Instant Engagement", desc: "AI Voice & text engines engage qualified leads within 60 seconds of interaction." },
  { icon: CalendarCheck, title: "Booked & Synced", desc: "Appointments drop into your calendar. Data syncs to your CRM. You close the deal." }
];

export function SystemFlow() {
  return (
    <section id="system" className="py-32 relative bg-[#05050a] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#4f46e5]">Works</span>
          </motion.h2>
          <p className="text-[#8b9bb4] text-lg max-w-2xl mx-auto font-light">
            A frictionless pipeline designed for speed. Watch how a cold prospect becomes a booked appointment with zero manual effort.
          </p>
        </div>

        <div className="relative mt-24">
          {/* Main Connecting Track */}
          <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-white/5 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                
                {/* Active Neon Line */}
                {index !== flowSteps.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.4 + 0.3 }}
                    className="absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#00c2ff] to-[#4f46e5] origin-left hidden md:block z-0 shadow-[0_0_15px_rgba(0,194,255,0.5)]"
                  />
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative z-10 w-20 h-20 rounded-2xl bg-[#0a0f14] border border-[#4f46e5]/30 flex items-center justify-center mb-6 group-hover:border-[#00c2ff] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,194,255,0.3)] group-hover:-translate-y-2"
                >
                   {/* Step Number Badge */}
                   <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#00c2ff] to-[#4f46e5] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(0,194,255,0.4)]">
                     {index + 1}
                   </div>
                   <step.icon className="w-8 h-8 text-white group-hover:text-[#00c2ff] transition-colors duration-500" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00c2ff] transition-colors">{step.title}</h3>
                  <p className="text-sm text-muted font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
