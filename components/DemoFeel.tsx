"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function DemoFeel() {
  return (
    <section id="demo" className="py-32 relative overflow-hidden bg-[#030303] border-t border-white/5">
      <div className="absolute top-1/2 right-0 w-[50%] h-[50%] bg-[radial-gradient(ellipse,rgba(79,70,229,0.08)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00c2ff]/10 border border-[#00c2ff]/20 text-[#00c2ff] text-sm font-bold w-fit mb-2 shadow-[0_0_15px_rgba(0,194,255,0.15)]">
            <Sparkles className="w-4 h-4" /> Live Simulation
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white tracking-tight">
            Experience the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#4f46e5]">Speed of AI</span>
          </h2>
          <p className="text-xl text-[#8b9bb4] leading-relaxed font-light">
            While your competitors wait until Monday morning to reply, our AI engages your prospects in seconds—overcoming objections and locking in appointments while intent is highest.
          </p>
        </motion.div>

        {/* Right: Timeline UI Chat Bubble Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#08080c] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-[0_0_50px_rgba(79,70,229,0.1)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00c2ff] to-[#4f46e5] p-[2px] shadow-[0_0_15px_rgba(0,194,255,0.3)]">
                 <div className="w-full h-full bg-[#030303] rounded-full flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#4f46e5] font-black tracking-widest text-xs">AI</span>
                 </div>
              </div>
              <div>
                <h4 className="font-bold text-white tracking-wide">Vici Automation</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#00c2ff] animate-pulse" />
                  <p className="text-xs text-[#00c2ff] font-medium uppercase tracking-wider">Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Timeline */}
          <div className="flex flex-col gap-5 pt-2">
             {/* Incoming trigger */}
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="self-center bg-white/5 px-4 py-2 rounded-full text-xs text-white/50 border border-white/5 font-mono"
             >
               Lead Request Received • 2:43:02 PM
             </motion.div>

             {/* AI text */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 1.5 }}
               className="self-start max-w-[85%] relative"
             >
               <div className="bg-[#4f46e5]/10 border border-[#4f46e5]/30 rounded-2xl p-4 shadow-[0_0_15px_rgba(79,70,229,0.1)]">
                 <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">Hi David! Saw you just requested info. We specialize in scaling B2B agencies. Are you available for a quick 10-min intro call tomorrow?</p>
               </div>
             </motion.div>

             {/* User replies */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 3 }}
               className="self-end max-w-[85%] bg-white/5 border border-white/10 rounded-2xl p-4"
             >
               <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">I'm busy tomorrow, maybe Thursday? Also, how much is this?</p>
             </motion.div>

             {/* AI handles */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 4.5 }}
               className="self-start max-w-[85%] relative"
             >
               <div className="bg-[#4f46e5]/10 border border-[#4f46e5]/30 rounded-2xl p-4 shadow-[0_0_15px_rgba(79,70,229,0.1)]">
                 <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">Thursday works perfectly! Pricing scales with volume, usually $1k-$2k/mo. Does 2:00 PM EST Thursday work to discuss details?</p>
               </div>
             </motion.div>
             
             {/* Action taken */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 5.5 }}
               className="self-center bg-gradient-to-r from-[#00c2ff]/10 to-[#4f46e5]/10 border border-[#00c2ff]/30 px-6 py-3 rounded-full text-xs text-[#00c2ff] font-bold mt-4 shadow-[0_0_20px_rgba(0,194,255,0.2)]"
             >
               ✅ Appointment Booked: Thursday 2:00 PM EST
             </motion.div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
