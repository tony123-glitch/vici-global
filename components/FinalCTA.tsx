"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center border-t border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Stop Losing Deals to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-red-500">Slow Systems.</span>
          </h2>
          
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Let AI handle your pipeline while you focus on closing. Secure your spot before we reach capacity.
          </p>
          
          <Link href="/book" className="inline-block">
            <Button size="lg" className="h-16 px-10 text-lg gap-3 shadow-[0_0_30px_rgba(0,194,255,0.4)]">
               Book Your Call <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>

          <p className="mt-6 text-sm text-white/40">Only 3 slots remaining for full system builds this quarter.</p>
        </motion.div>
      </div>
    </section>
  );
}
