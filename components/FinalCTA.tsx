"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight, ChevronRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center bg-[#05050a]">
      
      {/* Intense Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(79,70,229,0.15)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(0,194,255,0.1)_0%,transparent_70%)] rounded-full blur-[80px] pointer-events-none" />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative bg-[#08080c]/80 border border-[#4f46e5]/30 p-12 md:p-20 rounded-3xl backdrop-blur-md shadow-[0_0_50px_rgba(79,70,229,0.15)]"
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent" />

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Ready to completely <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#a855f7]">automate growth?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto font-light">
            Stop losing deals to slow systems and manual labor. Book a demo today and let AI handle your pipeline while you focus on closing. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-16 px-10 rounded-full text-lg font-bold gap-3 bg-white text-black hover:bg-gray-100 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                 Book Your Demo <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 rounded-full text-lg font-medium gap-2 border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                 View Pricing <ChevronRight className="w-5 h-5 text-white/50" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
            <p className="text-xs md:text-sm text-white/50 font-medium uppercase tracking-wider">Only 3 deployment slots remaining this quarter.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
