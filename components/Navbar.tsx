"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/Button";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-white">VICI GLOBAL</span>
          <div className="w-2 h-2 rounded-full bg-electric animate-glow" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <Link href="#system" className="hover:text-white transition-colors">System</Link>
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#demo" className="hover:text-white transition-colors">Demo</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center">
          <Link href="/book">
            <Button variant="primary" size="sm">Book a Call</Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
