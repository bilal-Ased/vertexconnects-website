import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { AnalyticsSection } from "@/components/analytics-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { TrialSignupModal } from "@/components/trial-signup-modal";
import { useEffect, useState } from "react";

export default function Home() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation onStartTrial={() => setTrialModalOpen(true)} />
      <main>
        <HeroSection onStartTrial={() => setTrialModalOpen(true)} />
        <FeaturesSection />
        <AnalyticsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection onStartTrial={() => setTrialModalOpen(true)} />
        <ContactSection />
      </main>
      <Footer />
      <TrialSignupModal open={trialModalOpen} onOpenChange={setTrialModalOpen} />
    </div>
  );
}
