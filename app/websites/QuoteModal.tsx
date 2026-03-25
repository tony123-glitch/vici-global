"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

interface QuoteModalProps {
    triggerText?: string;
}

export function QuoteModal({ triggerText = "Get A Free Quote" }: QuoteModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        description: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate a form submission
        setTimeout(() => {
            setIsSubmitted(true);
        }, 800);
    };

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                variant="primary"
                className="w-full shadow-[0_0_20px_rgba(0,194,255,0.2)] hover:shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-shadow"
            >
                {triggerText}
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
                        >
                            <div className="relative bg-[#0a0f14]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,194,255,0.1)] overflow-hidden">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute right-6 top-6 text-white/50 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {!isSubmitted ? (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Request a Quote</h3>
                                            <p className="text-sm text-muted">
                                                Tell us a bit about your project, and we'll get back to you with a custom proposal within 24 hours.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-white/80">Full Name *</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-white/80">Email Address *</label>
                                                <input
                                                    required
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors"
                                                    placeholder="john@company.com"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-white/80">Company Name</label>
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors"
                                                    placeholder="Your Company LLC"
                                                />
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-white/80">Project Details *</label>
                                                <textarea
                                                    required
                                                    value={formData.description}
                                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                    className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors min-h-[100px] resize-none"
                                                    placeholder="Tell us about your goals, timeline, and any specific requirements..."
                                                />
                                            </div>

                                            <Button type="submit" variant="primary" className="w-full mt-2">
                                                Submit Request
                                            </Button>
                                        </form>
                                    </div>
                                ) : (
                                    <div className="py-12 text-center space-y-4">
                                        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Request Received</h3>
                                        <p className="text-muted">
                                            Thank you for reaching out! Our team is reviewing your project details and will be in touch shortly.
                                        </p>
                                        <Button onClick={() => setIsOpen(false)} variant="primary" className="mt-4">
                                            Close
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
