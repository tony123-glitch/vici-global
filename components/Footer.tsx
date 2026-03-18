import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0a0f14]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight text-white/50">VICI GLOBAL</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/50">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>

        <div className="text-sm text-white/30">
          © {new Date().getFullYear()} Vici Global - AI Growth Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
