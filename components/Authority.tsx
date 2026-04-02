"use client";

import { motion } from "framer-motion";

export function Authority() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-16">
          Engineered systems. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400">Not marketing fluff.</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { metric: "<60s", label: "Lead Response Time" },
            { metric: "99.9%", label: "Uptime & Reliability" },
            { metric: "+40%", label: "Show Rate Increase" },
            { metric: "24/7", label: "Pipeline Availability" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center justify-center p-6 relative"
            >
              <div className="absolute inset-0 border-r border-white/5 last:border-r-0 md:block hidden pointer-events-none" />
              
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#00c2ff] to-[#4f46e5] mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,194,255,0.3)]">
                {stat.metric}
              </div>
              <div className="text-xs md:text-sm text-muted font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
