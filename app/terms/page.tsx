import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Vici Global",
  description: "Terms of Service for Vici Global AI Growth Systems",
};

export default function TermsOfService() {
  return (
    <main className="flex min-h-screen flex-col leading-relaxed selection:bg-electric/30 bg-[#05080a]">
      <Navbar />

      <section className="pt-40 pb-20 relative px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Terms of <span className="text-electric">Service</span>
          </h1>
          <p className="text-muted mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-invert prose-lg max-w-none text-white/80 space-y-8">
            <p>
              Please read these Terms of Service ("Terms", "Agreement") carefully before using the Vici Global website and infrastructure (the "Service") operated by Vici Global ("us", "we", or "our").
            </p>
            <p>
              By accessing or using the Service, you signify your agreement to be bound by these Terms. If you disagree with any part of the terms, you may not access our systems.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Scope of Services</h2>
            <p>
              Vici Global provides AI infrastructure and automation services, including but not limited to AI lead generation, intelligent conversational qualification, 24/7 AI voice reception, and seamless CRM integrations ("Growth Infrastructure"). The exact deliverables will be scoped in your individualized agreement.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Accurate Information:</strong> You must supply accurate credentials, API keys, and business details to allow our systems to integrate with your tech stack securely.</li>
              <li><strong>Lawful Use:</strong> You agree not to use our AI systems for any illegal or unauthorized purpose, including violating any telecommunications, spam, or marketing laws within your jurisdiction.</li>
              <li><strong>Approvals:</strong> You are responsible for approving the logic, conversational flows, and ad creatives built by our team before deployment.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Payment and Fees</h2>
            <p>
              Our pricing consists of upfront Setup Build Fees and recurring monthly retainers (e.g., $2,500 Setup and $2,000/month for Complete Infrastructure). 
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Billing:</strong> Fees are billed in advance. Setup fees are non-refundable once the infrastructure build begins.</li>
              <li><strong>Cancellations:</strong> Services operate on ongoing contracts with terms specified in your master service agreement. Cancellations must adhere to the notice periods stipulated in that agreement.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Intellectual Property</h2>
            <p>
              <strong>Vici Global IP:</strong> We retain all intellectual property rights to our custom AI models, prompt architectures, predictive systems, code, and landing page frameworks. You are granted a limited, non-exclusive license to utilize these tools for your business while maintaining an active subscription.
            </p>
            <p>
              <strong>Client Data:</strong> You retain the rights to all raw prospect data, leads, generated lists, and customer information funneled into your CRM via our system.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Disclaimer of Warranties</h2>
            <p>
              Our automated systems are provided on an "AS IS" and "AS AVAILABLE" basis. While our systems are built for high-performance ROI, Vici Global makes no absolute guarantees regarding specific financial returns, lead conversion rates, or an error-free uptime, as AI technology and third-party dependencies (like Meta Ads or CRM APIs) can vary.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Vici Global, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from from your access to or use of or inability to access or use the Service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">8. Contact Us</h2>
            <p>
              For legal inquiries or questions about these terms, please contact legal@viciglobal.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
