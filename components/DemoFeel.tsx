"use client";

import { motion } from "framer-motion";

export function DemoFeel() {
  return (
    <section id="demo" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-orange/10 border border-orange/20 text-orange text-sm font-medium w-fit mb-2">
            Live Simulation
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Experience the <span className="text-electric">Speed of AI</span>
          </h2>
          <p className="text-xl text-muted leading-relaxed">
            While your competitors wait until Monday morning to reply, our AI engages your prospects in seconds, overcoming objections and locking in appointments while intent is highest.
          </p>
        </motion.div>

        {/* Right: Timeline UI Chat Bubble Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-panel border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-[0_0_40px_rgba(0,194,255,0.05)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center">
                <span className="text-electric font-bold">Vici</span>
              </div>
              <div>
                <h4 className="font-bold text-white">AI Setter</h4>
                <p className="text-xs text-electric">Online</p>
              </div>
            </div>
            <span className="text-xs font-mono text-muted">Active Session</span>
          </div>

          {/* Chat Timeline */}
          <div className="flex flex-col gap-4">
             {/* Bubble 1: Incoming trigger */}
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="self-center bg-black/40 px-4 py-2 rounded-full text-xs text-muted border border-white/5"
             >
               Lead Submitted Form: "Looking for scaling solutions" - 2:43 PM
             </motion.div>

             {/* Bubble 2: AI texts */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 1.5 }}
               className="self-start max-w-[80%] bg-electric/10 border border-electric/20 rounded-2xl rounded-tl-none p-4"
             >
               <p className="text-sm text-white">Hi John! Saw you just requested info. We specialize in scaling agencies. Are you available for a quick 10-min intro call tomorrow?</p>
             </motion.div>

             {/* Bubble 3: User replies */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 3 }}
               className="self-end max-w-[80%] bg-panel border border-white/10 rounded-2xl rounded-tr-none p-4"
             >
               <p className="text-sm text-white/80">I'm busy tomorrow, maybe Thursday? Also, how much is this?</p>
             </motion.div>

             {/* Bubble 4: AI handles objection */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 4.5 }}
               className="self-start max-w-[80%] bg-electric/10 border border-electric/20 rounded-2xl rounded-tl-none p-4"
             >
               <p className="text-sm text-white">Thursday works! Pricing depends on your current volume (usually $1k-$2k/mo). Does 2:00 PM EST Thursday work to discuss details?</p>
             </motion.div>
             
             {/* Bubble 5: Action taken */}
             <motion.div 
               initial={{ opacity: 0, y: 10, scale: 0.9 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 5.5 }}
               className="self-center bg-orange/10 border border-orange/20 px-4 py-2 rounded-full text-xs text-orange font-medium mt-2"
             >
               Appointment Booked: Thursday 2:00 PM EST
             </motion.div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
