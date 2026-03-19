"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles, X, Gift, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function SecretDiscountPage() {
  const [showPopup, setShowPopup] = useState(true);

  // Auto-hide popup after 5 seconds if not closed
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-electric/30">
      <Navbar />

      <main className="relative pt-32 pb-24 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/20 text-sm font-medium text-orange w-fit mb-6">
              <Gift className="w-4 h-4" />
              Secret VIP Tier Unlocked
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              You Found the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-electric text-glow">Hidden System</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Curiosity pays off. Because you discovered our secret initialization sequence, you're eligible for our exclusive VIP pricing tier.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl border border-white/10 bg-panel/50 backdrop-blur-xl overflow-hidden p-8 md:p-12 shadow-[0_0_80px_rgba(0,194,255,0.1)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,255,0.1)_0,transparent_100%)]" />

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {/* Option 1: Complete Growth Pipeline */}
              <div className="bg-black/40 rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden flex flex-col transition-all hover:bg-black/60 shadow-[0_0_30px_rgba(0,194,255,0.05)]">
                <div className="absolute top-0 right-0">
                  <div className="bg-electric text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-[0_0_15px_rgba(0,194,255,0.5)]">
                    VIP Complete Growth
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Complete Pipeline</h3>
                <p className="text-muted text-sm mb-6">Full-suite AI pipeline with 24/7 lead generation & nurturing.</p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-center gap-3 opacity-50 relative line-through decoration-red-500 decoration-2 text-sm">
                    <span>$2,500 Setup Fee</span>
                  </div>
                  <div className="flex items-end gap-2 text-electric">
                    <span className="text-5xl font-black text-white">$2,000</span>
                    <span className="text-base font-medium pb-1.5">Setup</span>
                  </div>
                  <div className="inline-block mt-2 px-4 py-1.5 bg-white/5 rounded-md text-white/90 text-sm font-semibold border border-white/10">
                    $1,500/mo Hosting (First 3 Months)
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {["Everything in AI Agent", "Custom Meta Ads Architecture", "High-Converting Landers", "Guaranteed Lead Flow"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80"><Check className="w-4 h-4 text-electric" /> {feat}</li>
                  ))}
                </ul>

                <Link href="/book"><Button className="w-full shadow-[0_0_20px_rgba(0,194,255,0.3)]">Claim VIP Rate <Sparkles className="w-4 h-4 ml-2" /></Button></Link>
              </div>

              {/* Option 2: AI Agent Only */}
              <div className="bg-black/40 rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden flex flex-col transition-all hover:bg-black/60">
                <h3 className="text-2xl font-bold text-white mb-2">AI Agent Only</h3>
                <p className="text-muted text-sm mb-6">Perfect for businesses with existing lead flow needing instant conversion.</p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-center gap-3 opacity-50 relative line-through decoration-red-500 decoration-2 text-sm">
                    <span>$1,000 Setup Fee</span>
                  </div>
                  <div className="flex items-end gap-2 text-electric">
                    <span className="text-5xl font-black text-white">$750</span>
                    <span className="text-base font-medium pb-1.5">Setup</span>
                  </div>
                  <div className="inline-block mt-2 px-4 py-1.5 bg-white/5 rounded-md text-white/90 text-sm font-semibold border border-white/10">
                    $750/mo Hosting (First 3 Months)
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {["Custom AI Voice & Text Agent", "CRM Integration", "Instant <60s Lead Outreach", "Dedicated Support Channel"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80"><Check className="w-4 h-4 text-electric opacity-50" /> {feat}</li>
                  ))}
                </ul>

                <Link href="/book"><Button variant="outline" className="w-full">Select Plan</Button></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Fun Secret Welcome Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-[200] max-w-sm"
          >
            <div className="relative bg-panel border border-electric/50 rounded-2xl p-6 shadow-[0_0_40px_rgba(0,194,255,0.2)] overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-electric/20 blur-[30px] rounded-full" />
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-orange flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">System Override Successful</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    You've bypassed the standard firewall! Enjoy your exclusive founders pricing tier. Let's build something great.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
