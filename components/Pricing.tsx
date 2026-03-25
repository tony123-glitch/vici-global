"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "./ui/Button";

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-panel/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Engineered for <span className="text-electric">Performance</span>
          </h2>
          <p className="text-muted text-lg">No hidden fees. Just scalable systems that produce ROI.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Tier 1 - Full System (Now on Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-panel to-[#0a0f14] border border-electric/40 rounded-3xl p-8 flex flex-col shadow-[0_0_40px_rgba(0,194,255,0.1)]"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <div className="bg-electric text-black text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-[0_0_15px_rgba(0,194,255,0.5)]">
                Best for Scaling
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Complete Growth Infrastructure</h3>
            <p className="text-muted mb-6">A fully automated closed-loop acquisition system. We generate the leads, the AI closes them.</p>

            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white tracking-tight">$2,500</span>
                <span className="text-lg text-electric font-medium">Setup Build Fee</span>
              </div>
              <div className="mt-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-electric/10 text-electric border border-electric/20">
                  First 90 Days
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white/80">$2,000</span>
                <span className="text-muted">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Everything in AI Setter System",
                "Custom Meta Ads Architecture",
                "High-Converting Landing Pages",
                "Intelligent Lead Qualification Forms",
                "Weekly Optimization Calls",
                "Guaranteed Lead Flow Target",
                "Automated Direct-to-Calendar Scheduling"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-electric" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/book?service=Complete Growth Infrastructure" className="w-full block">
              <Button variant="primary" size="lg" className="w-full shadow-[0_0_20px_rgba(0,194,255,0.4)]">Book a Call</Button>
            </Link>
          </motion.div>

          {/* Tier 2 - AI Setter Only (Now on Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#0a0f14] border border-white/10 rounded-3xl p-8 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-2">AI Setter System</h3>
            <p className="text-muted mb-6">Perfect for businesses with existing lead flow that need instant conversion.</p>

            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white tracking-tight">$1,000</span>
                <span className="text-lg text-white/80 font-medium whitespace-nowrap">Setup Build Fee</span>
              </div>
              <div className="mt-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10">
                  First 90 Days
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white/80">$1,000</span>
                <span className="text-muted">/month</span>
              </div>
            </div>


            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Custom AI Voice & Text Agent",
                "CRM Intgegration (GHL, HubSpot)",
                "Instant <60s Lead Outreach",
                "Automated Direct-to-Calendar Scheduling",
                "Dedicated Support Channel"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white/50" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/book?service=AI Agent Only" className="w-full block">
              <Button variant="outline" size="lg" className="w-full">Book a Call</Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
