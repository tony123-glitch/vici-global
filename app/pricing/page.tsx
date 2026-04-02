"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";
import { Check, X, Zap, MessageSquare, Target, Settings } from "lucide-react";
import { QuoteModal } from "../websites/QuoteModal";
import Link from "next/link";

const websiteTiers = [
    {
        name: "Essential",
        price: "$500+",
        description: "Perfect for local businesses needing a professional web presence.",
        features: [
            "Clean Custom Design",
            "Mobile Responsive",
            "Contact Form Setup",
            "Basic SEO Foundation",
            "1 Revision Round",
        ],
        missingFeatures: [
            "Advanced Animations",
            "Lead-Focused Layouts",
            "Speed Optimization",
        ],
        isPopular: false,
    },
    {
        name: "Performance",
        price: "$1,200+",
        description: "High-conversion design built for scaling brands and agencies.",
        features: [
            "High-Conversion Architecture",
            "Advanced UI/UX with Animations",
            "Sub-second Speed Optimized",
            "Lead-focused Layouts & Funnels",
            "CMS Integration",
        ],
        missingFeatures: ["Fully Custom Backend Logic"],
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "$2,500+",
        description: "Limitless custom builds for e-commerce or large-scale web apps.",
        features: [
            "Fully Custom React / Next.js Build",
            "Scalable Systems Architecture",
            "E-commerce & Payments Setup",
            "Immersive GSAP/Framer Animations",
            "Dedicated Support Channel",
        ],
        missingFeatures: [],
        isPopular: false,
    },
];

const aiServices = [
    {
        title: "AI Receptionist",
        desc: "A custom trained AI voice and text agent that answers calls, responds 24/7, and books appointments autonomously.",
        icon: MessageSquare,
    },
    {
        title: "Lead Capture Systems",
        desc: "Instant pre-qualification flows that filter out bad leads and instantly hot-transfer qualified buyers.",
        icon: Target,
    },
    {
        title: "Marketing Automation",
        desc: "Seamless integration across Meta/Google Ads, automated CRM routing, and complex SMS follow-up sequences.",
        icon: Zap,
    },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-electric/30 font-sans">
            <Navbar />

            <main className="pt-32 pb-24 relative overflow-hidden flex flex-col">
                {/* Background glow lines */}
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,194,255,0.06)_0%,transparent_60%)] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(79,70,229,0.08)_0%,transparent_60%)] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

                <div className="flex-1 w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col justify-center">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24 mt-10"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                            Clear pricing for <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#a855f7]">Unfair Advantages.</span>
                        </h1>
                        <p className="text-xl text-[#8b9bb4] font-light max-w-2xl mx-auto">
                            Whether you need a high-converting web presence or a fully autonomous AI sales machine, our systems scale with your ambition.
                        </p>
                    </motion.div>

                    {/* Web Design Pricing */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Website Infrastructure</h2>
                            <p className="text-muted text-lg font-light">Custom-coded frontends that act as your hardest working salesperson.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                            {websiteTiers.map((tier, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    key={tier.name}
                                    className={`relative rounded-3xl p-8 flex flex-col bg-[#0a0f14]/60 backdrop-blur-xl border transition-all duration-300 ${tier.isPopular
                                            ? "border-[#4f46e5]/50 shadow-[0_0_50px_rgba(79,70,229,0.15)] -translate-y-2"
                                            : "border-white/10 hover:border-white/20"
                                        }`}
                                >
                                    {tier.isPopular && (
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4f46e5]/20 blur-[50px] pointer-events-none rounded-full" />
                                    )}
                                    {tier.isPopular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00c2ff] to-[#4f46e5] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(0,194,255,0.4)] whitespace-nowrap">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-6 relative z-10">
                                        <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                                        <p className="text-sm text-[#8b9bb4] min-h-[40px] font-light">{tier.description}</p>
                                    </div>

                                    <div className="mb-8 flex items-baseline border-b border-white/10 pb-8 relative z-10">
                                        <span className="text-5xl font-black tracking-tight text-white">{tier.price}</span>
                                        <span className="text-muted text-sm ml-2 font-medium">/ project</span>
                                    </div>

                                    <div className="space-y-4 flex-1 mb-8 relative z-10">
                                        {tier.features.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#00c2ff]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-3.5 h-3.5 text-[#00c2ff]" />
                                                </div>
                                                <span className="text-sm text-white/90 font-light leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                        {tier.missingFeatures.map((feature) => (
                                            <div key={feature} className="flex items-start gap-3 opacity-40">
                                                <X className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                                                <span className="text-sm text-white/50 line-through font-light">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto relative z-10">
                                        <div className="w-full">
                                            <QuoteModal triggerText={tier.isPopular ? "Build My Growth Engine" : "Get A Free Quote"} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* AI Automation Pricing */}
                    <div className="relative pt-24 border-t border-white/10 mb-20">
                        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[radial-gradient(ellipse,rgba(168,85,247,0.1)_0%,transparent_60%)] rounded-full blur-[100px] pointer-events-none" />

                        <div className="text-center mb-16 relative z-10">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                                <Settings className="w-4 h-4 text-[#a855f7] animate-[spin_4s_linear_infinite]" />
                                <span className="text-xs uppercase tracking-widest text-[#8b9bb4] font-medium">AI Systems</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">AI & Growth Automation</h2>
                            <p className="text-[#8b9bb4] text-lg font-light max-w-2xl mx-auto">Scale infinitely without adding headcount. Fully automated closed-loop acquisition systems.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">

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
                                            <span className="text-white/90 font-light text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/book?service=Complete Growth Infrastructure" className="w-full block mt-auto">
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
                                            <span className="text-white/70 font-light text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/book?service=AI Agent Only" className="w-full block mt-auto">
                                    <button className="w-full py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all backdrop-blur-sm active:scale-95">
                                        Book AI Implementation
                                    </button>
                                </Link>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </main>

            <section>
                <FinalCTA />
            </section>
            <Footer />
        </div>
    );
}
