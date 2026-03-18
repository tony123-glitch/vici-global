"use client";

import { motion } from "framer-motion";
import { Search, Cpu, Calendar, PhoneIncoming, Layers } from "lucide-react";

const products = [
  {
    title: "AI Lead Gen Engine",
    description: "Multi-channel Meta campaigns driven by predictive AI models. Lowers CPL while raising intent.",
    icon: Search
  },
  {
    title: "Smart Qualification",
    description: "Dynamic conversational forms that weed out unqualified prospects before they enter your CRM.",
    icon: Cpu
  },
  {
    title: "AI Appointment Setter",
    description: "Engages leads over SMS/Email within 60 seconds, using natural language to overcome objections.",
    icon: Calendar
  },
  {
    title: "24/7 Voice AI",
    description: "An AI voice agent that answers inbound calls, qualifies the caller, and books them on your calendar.",
    icon: PhoneIncoming
  },
  {
    title: "CRM Automation",
    description: "Seamless bi-directional sync with GoHighLevel, HubSpot, or Salesforce. No manual data entry.",
    icon: Layers
  }
];

export function ProductStack() {
  return (
    <section id="features" className="py-32 relative bg-panel/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Complete <span className="text-electric">Product Stack</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Everything you need to automate your frontend acquisition, built into one cohesive infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap justify-center">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#0a0f14] border border-white/10 rounded-2xl p-8 hover:border-electric/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-panel border border-white/5 flex items-center justify-center mb-6 group-hover:bg-electric/10 group-hover:border-electric/30 transition-colors">
                <p.icon className="w-6 h-6 text-white group-hover:text-electric transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
