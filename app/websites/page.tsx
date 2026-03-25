"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, X } from "lucide-react";
import { QuoteModal } from "./QuoteModal";

const pricingTiers = [
    {
        name: "Small Business",
        price: "$500+",
        description: "Perfect for local shops and service providers.",
        features: [
            "Custom 5-page Responsive Design",
            "Basic SEO Setup",
            "Contact Form Integration",
            "Mobile Optimized",
            "1 Revision Round",
        ],
        missingFeatures: [
            "Advanced Interactions & Animations",
            "E-commerce Functionality",
            "Custom Dashboard / CMS",
        ],
        isPopular: false,
    },
    {
        name: "Growing Brand",
        price: "$900+",
        description: "Ideal for scaling agencies and growing startups.",
        features: [
            "Custom 10-page Architecture",
            "Advanced SEO & Performance",
            "CMS Integration",
            "Subtle Animations",
            "3 Revision Rounds",
        ],
        missingFeatures: ["E-commerce Functionality", "Custom Web Application Logic"],
        isPopular: true,
    },
    {
        name: "Established / E-commerce",
        price: "$2,500+",
        description: "For high-volume stores and enterprise web apps.",
        features: [
            "Unlimited Custom Pages",
            "Full E-commerce Setup (Shopify/Stripe)",
            "95+ Speed Score Guarantee",
            "3D & Canvas Animations",
            "Dedicated Account Manager",
        ],
        missingFeatures: [],
        isPopular: false,
    },
];

function PricingTable() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full relative z-10">
            {pricingTiers.map((tier) => (
                <div
                    key={tier.name}
                    className={`relative rounded-3xl p-8 flex flex-col bg-[#0a0f14]/80 backdrop-blur-xl border ${
                        tier.isPopular
                            ? "border-electric/50 shadow-[0_0_30px_rgba(0,194,255,0.15)] -translate-y-2 md:-translate-y-4"
                            : "border-white/10"
                    }`}
                >
                    {tier.isPopular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-electric text-[#0a0f14] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{tier.name}</h3>
                        <p className="text-sm text-muted min-h-[40px]">{tier.description}</p>
                    </div>

                    <div className="mb-8 flex items-baseline">
                        <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                        <span className="text-muted text-sm ml-1">/ project</span>
                    </div>

                    <div className="space-y-4 flex-1 mb-8">
                        {tier.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-sm text-white/90">{feature}</span>
                            </div>
                        ))}
                        {tier.missingFeatures.map((feature) => (
                            <div key={feature} className="flex items-start gap-3 opacity-50">
                                <X className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                                <span className="text-sm text-muted line-through">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10">
                        <div className="w-full">
                            <QuoteModal triggerText="Get A Free Quote" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function WebsitesPricingPage() {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-electric/30">
            <Navbar />

            <main className="pt-32 pb-24 relative overflow-hidden min-h-screen flex flex-col">
                {/* Background glow lines */}
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="flex-1 w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-400">Web Design</span>
                        </h1>
                        <p className="text-xl text-muted max-w-2xl mx-auto">
                            Transform your digital presence with high-fidelity, high-converting digital instruments engineered for extreme ROI.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <PricingTable />
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
