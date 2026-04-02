"use client";

import { motion } from "framer-motion";
import { Search, Cpu, Calendar, PhoneIncoming, Layers, Zap } from "lucide-react";

const products = [
  {
    title: "AI Lead Generation",
    description: "Launch highly targeted Meta & LinkedIn campaigns powered by predictive AI. Higher intent, lower CPL.",
    icon: Search
  },
  {
    title: "Qualification Engine",
    description: "Conversational intake forms that instantly weed out time-wasters. Keep your pipeline incredibly clean.",
    icon: Cpu
  },
  {
    title: "Appointment Setting",
    description: "Multi-channel SMS and Email outreach within 60 seconds of opt-in. Overcomes objections in natural language.",
    icon: Calendar
  },
  {
    title: "24/7 Voice Agents",
    description: "Custom-trained voice AI that answers calls, qualifies criteria, and books calendars—sounding perfectly human.",
    icon: PhoneIncoming
  },
  {
    title: "CRM Sync & Routing",
    description: "Zero manual data entry. Everything routes perfectly into GoHighLevel, HubSpot, or Salesforce.",
    icon: Layers
  },
  {
    title: "Performance Analytics",
    description: "Real-time visibility into your entire acquisition funnel. See exactly which AI interactions drive revenue.",
    icon: Zap
  }
];

export function ProductStack() {
  return (
    <section id="services" className="py-32 relative bg-[#030303] overflow-hidden">
      {/* Background Ambient Network Glow */}
      <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,194,255,0.05)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(168,85,247,0.05)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            A Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#4f46e5]">Automation Engine</span>
          </motion.h2>
          <p className="text-[#8b9bb4] text-xl max-w-2xl mx-auto font-light">
            We don't just supply software. We build and integrate custom infrastructure that handles the entire frontend of your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#08080c] border border-white/5 rounded-3xl p-8 transition-all duration-300"
            >
              {/* Hover glows */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              <div className="absolute inset-0 border border-[#00c2ff]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none shadow-[0_0_20px_rgba(0,194,255,0.1)]" />
              
              <div className="w-14 h-14 rounded-2xl bg-[#0a0a10] border border-white/5 flex items-center justify-center mb-8 group-hover:bg-[#4f46e5]/20 group-hover:border-[#00c2ff]/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <p.icon className="w-7 h-7 text-white/70 group-hover:text-[#00c2ff] transition-colors duration-500" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors uppercase tracking-wide text-sm">{p.title}</h3>
              <p className="text-muted leading-relaxed font-light">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
