"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${scrolled ? "top-6 px-4" : "top-0 px-6"}`}>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled 
            ? "bg-[#05050a]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.5)] rounded-full px-8 h-16" 
            : "bg-transparent border border-transparent px-0 h-24"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png"
            alt="Vici Global Logo"
            width={270}
            height={90}
            className={`w-auto object-contain transition-all duration-500 ${scrolled ? "h-12 lg:h-14" : "h-16 lg:h-[4.5rem]"}`}
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <Link href="#system" className="hover:text-white transition-colors">System</Link>
          <Link href="/web-design" className="hover:text-white transition-colors">Web Design</Link>
          <Link href="#demo" className="hover:text-white transition-colors">Demo</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center">
          <Link href="/book">
            <Button variant="primary" size="sm" className={`shadow-[0_0_15px_rgba(0,194,255,0.2)] ${scrolled ? "rounded-full" : ""}`}>Book a Call</Button>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
