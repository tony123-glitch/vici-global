import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { BookingForm } from "../../components/BookingForm";

export const metadata = {
  title: "Book a Call | Vici Global",
  description: "Book your AI Growth Strategy Call.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen flex flex-col relative bg-background">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-electric/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Minimal Header */}
      <header className="absolute top-0 w-full z-50 p-6 flex justify-center md:justify-start">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-white">VICI GLOBAL</span>
          <div className="w-2 h-2 rounded-full bg-electric animate-glow" />
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center py-24 px-6 relative z-10 w-full">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Value Prop */}
          <div className="flex flex-col gap-8 pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight">
              Book Your AI Growth <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-orange">Strategy Call</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              In 30 minutes, we'll show you exactly how to automate your lead flow and never miss another opportunity.
            </p>

            <div className="space-y-4 mt-4">
              {[
                "Live breakdown of your current pipeline",
                "Where you're losing leads (and money)",
                "How AI can fix it instantly",
                "Custom system tailored to your business"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-electric flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-white/90">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-2xl bg-panel border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-electric/20 flex flex-shrink-0 items-center justify-center text-electric font-bold text-xl">
                 V
              </div>
              <div>
                <p className="font-bold text-white mb-1">Strictly for scaling businesses.</p>
                <p className="text-sm text-muted">We only partner with companies ready to handle increased lead volume.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Flow */}
          <div className="w-full">
            <BookingForm />
          </div>

        </div>
      </div>
    </main>
  );
}
