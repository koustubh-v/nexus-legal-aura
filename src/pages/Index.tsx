import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { UploadSection } from "@/components/UploadSection";
import { ChatSection } from "@/components/ChatSection";
import { ReportSection } from "@/components/ReportSection";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <Navigation />
      <main>
        <HeroSection />
        <UploadSection />
        <ChatSection />
        <ReportSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
