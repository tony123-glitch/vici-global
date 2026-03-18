"use client";

import { motion } from "framer-motion";
import { Target, MessageSquare, PhoneCall, CalendarCheck, Database } from "lucide-react";

const flowSteps = [
  { icon: Target, title: "1. Ads", desc: "AI-targeted Meta campaigns capture high-intent traffic." },
  { icon: MessageSquare, title: "2. Form", desc: "Intelligent conversational forms pre-qualify leads instantly." },
  { icon: PhoneCall, title: "3. AI Call", desc: "AI setter dials the lead within 60 seconds of submission." },
  { icon: CalendarCheck, title: "4. Booked", desc: "Appointment is scheduled directly on your calendar." },
  { icon: Database, title: "5. CRM Sync", desc: "All data, transcripts, and status are pushed to your CRM." }
];

export function SystemFlow() {
  return (
    <section id="system" className="py-32 relative bg-panel/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Intelligent <span className="text-electric">System Flow</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Watch a real-time visualization of how a cold prospect becomes a booked appointment. Zero manual effort required.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line background */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-white/5 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {flowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connecting Line active (simulated with CSS/motion but simplified here) */}
                {index !== flowSteps.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-electric to-orange origin-left hidden md:block z-0"
                  />
                )}

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#0a0f14] border border-white/10 flex items-center justify-center mb-6 group-hover:border-electric transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(0,194,255,0.2)]">
                   <step.icon className="w-8 h-8 text-electric" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
