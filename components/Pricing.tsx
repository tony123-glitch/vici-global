"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-[#05050a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#4f46e5]">Performance</span>
          </h2>
          <p className="text-[#8b9bb4] text-xl font-light">No hidden fees. Just scalable systems that produce ROI.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Tier 1 - Full System (Best for Scaling) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#08080c] to-[#030303] border border-[#4f46e5]/50 rounded-3xl p-10 flex flex-col shadow-[0_0_50px_rgba(79,70,229,0.15)]"
          >
            {/* Inner Glow Map */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4f46e5]/20 blur-[50px] pointer-events-none rounded-full" />

            <div className="absolute -top-4 right-8">
              <div className="bg-gradient-to-r from-[#00c2ff] to-[#4f46e5] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-[0_0_20px_rgba(0,194,255,0.4)]">
                Complete Growth
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Growth Infrastructure</h3>
            <p className="text-muted mb-8 font-light">A fully automated closed-loop acquisition system. We generate the leads, the AI closes them.</p>

            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white tracking-tight">$2,500</span>
                <span className="text-lg text-[#00c2ff] font-bold">Build Fee</span>
              </div>
              <div className="mt-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#4f46e5]/10 text-[#4f46e5] border border-[#4f46e5]/30">
                  First 90 Days
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white/50">$2,000</span>
                <span className="text-white/30 font-medium">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Everything in AI Agent System",
                "Custom Meta Ads Architecture",
                "High-Converting Landing Pages",
                "Intelligent Lead Qualification Forms",
                "Weekly Optimization Calls",
                "Guaranteed Lead Flow Target",
                "Direct-to-Calendar Scheduling"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00c2ff]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#00c2ff]" />
                  </div>
                  <span className="text-white/90 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/book?service=Complete Growth Infrastructure" className="w-full block">
              <button className="w-full py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-95">
                Apply for Growth
              </button>
            </Link>
          </motion.div>

          {/* Tier 2 - AI Setter Only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#08080c] border border-white/10 rounded-3xl p-10 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-2">AI Agent System</h3>
            <p className="text-muted mb-8 font-light">Perfect for businesses with existing lead flow that need instant conversion rate optimization.</p>

            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white tracking-tight">$1,000</span>
                <span className="text-lg text-white/50 font-bold">Build Fee</span>
              </div>
              <div className="mt-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-white/40 border border-white/10">
                  First 90 Days
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white/50">$1,000</span>
                <span className="text-white/30 font-medium">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Custom AI Voice & Text Agent",
                "CRM Integration (GHL, HubSpot)",
                "Instant <60s Lead Outreach",
                "Automated Calendar Scheduling",
                "Dedicated Support Channel"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white/50" />
                  </div>
                  <span className="text-white/70 font-light">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/book?service=AI Agent Only" className="w-full block">
              <button className="w-full py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all backdrop-blur-sm active:scale-95">
                Book AI Implementation
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
