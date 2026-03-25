import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Vici Global",
  description: "Privacy Policy for Vici Global AI Growth Systems",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col leading-relaxed selection:bg-electric/30 bg-[#05080a]">
      <Navbar />

      <section className="pt-40 pb-20 relative px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Privacy <span className="text-electric">Policy</span>
          </h1>
          <p className="text-muted mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-invert prose-lg max-w-none text-white/80 space-y-8">
            <p>
              Vici Global ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website, AI infrastructure, and related services (collectively, the "Services").
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
            <p>We may collect and process the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical commercial address.</li>
              <li><strong>Business Information:</strong> Company name, CRM details, lead volume, and operational metrics.</li>
              <li><strong>Communication Data:</strong> Records of communications between you and our AI agents (voice, text, or email), intended for training and quality assurance.</li>
              <li><strong>Technical Data:</strong> IP addresses, browser types, device information, and usage patterns gathered through cookies and analytics tools.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h2>
            <p>We utilize the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provision, maintain, and improve our AI Lead Generation and Appointment Setting infrastructure.</li>
              <li>Facilitate bi-directional sync with your designated CRM platforms (e.g., GoHighLevel, HubSpot, Salesforce).</li>
              <li>Train our conversational AI models to handle objections and qualify prospects more effectively.</li>
              <li>Communicate important updates regarding your account, billing, and system optimizations.</li>
              <li>Comply with applicable legal requirements.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share your information with trusted third parties strictly under the following conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Service Providers:</strong> Vendors who assist us in operating our platform, securely processing payments, or running meta campaigns.</li>
              <li><strong>CRM Integrations:</strong> Directly syncing lead and appointment data into your preferred CRM systems.</li>
              <li><strong>Legal Obligations:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures, including encryption and strict access controls, to protect your personal information and proprietary business data from unauthorized access, alteration, or disclosure. However, no data transmission mechanism over the internet can be guaranteed as completely secure.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Your Privacy Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. If you wish to exercise any of these rights, please contact our support channels directly.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. By continuing to use our Services after these changes take effect, you agree to the revised policy.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please reach out to our privacy compliance team via your dedicated support channel or via email at privacy@viciglobal.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
