"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";

export function BookingForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [isQualified, setIsQualified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    revenue: "",
    serviceOfInterest: initialService,
    problem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-qualification logic or CRM submission happens here.
    setIsQualified(true);
  };

  return (
    <div className="relative bg-[#0a0f14]/80 backdrop-blur-xl border border-white/10 rounded-3xl md:p-10 p-6 shadow-[0_0_50px_rgba(0,194,255,0.05)] overflow-hidden min-h-[550px] flex flex-col">
      <AnimatePresence mode="wait">
        {!isQualified ? (
          <motion.div
            key="qual-form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Step 1: Application</h3>
              <p className="text-sm text-muted">Please provide details about your business so we can prepare a custom strategy.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Full Name</label>
                <input 
                  required
                  type="text" 
                  suppressHydrationWarning
                  className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Business Type / Industry</label>
                <input 
                  required
                  type="text" 
                  suppressHydrationWarning
                  className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors"
                  placeholder="e.g. Real Estate Agency, HVAC Contractor"
                  value={formData.businessType}
                  onChange={e => setFormData({...formData, businessType: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Monthly Revenue</label>
                <select 
                  required
                  suppressHydrationWarning
                  className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors appearance-none"
                  value={formData.revenue}
                  onChange={e => setFormData({...formData, revenue: e.target.value})}
                >
                  <option value="" disabled>Select revenue range</option>
                  <option value="Under $10k/mo">Under $10k/mo</option>
                  <option value="$10k - $50k/mo">$10k - $50k/mo</option>
                  <option value="$50k - $100k/mo">$50k - $100k/mo</option>
                  <option value="$100k+/mo">$100k+/mo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Option of Interest</label>
                <select 
                  required
                  suppressHydrationWarning
                  className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors appearance-none"
                  value={formData.serviceOfInterest}
                  onChange={e => setFormData({...formData, serviceOfInterest: e.target.value})}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="AI Agent Only">AI Agent Only</option>
                  <option value="Complete Growth Infrastructure">Complete Growth Infrastructure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Biggest Problem Right Now</label>
                <textarea 
                  required
                  suppressHydrationWarning
                  className="w-full bg-panel border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-electric transition-colors min-h-[100px] resize-none"
                  placeholder="e.g. Generating quality leads, following up fast enough..."
                  value={formData.problem}
                  onChange={e => setFormData({...formData, problem: e.target.value})}
                />
              </div>

              <div className="mt-auto pt-4" suppressHydrationWarning>
                <Button type="submit" variant="primary" size="lg" className="w-full shadow-[0_0_20px_rgba(0,194,255,0.3)]" suppressHydrationWarning>
                  Continue to Calendar
                </Button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="calendar-embed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 w-full bg-white rounded-xl overflow-hidden min-h-[500px]"
          >
            {/* Calendar Embed */}
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/EduEpvF68doCt7cz538U" 
              style={{ width: "100%", height: "100%", border: "none", minHeight: "600px" }}
              scrolling="no" 
              id="EduEpvF68doCt7cz538U_1773862864482"
            />
            <CalendarScriptLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CalendarScriptLoader() {
  useEffect(() => {
    const scriptId = "leadconnector-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://api.leadconnectorhq.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
