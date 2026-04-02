import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Blurb Area */}
          <div className="md:col-span-5 lg:col-span-6">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Vici Global Logo"
                width={200}
                height={64}
                className="h-[64px] w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
              A unified AI growth infrastructure. We build automated acquisition systems that generate leads, qualify prospects, and book appointments 24/7 without fail.
            </p>
            
            {/* Socials */}
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/profile.php?id=61578469441820" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#00c2ff]/10 hover:text-[#00c2ff] hover:border-[#00c2ff]/30 border border-transparent transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://www.instagram.com/vici_global1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#00c2ff]/10 hover:text-[#00c2ff] hover:border-[#00c2ff]/30 border border-transparent transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="mailto:info@vici-global.com" aria-label="Email" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#00c2ff]/10 hover:text-[#00c2ff] hover:border-[#00c2ff]/30 border border-transparent transition-all">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Platform</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#features" className="text-sm text-white/50 hover:text-white transition-colors">
                  Product Stack
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-white/50 hover:text-white transition-colors">
                  Pricing & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-sm text-white/50 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-white/50 hover:text-white transition-colors">
                  Book A Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Vici Global. All rights reserved.
          </p>
          <p className="text-sm text-white/30 flex items-center gap-1">
            Engineered for <span className="text-[#00c2ff] font-medium">Performance</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
