"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import Link from "next/link";
import { Zap, Smartphone, Search, Layout, CheckCircle2, ChevronRight, BarChart } from "lucide-react";
import { QuoteModal } from "../websites/QuoteModal";

export default function WebDesignPage() {
  const processSteps = [
    {
      title: "Strategy",
      description: "We map your customer journey, identifying points of friction and conversion opportunities to design a flow that maximizes lead capture.",
      icon: Search,
    },
    {
      title: "Design & Build",
      description: "Our engineers build high-fidelity, custom Next.js frontends with immersive animations, ensuring zero templates and ultimate performance.",
      icon: Layout,
    },
    {
      title: "Launch & Scale",
      description: "Once deployed, your high-converting instrument goes live with built-in analytics, SEO structure, and sub-second load times.",
      icon: Zap,
    },
  ];

  const features = [
    {
      title: "High-Converting Layouts",
      desc: "Engineered specifically to guide users toward booking a call or purchasing.",
      icon: Layout,
    },
    {
      title: "SEO Optimization",
      desc: "Semantic HTML, dynamic meta tags, and structured data out of the box.",
      icon: Search,
    },
    {
      title: "95+ Lighthouse Score",
      desc: "Instant loading speeds that keep bounce rates low and conversions high.",
      icon: Zap,
    },
    {
      title: "Mobile-First Design",
      desc: "Flawless rendering and interaction on every device, every time.",
      icon: Smartphone,
    },
    {
      title: "Modern UI/UX",
      desc: "Cinematic, dark-mode styling with GSAP/Framer Motion-level animations.",
      icon: CheckCircle2,
    },
    {
      title: "Data-Driven Success",
      desc: "Integrated analytics mapping every click, scroll, and user flow.",
      icon: BarChart,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-electric/30 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden flex items-center justify-center min-h-[90svh]">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(ellipse,rgba(0,194,255,0.08)_0%,transparent_70%)] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00c2ff] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#8b9bb4] font-medium">Premium Web Infrastructure</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight mb-8 leading-[1.05]">
              Stop using templates. <br className="hidden md:block" />
              Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] via-[#4f46e5] to-[#a855f7]">Growth Engine.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#8b9bb4] mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We design and construct blazing-fast, custom websites optimized purely for conversion, speed, and absolute professionalism.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <div className="w-full sm:w-auto">
                <QuoteModal triggerText="Request a Free Quote" />
              </div>
              <Link href="#process" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto py-[1.125rem] px-8 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                  See the Process <ChevronRight className="w-4 h-4 text-white/50" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 relative bg-[#05050a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#4f46e5]">Results.</span></h2>
            <p className="text-[#8b9bb4] text-lg max-w-2xl mx-auto font-light">Custom digital infrastructure built to outperform competitors in speed, trust, and lead generation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#08080c] border border-white/10 hover:border-[#4f46e5]/50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_40px_rgba(79,70,229,0.15)]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4f46e5]/5 blur-[40px] pointer-events-none group-hover:bg-[#4f46e5]/20 transition-colors duration-500" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00c2ff]/10 to-[#4f46e5]/10 border border-[#00c2ff]/20 flex items-center justify-center mb-6 text-[#00c2ff] group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed text-sm font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 relative bg-[#030303]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-[radial-gradient(ellipse,rgba(168,85,247,0.06)_0%,transparent_60%)] pointer-events-none blur-[100px]" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#4f46e5]">Speed & Scale</span></h2>
            <p className="text-[#8b9bb4] text-xl font-light">A seamless 3-step process ensuring rapid deployment without sacrificing quality.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-12 top-10 bottom-10 w-0.5 bg-gradient-to-b from-white/10 via-[#4f46e5]/50 to-white/10" />

            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative flex flex-col md:flex-row gap-8 items-start md:items-center"
                >
                  <div className="flex items-center gap-6 z-10">
                    <div className="w-24 h-24 rounded-full bg-[#0a0a14] border border-[#4f46e5]/30 shadow-[0_0_30px_rgba(79,70,229,0.2)] flex flex-col items-center justify-center shrink-0">
                      <span className="text-[#00c2ff] font-black text-xl mb-1">0{i + 1}</span>
                      <step.icon className="w-5 h-5 text-white/50" />
                    </div>
                  </div>
                  <div className="bg-[#08080c]/80 border border-white/5 hover:border-white/10 p-8 rounded-3xl backdrop-blur-sm flex-1 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[#8b9bb4] leading-relaxed font-light">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results / Outcomes */}
      <section className="py-24 relative bg-gradient-to-b from-[#05050a] to-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#4f46e5] mb-4">3x</div>
              <h4 className="text-xl font-bold text-white mb-2">More Leads</h4>
              <p className="text-muted text-sm font-light">Our conversion-optimized layouts drastically increase the chance of contact.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 border-x border-white/5">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#4f46e5] mb-4">Top 1%</div>
              <h4 className="text-xl font-bold text-white mb-2">Brand Perception</h4>
              <p className="text-muted text-sm font-light">Cinematic hero sections and dynamic flows establish immediate authority.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8">
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#00ffcc] mb-4">99+</div>
              <h4 className="text-xl font-bold text-white mb-2">Lighthouse Score</h4>
              <p className="text-muted text-sm font-light">Near-instant loading speeds that improve SEO and retain active visitors.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <FinalCTA />
      </section>
      <Footer />
    </div>
  );
}
