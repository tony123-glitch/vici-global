"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Image as ImageIcon, FormInput, PhoneCall, CalendarCheck } from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      icon: ImageIcon,
      title: "1. Asset Ingestion & Ad Creation",
      desc: "You hand over your raw assets (images, videos, logos, past creatives). Our team processes them to engineer highly-converting, direct-response advertisements and deploys them to Meta Ads to start driving traffic immediately."
    },
    {
      icon: FormInput,
      title: "2. Lead Capture & Qualification",
      desc: "As prospects interact with the ads, they are funnelled into highly optimized lead capture forms. These forms automatically filter out unqualified traffic so your pipeline only receives verified, high-intent prospects."
    },
    {
      icon: PhoneCall,
      title: "3. Instant AI Outreach (<60s)",
      desc: "The moment a verified lead submits the form, our custom AI Voice & Text agent initiates contact in less than 60 seconds. It answers questions, handles objections, and pitches your offer while the lead's intent is at its absolute peak."
    },
    {
      icon: CalendarCheck,
      title: "4. Automated Booking & Handoff",
      desc: "If the lead is ready to move forward, the AI instantly schedules an appointment or call directly onto your calendar. All captured lead sentiment, details, and call summaries are automatically pushed into your CRM."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-electric/30">
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Background glow lines */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              How The <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange">System</span> Works
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              A frictionless, end-to-end automated pipeline turning ad engagements into booked appointments on your calendar without lifting a finger.
            </p>
          </motion.div>

          {/* Timeline Process */}
          <div className="relative border-l border-white/10 ml-6 md:ml-10 space-y-16 pb-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10 md:pl-16"
              >
                {/* Node */}
                <div className="absolute top-1 left-0 -translate-x-[22px] w-12 h-12 bg-[#0a0f14] border border-electric/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,194,255,0.2)]">
                  <step.icon className="w-5 h-5 text-electric" />
                </div>

                {/* Content */}
                <div className="bg-panel border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-panel/80 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-muted leading-relaxed text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to install this in your business?</h2>
            <Link href="/book">
              <Button size="lg" variant="primary" className="shadow-[0_0_30px_rgba(0,194,255,0.3)] min-w-[200px]">
                Book Setup Call
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
