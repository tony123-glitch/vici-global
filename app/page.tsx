import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SystemFlow } from "@/components/SystemFlow";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ProductStack } from "@/components/ProductStack";
import { DemoFeel } from "@/components/DemoFeel";
import { Pricing } from "@/components/Pricing";
import { Authority } from "@/components/Authority";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col leading-relaxed selection:bg-electric/30">
      <Navbar />
      <Hero />
      <SystemFlow />
      <ProblemSolution />
      <ProductStack />
      <DemoFeel />
      <Pricing />
      <Authority />
      <FinalCTA />
      <Footer />
    </main>
  );
}
