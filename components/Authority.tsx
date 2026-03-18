"use client";

import { motion } from "framer-motion";

export function Authority() {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
          "Engineered systems, <span className="text-muted">not marketing fluff.</span>"
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
          {[
            { metric: "60s", label: "Average Response Time" },
            { metric: "99.9%", label: "Uptime & Reliability" },
            { metric: "40%", label: "Increase in Show Rates" },
            { metric: "24/7", label: "Pipeline Availability" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2">{stat.metric}</div>
              <div className="text-sm text-muted font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-muted text-sm uppercase tracking-widest">
          Built for performance-driven businesses
        </p>

      </div>
    </section>
  );
}
