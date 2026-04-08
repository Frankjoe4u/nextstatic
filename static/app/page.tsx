import AudienceStats from "@/components/AudienceStats";
import CtaSection from "@/components/CtaSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import LogosBar from "@/components/LogosBar";
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="relative z-10 pt-44">
        <LogosBar />
      </div>

      <Features />
      <Solutions />
      <AudienceStats />
      <Testimonials />
      <Integrations />
      <CtaSection />
      <Footer />
    </main>
  );
}
